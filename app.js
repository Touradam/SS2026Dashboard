// Solar Sense Pro - China Launch Dashboard
// Main Application Logic

// ====================================
// State Management
// ====================================

const state = {
    checklistProgress: {},
    weekTaskProgress: {},
    weekCompletions: {},
    milestoneProgress: { q3: {}, q4: {} },
    currentMonth: 'July',
    currentFilter: 'all',
    lastUpdated: null,
    // User edits
    customWeekData: {},      // Store edited week content
    customRelationships: {}, // Store edited relationship details
    customTags: {}          // Store changed tag values
};

// ====================================
// LocalStorage Functions
// ====================================

function loadState() {
    try {
        const saved = localStorage.getItem('solarSenseDashboard');
        if (saved) {
            const parsed = JSON.parse(saved);
            Object.assign(state, parsed);
        }
        if (!state.weekTaskProgress) state.weekTaskProgress = {};
    } catch (error) {
        console.error('Error loading state:', error);
    }
}

function saveState() {
    try {
        state.lastUpdated = new Date().toISOString();
        localStorage.setItem('solarSenseDashboard', JSON.stringify(state));
    } catch (error) {
        console.error('Error saving state:', error);
    }
}

function resetState() {
    if (confirm('Are you sure you want to reset all progress? This cannot be undone.')) {
        localStorage.removeItem('solarSenseDashboard');
        location.reload();
    }
}

// ====================================
// Date Utilities
// ====================================

function parseDate(dateStr) {
    const [year, month, day] = dateStr.split('-').map(Number);
    return new Date(year, month - 1, day);
}

function formatDate(date) {
    return date.toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    });
}

function getDaysBetween(date1, date2) {
    const oneDay = 24 * 60 * 60 * 1000;
    return Math.round((date2 - date1) / oneDay);
}

function getCurrentWeek() {
    const today = new Date();
    const startDate = parseDate(executionPlan.timeline.startDate);
    const endDate = parseDate(executionPlan.timeline.endDate);
    
    if (today < startDate) {
        return 0; // Before start
    }
    if (today > endDate) {
        return executionPlan.timeline.totalWeeks + 1; // After end
    }
    
    const daysPassed = getDaysBetween(startDate, today);
    const weekNumber = Math.floor(daysPassed / 7) + 1;
    return Math.min(weekNumber, executionPlan.timeline.totalWeeks);
}

function formatCountdown(days) {
    if (days < 0) return 'Event passed';
    if (days === 0) return 'Today';
    if (days === 1) return '1 day';
    if (days < 7) return `${days} days`;
    if (days < 30) return `${Math.floor(days / 7)} weeks`;
    return `${Math.floor(days / 30)} months`;
}

// ====================================
// Progress Calculations
// ====================================

function getChecklistCategories() {
    return Object.keys(executionPlan.readinessChecklist);
}

function getTotalChecklistItems() {
    return getChecklistCategories().reduce((sum, category) => {
        return sum + executionPlan.readinessChecklist[category].length;
    }, 0);
}

function calculateOverallProgress() {
    const totalItems = getTotalChecklistItems();
    const completedItems = Object.values(state.checklistProgress).filter(Boolean).length;
    return totalItems === 0 ? 0 : Math.round((completedItems / totalItems) * 100);
}

function calculateCategoryProgress(category) {
    const items = executionPlan.readinessChecklist[category];
    const completed = items.filter(item => state.checklistProgress[item.id]).length;
    return {
        completed,
        total: items.length,
        percentage: Math.round((completed / items.length) * 100)
    };
}

function getProgressStatus(percentage) {
    if (percentage === 0) return 'not-started';
    if (percentage < 26) return 'not-started';
    if (percentage < 76) return 'in-progress';
    if (percentage < 100) return 'near-completion';
    return 'complete';
}

function getProgressStatusText(percentage) {
    if (percentage === 0) return 'Not Started';
    if (percentage < 26) return 'Not Started';
    if (percentage < 76) return 'In Progress';
    if (percentage < 100) return 'Near Completion';
    return 'Complete';
}

// ====================================
// Overview Section
// ====================================

function updateOverview() {
    const currentWeek = getCurrentWeek();
    const today = new Date();
    const endDate = parseDate(executionPlan.timeline.endDate);
    const daysRemaining = getDaysBetween(today, endDate);
    const overallProgress = calculateOverallProgress();
    
    document.getElementById('overall-progress').textContent = `${overallProgress}%`;
    document.getElementById('current-week').textContent = currentWeek > 0 && currentWeek <= executionPlan.timeline.totalWeeks ? `Week ${currentWeek}` : '—';
    document.getElementById('days-remaining').textContent = daysRemaining > 0 ? `${daysRemaining} days` : 'Completed';
    
    const completedItems = Object.values(state.checklistProgress).filter(Boolean).length;
    document.getElementById('checklist-progress').textContent = `${completedItems}/${getTotalChecklistItems()}`;
    
    // Calculate total hours
    const totalHours = executionPlan.weeks.reduce((sum, week) => {
        return sum + week.hours.adama + week.hours.jordan;
    }, 0);
    document.getElementById('total-hours').textContent = totalHours;
}

// ====================================
// Timeline Section
// ====================================

function getWeekStatus(weekNumber) {
    return state.customTags?.activity?.[`week-${weekNumber}`] || 'Plan';
}

function getWeekTopic(week) {
    return state.customWeekData?.['week-topic']?.[`week-${week.weekNumber}`] || week.topic;
}

function getStatusBadgeClass(status) {
    return `badge-${status.toLowerCase().replace(/\s+/g, '-')}`;
}

function getPriorityBadgeClass(priority) {
    return `badge-${priority.toLowerCase()}`;
}

function buildWeekMetaTags(week, options = {}) {
    const { editable = true, showMonth = true } = options;
    const status = getWeekStatus(week.weekNumber);
    const statusAttrs = editable
        ? `data-editable-tag="activity" data-tag-id="week-${week.weekNumber}" title="Click to change status"`
        : '';

    return `
        <span class="badge badge-phase">${week.phase}</span>
        <span class="badge ${getPriorityBadgeClass(week.priority)}">${week.priority}</span>
        <span class="badge ${getStatusBadgeClass(status)}" ${statusAttrs}>${status}</span>
        ${showMonth ? `<span class="badge badge-month">${week.month}</span>` : ''}
    `;
}

function buildWeekTeamHtml(week) {
    return `
        <div class="week-team">
            <span class="team-member"><strong>Adama</strong> ${week.hours.adama}h</span>
            <span class="team-separator">|</span>
            <span class="team-member"><strong>Jordan</strong> ${week.hours.jordan}h</span>
            <span class="team-separator">|</span>
            <span class="team-total">${week.hours.adama + week.hours.jordan}h total</span>
        </div>
    `;
}

function getWeekTaskId(weekNumber, type, index) {
    return `week-${weekNumber}-${type}-${index}`;
}

function isWeekTaskComplete(taskId) {
    return Boolean(state.weekTaskProgress[taskId]);
}

function calculateWeekProgress(weekNumber) {
    const week = executionPlan.weeks.find(w => w.weekNumber === weekNumber);
    if (!week) return { completed: 0, total: 0, percentage: 0 };

    const activityCount = week.keyActivities?.length || 0;
    const deliverableCount = week.deliverables?.length || 0;
    const total = activityCount + deliverableCount;
    let completed = 0;

    (week.keyActivities || []).forEach((_, index) => {
        if (isWeekTaskComplete(getWeekTaskId(weekNumber, 'activity', index))) completed++;
    });
    (week.deliverables || []).forEach((_, index) => {
        if (isWeekTaskComplete(getWeekTaskId(weekNumber, 'deliverable', index))) completed++;
    });

    return {
        completed,
        total,
        percentage: total === 0 ? 0 : Math.round((completed / total) * 100)
    };
}

function buildWeekProgressBarHtml(weekNumber, compact = false) {
    const { completed, total, percentage } = calculateWeekProgress(weekNumber);
    return `
        <div class="week-progress ${compact ? 'week-progress--compact' : ''}" data-week-progress="${weekNumber}">
            <div class="week-progress-header">
                <span class="week-progress-label">Week Progress</span>
                <span class="week-progress-stats">${completed}/${total} · ${percentage}%</span>
            </div>
            <div class="progress-bar week-progress-bar">
                <div class="progress-fill week-progress-fill" style="width: ${percentage}%"></div>
            </div>
        </div>
    `;
}

function buildWeekTodoListHtml(week, items, type, label) {
    if (!items?.length) return '';

    let completedInSection = 0;
    const listItems = items.map((text, index) => {
        const taskId = getWeekTaskId(week.weekNumber, type, index);
        const isChecked = isWeekTaskComplete(taskId);
        if (isChecked) completedInSection++;

        return `
            <li class="week-todo-item ${isChecked ? 'completed' : ''}">
                <div class="week-todo-item-header">
                    <div class="checkbox-wrapper">
                        <input type="checkbox"
                               class="checkbox week-task-checkbox"
                               id="${taskId}"
                               data-task-id="${taskId}"
                               data-week="${week.weekNumber}"
                               ${isChecked ? 'checked' : ''}>
                    </div>
                    <label for="${taskId}" class="week-todo-label">${text}</label>
                </div>
            </li>
        `;
    }).join('');

    return `
        <div class="week-todo-section" data-week="${week.weekNumber}" data-todo-type="${type}">
            <div class="week-todo-header">
                <span class="track-label">${label}</span>
                <span class="week-todo-count" data-week-section="${week.weekNumber}" data-section-type="${type}">
                    ${completedInSection}/${items.length}
                </span>
            </div>
            <ul class="week-todo-list">
                ${listItems}
            </ul>
        </div>
    `;
}

function buildWeekKeyActivitiesHtml(week) {
    return buildWeekTodoListHtml(week, week.keyActivities, 'activity', 'Key Activities');
}

function buildWeekDeliverablesHtml(week) {
    return buildWeekTodoListHtml(week, week.deliverables, 'deliverable', 'Deliverables');
}

function updateWeekProgressUI(weekNumber) {
    const { completed, total, percentage } = calculateWeekProgress(weekNumber);

    document.querySelectorAll(`[data-week-progress="${weekNumber}"]`).forEach(el => {
        const stats = el.querySelector('.week-progress-stats');
        const fill = el.querySelector('.week-progress-fill');
        if (stats) stats.textContent = `${completed}/${total} · ${percentage}%`;
        if (fill) fill.style.width = `${percentage}%`;
    });

    const week = executionPlan.weeks.find(w => w.weekNumber === weekNumber);
    if (!week) return;

    ['activity', 'deliverable'].forEach(type => {
        const items = type === 'activity' ? week.keyActivities : week.deliverables;
        if (!items?.length) return;

        let sectionCompleted = 0;
        items.forEach((_, index) => {
            if (isWeekTaskComplete(getWeekTaskId(weekNumber, type, index))) sectionCompleted++;
        });

        document.querySelectorAll(`[data-week-section="${weekNumber}"][data-section-type="${type}"]`).forEach(el => {
            el.textContent = `${sectionCompleted}/${items.length}`;
        });
    });

    document.querySelectorAll(`.week-detail-card[data-week="${weekNumber}"], .week-card[data-week="${weekNumber}"]`).forEach(card => {
        card.classList.toggle('week-complete', percentage === 100 && total > 0);
    });
}

function setupWeekTaskHandlers() {
    document.body.addEventListener('change', (e) => {
        const checkbox = e.target.closest('.week-task-checkbox');
        if (!checkbox) return;

        e.stopPropagation();

        const taskId = checkbox.dataset.taskId;
        const weekNumber = parseInt(checkbox.dataset.week, 10);
        state.weekTaskProgress[taskId] = checkbox.checked;
        saveState();

        const item = checkbox.closest('.week-todo-item');
        if (item) {
            item.classList.toggle('completed', checkbox.checked);
        }

        updateWeekProgressUI(weekNumber);
    });

    document.body.addEventListener('click', (e) => {
        if (e.target.closest('.week-task-checkbox, .week-todo-label, .week-todo-item')) {
            e.stopPropagation();
        }
    });
}

function buildWeekObjectiveHtml(week) {
    if (!week.objective) return '';
    return `
        <div class="week-objective">
            <span class="track-label">Objective</span>
            <p class="track-content">${week.objective}</p>
        </div>
    `;
}

function buildWeekResourcesHtml(week) {
    if (!week.resourcesRequired?.length) return '';
    return `
        <div class="week-resources">
            <span class="track-label">Resources Required</span>
            <ul class="resources-list">
                ${week.resourcesRequired.map(r => `<li>${r}</li>`).join('')}
            </ul>
        </div>
    `;
}

function buildWeekSuccessMetricsHtml(week) {
    if (!week.successMetrics?.length) return '';
    return `
        <div class="week-success-metrics">
            <span class="track-label">Success Metrics</span>
            <ul class="metric-list">
                ${week.successMetrics.map(m => `<li class="metric-item">${m}</li>`).join('')}
            </ul>
        </div>
    `;
}

function buildWeekTracksHtml(week, editable = false) {
    const weekId = week.weekNumber;
    const customTechnical = state.customWeekData?.['technical-track']?.[`week-${weekId}`] || week.technicalTrack;
    const customRelationship = state.customWeekData?.['relationship-track']?.[`week-${weekId}`] || week.relationshipTrack;
    const customJordan = state.customWeekData?.['jordan-track']?.[`week-${weekId}`] || week.jordanTrack;
    const textAttrs = editable
        ? (type) => ` data-editable-text="${type}" data-text-id="week-${weekId}" title="Double-click to edit"`
        : () => '';

    return `
        <div class="week-track">
            <span class="track-label">Technical Track</span>
            <p class="track-content"${textAttrs('technical-track')}>${customTechnical}</p>
        </div>
        <div class="week-track">
            <span class="track-label">Relationship Track</span>
            <p class="track-content"${textAttrs('relationship-track')}>${customRelationship}</p>
        </div>
        <div class="week-track">
            <span class="track-label">Jordan Track</span>
            <p class="track-content"${textAttrs('jordan-track')}>${customJordan}</p>
        </div>
    `;
}

function buildWeekActivityPreview(week) {
    const { completed, total, percentage } = calculateWeekProgress(week.weekNumber);
    if (total === 0) return '';

    const incomplete = [];
    (week.keyActivities || []).forEach((text, index) => {
        if (!isWeekTaskComplete(getWeekTaskId(week.weekNumber, 'activity', index))) {
            incomplete.push(text);
        }
    });
    (week.deliverables || []).forEach((text, index) => {
        if (!isWeekTaskComplete(getWeekTaskId(week.weekNumber, 'deliverable', index))) {
            incomplete.push(text);
        }
    });

    const preview = incomplete.slice(0, 2);
    if (!preview.length && percentage === 100) {
        return `<p class="week-preview-complete">All tasks complete</p>`;
    }

    return `
        <div class="week-activities-preview-wrap">
            <span class="week-preview-progress">${completed}/${total} done</span>
            ${preview.length ? `
                <ul class="week-activities-preview">
                    ${preview.map(item => `<li>${item}</li>`).join('')}
                </ul>
            ` : ''}
        </div>
    `;
}

function buildWeekDetailCard(week, currentWeek) {
    const isCurrentWeek = week.weekNumber === currentWeek;
    const topic = getWeekTopic(week);
    const status = getWeekStatus(week.weekNumber);
    const progress = calculateWeekProgress(week.weekNumber);
    const isComplete = progress.percentage === 100 && progress.total > 0;

    return `
        <article class="week-detail-card ${isCurrentWeek ? 'current-week' : ''} ${isComplete ? 'week-complete' : ''}"
                 data-reveal
                 data-week="${week.weekNumber}"
                 data-status="${status.toLowerCase()}"
                 data-phase="${week.phase}">
            <div class="week-detail-header">
                <div class="week-detail-id">
                    <span class="week-number-badge">Week ${week.weekNumber}</span>
                    <span class="week-dates">${week.dates}</span>
                </div>
                <div class="week-meta week-meta--detail">
                    ${buildWeekMetaTags(week)}
                </div>
            </div>
            <h4 class="week-topic"
                data-editable-text="week-topic"
                data-text-id="week-${week.weekNumber}"
                title="Double-click to edit">${topic}</h4>
            ${buildWeekTeamHtml(week)}
            ${buildWeekProgressBarHtml(week.weekNumber)}
            ${buildWeekObjectiveHtml(week)}
            ${buildWeekKeyActivitiesHtml(week)}
            ${buildWeekResourcesHtml(week)}
            ${buildWeekDeliverablesHtml(week)}
            ${buildWeekSuccessMetricsHtml(week)}
            <button type="button" class="week-detail-expand-btn" data-week="${week.weekNumber}">
                View full details
            </button>
        </article>
    `;
}

function getPhaseClass(phase) {
    const phaseMap = {
        'Land & Launch': 'Pipeline',
        'Market Entry': 'Audits',
        'Manufacturing Kickoff': 'Production',
        'Hardware Ingestion': 'Hardware',
        'Field Deployment': 'Field',
        'Scale, Showcase & Graduation': 'Scale'
    };
    return phaseMap[phase] || 'Pipeline';
}

function renderTimeline() {
    const container = document.getElementById('timeline-container');
    const currentWeek = getCurrentWeek();
    
    container.innerHTML = executionPlan.weeks.map(week => {
        const isCurrentWeek = week.weekNumber === currentWeek;
        const phaseClass = getPhaseClass(week.phase);
        const topic = getWeekTopic(week);
        const progress = calculateWeekProgress(week.weekNumber);
        const isComplete = progress.percentage === 100 && progress.total > 0;
        
        return `
            <div class="week-card ${isCurrentWeek ? 'current-week' : ''} ${isComplete ? 'week-complete' : ''}" data-reveal data-week="${week.weekNumber}">
                <div class="week-header phase-${phaseClass}">
                    <div class="week-number">Week ${week.weekNumber}</div>
                    <div class="week-dates">${week.dates}</div>
                </div>
                <div class="week-body">
                    <div class="week-topic" 
                         data-editable-text="week-topic" 
                         data-text-id="week-${week.weekNumber}"
                         title="Double-click to edit">${topic}</div>
                    <div class="week-meta">
                        ${buildWeekMetaTags(week)}
                    </div>
                    ${buildWeekTeamHtml(week)}
                    ${buildWeekProgressBarHtml(week.weekNumber, true)}
                    ${buildWeekActivityPreview(week)}
                </div>
            </div>
        `;
    }).join('');
    
    // Add click handlers
    document.querySelectorAll('.week-card').forEach(card => {
        card.addEventListener('click', (e) => {
            if (e.target.closest('.week-task-checkbox, .week-todo-label, .week-todo-item, .week-todo-list')) return;
            const weekNum = parseInt(card.dataset.week, 10);
            showWeekModal(weekNum);
        });
    });
}

function renderWeekActivities() {
    const container = document.getElementById('week-activities-container');
    if (!container) return;

    const currentWeek = getCurrentWeek();
    container.innerHTML = executionPlan.weeks
        .map(week => buildWeekDetailCard(week, currentWeek))
        .join('');

    container.querySelectorAll('.week-detail-expand-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            showWeekModal(parseInt(btn.dataset.week, 10));
        });
    });
}

function setupWeekActivityFilters() {
    const filterBtns = document.querySelectorAll('[data-week-filter]');
    if (!filterBtns.length) return;

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.dataset.weekFilter;
            document.querySelectorAll('.week-detail-card').forEach(card => {
                if (filter === 'all') {
                    card.style.display = '';
                    return;
                }
                const status = card.dataset.status || '';
                card.style.display = status === filter ? '' : 'none';
            });
        });
    });
}

function showWeekModal(weekNumber) {
    const week = executionPlan.weeks.find(w => w.weekNumber === weekNumber);
    if (!week) return;
    
    const modal = document.getElementById('week-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalBody = document.getElementById('modal-body');
    
    const customTopic = getWeekTopic(week);
    const status = getWeekStatus(weekNumber);
    
    modalTitle.textContent = `Week ${week.weekNumber}: ${customTopic}`;
    
    modalBody.innerHTML = `
        <div class="week-details">
            ${buildWeekProgressBarHtml(weekNumber)}
            <div class="detail-section">
                <div class="detail-title">Dates</div>
                <div class="detail-text">${week.dates}</div>
            </div>

            <div class="detail-section">
                <div class="detail-title">Tags</div>
                <div class="week-meta week-meta--detail">
                    ${buildWeekMetaTags(week)}
                </div>
            </div>
            
            <div class="detail-section">
                <div class="detail-title">Status</div>
                <span class="badge ${getStatusBadgeClass(status)}"
                      data-editable-tag="activity" 
                      data-tag-id="week-${weekNumber}"
                      title="Click to change status">${status}</span>
            </div>

            <div class="detail-section">
                <div class="detail-title">Team</div>
                ${buildWeekTeamHtml(week)}
            </div>
            
            ${buildWeekObjectiveHtml(week)}
            ${buildWeekKeyActivitiesHtml(week)}
            ${buildWeekResourcesHtml(week)}
            ${buildWeekDeliverablesHtml(week)}
            ${buildWeekSuccessMetricsHtml(week)}
        </div>
    `;
    
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
}

function closeModal() {
    const modal = document.getElementById('week-modal');
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
}

// ====================================
// Monthly Section
// ====================================

function renderMonthContent(month) {
    const monthObj = executionPlan.monthlyObjectives.find(m => m.month === month);
    const monthWeeks = executionPlan.weeks.filter(w => w.month === month);
    
    const container = document.getElementById('month-content');
    
    container.innerHTML = `
        <div class="month-header">
            <h3 class="month-title">${monthObj.month} 2026</h3>
            <div class="month-objectives">
                <div class="objective-item">
                    <div class="objective-label">Primary Focus:</div>
                    <div class="objective-value">${monthObj.focus}</div>
                </div>
                <div class="objective-item">
                    <div class="objective-label">Pilot Acquisition Goal:</div>
                    <div class="objective-value">${monthObj.pilotGoal}</div>
                </div>
                <div class="objective-item">
                    <div class="objective-label">Manufacturing Goal:</div>
                    <div class="objective-value">${monthObj.manufacturingGoal}</div>
                </div>
                <div class="objective-item">
                    <div class="objective-label">Critical Deliverable:</div>
                    <div class="objective-value">${monthObj.criticalDeliverable}</div>
                </div>
            </div>
        </div>
        
        <div class="month-weeks">
            ${monthWeeks.map(week => {
                const topic = getWeekTopic(week);
                return `
                <div class="week-accordion">
                    <div class="week-accordion-header">
                        <div class="week-accordion-summary">
                            <div class="week-accordion-title-row">
                                <span class="week-number-badge">Week ${week.weekNumber}</span>
                                <span class="week-accordion-title">${topic}</span>
                            </div>
                            <div class="week-accordion-dates">${week.dates}</div>
                            <div class="week-meta week-meta--compact">
                                ${buildWeekMetaTags(week, { showMonth: false })}
                            </div>
                            ${buildWeekTeamHtml(week)}
                            ${buildWeekProgressBarHtml(week.weekNumber, true)}
                        </div>
                        <div class="week-accordion-icon">▼</div>
                    </div>
                    <div class="week-accordion-content">
                        <div class="week-details">
                            ${buildWeekObjectiveHtml(week)}
                            ${buildWeekKeyActivitiesHtml(week)}
                            ${buildWeekResourcesHtml(week)}
                            ${buildWeekDeliverablesHtml(week)}
                            ${buildWeekSuccessMetricsHtml(week)}
                        </div>
                    </div>
                </div>
            `}).join('')}
        </div>
    `;
    
    // Add accordion functionality
    document.querySelectorAll('.week-accordion-header').forEach(header => {
        header.addEventListener('click', () => {
            const accordion = header.parentElement;
            accordion.classList.toggle('active');
        });
    });
}

function setupMonthTabs() {
    const tabs = document.querySelectorAll('.month-tab');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            
            const month = tab.dataset.month;
            state.currentMonth = month;
            renderMonthContent(month);
        });
    });
    
    renderMonthContent(state.currentMonth);
}

// ====================================
// Relationships Section
// ====================================

function renderRelationships() {
    renderRelationshipCategory('pnpCore', 'pnp-core-list');
    renderRelationshipCategory('manufacturing', 'manufacturing-list');
    renderRelationshipCategory('researchPartners', 'research-partners-list');
}

function renderRelationshipCategory(category, containerId) {
    const container = document.getElementById(containerId);
    const relationships = executionPlan.relationships[category];
    
    container.innerHTML = relationships.map((rel, index) => {
        const relId = `${category}-${index}`;
        
        // Load custom values
        const customStatus = state.customTags?.status?.[relId] || rel.status;
        const customName = state.customWeekData?.['relationship-name']?.[relId] || rel.name;
        const customRole = state.customWeekData?.['relationship-role']?.[relId] || rel.role;
        const customOrg = state.customWeekData?.['relationship-org']?.[relId] || rel.organization;
        const customNextAction = state.customWeekData?.['relationship-action']?.[relId] || rel.nextAction;
        
        const statusClass = customStatus.toLowerCase().replace(/\s+/g, '-');
        
        return `
            <div class="relationship-card" data-search="${customRole} ${customName} ${customOrg}">
                <div class="relationship-header">
                    <div class="relationship-role" 
                         data-editable-text="relationship-role" 
                         data-text-id="${relId}"
                         title="Double-click to edit">${customRole}</div>
                    <div class="relationship-name" 
                         data-editable-text="relationship-name" 
                         data-text-id="${relId}"
                         title="Double-click to edit">${customName}</div>
                </div>
                <div class="relationship-org" 
                     data-editable-text="relationship-org" 
                     data-text-id="${relId}"
                     title="Double-click to edit">${customOrg}</div>
                <div class="relationship-detail">
                    <strong>Why it matters:</strong> ${rel.whyItMatters}
                </div>
                <div class="relationship-detail">
                    <strong>Sourcing path:</strong> ${rel.sourcingPath}
                </div>
                <div class="relationship-detail">
                    <strong>Next action:</strong> <span data-editable-text="relationship-action" 
                         data-text-id="${relId}"
                         title="Double-click to edit">${customNextAction}</span>
                </div>
                <div class="relationship-detail">
                    <strong>First ask:</strong> "${rel.firstAsk}"
                </div>
                <span class="status-badge status-${statusClass}"
                      data-editable-tag="status" 
                      data-tag-id="${relId}"
                      title="Click to change status">${customStatus}</span>
            </div>
        `;
    }).join('');
}

function setupRelationshipSearch() {
    const searchInput = document.getElementById('relationship-search');
    
    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();
        const cards = document.querySelectorAll('.relationship-card');
        
        cards.forEach(card => {
            const searchText = card.dataset.search.toLowerCase();
            if (searchText.includes(query)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
}

// ====================================
// Checklist Section
// ====================================

const CHECKLIST_CATEGORIES = [
    { key: 'marketDevelopment', containerId: 'market-checklist', countId: 'market-count' },
    { key: 'pilotDevelopment', containerId: 'pilot-checklist', countId: 'pilot-count' },
    { key: 'fundraising', containerId: 'fundraising-checklist', countId: 'fundraising-count' },
    { key: 'manufacturing', containerId: 'manufacturing-checklist', countId: 'manufacturing-count' },
    { key: 'strategic', containerId: 'strategic-checklist', countId: 'strategic-count' }
];

function renderChecklist() {
    CHECKLIST_CATEGORIES.forEach(({ key, containerId, countId }) => {
        renderChecklistCategory(key, containerId, countId);
    });
    updateChecklistProgress();
}

function renderChecklistCategory(category, containerId, countId) {
    const container = document.getElementById(containerId);
    const items = executionPlan.readinessChecklist[category];
    
    container.innerHTML = items.map(item => {
        const isChecked = state.checklistProgress[item.id] || false;
        
        return `
            <div class="checklist-item ${isChecked ? 'completed' : ''}" data-item="${item.id}">
                <div class="checklist-item-header">
                    <div class="checkbox-wrapper">
                        <input type="checkbox" class="checkbox" id="${item.id}" ${isChecked ? 'checked' : ''}>
                    </div>
                    <label for="${item.id}" class="checklist-description">${item.description}</label>
                </div>
                <div class="checklist-meta">
                    <div class="meta-row">
                        <span class="meta-label">Verification:</span>
                        <span class="meta-value">${item.verification}</span>
                    </div>
                    <div class="meta-row">
                        <span class="meta-label">Target Date:</span>
                        <span class="meta-value">${item.targetDate}</span>
                    </div>
                    <div class="meta-row">
                        <span class="meta-label">Owner:</span>
                        <span class="meta-value">${item.owner}</span>
                    </div>
                </div>
            </div>
        `;
    }).join('');
    
    // Add checkbox handlers
    container.querySelectorAll('.checkbox').forEach(checkbox => {
        checkbox.addEventListener('change', (e) => {
            const itemId = e.target.id;
            state.checklistProgress[itemId] = e.target.checked;
            saveState();
            updateChecklistProgress();
            const item = e.target.closest('.checklist-item');
            if (e.target.checked) {
                item.classList.add('completed');
            } else {
                item.classList.remove('completed');
            }
        });
    });
    
    updateCategoryCount(category, countId);
}

function updateCategoryCount(category, countId) {
    const progress = calculateCategoryProgress(category);
    document.getElementById(countId).textContent = `${progress.completed}/${progress.total}`;
}

function updateChecklistProgress() {
    const overallProgress = calculateOverallProgress();
    const statusClass = getProgressStatus(overallProgress);
    const statusText = getProgressStatusText(overallProgress);
    
    document.getElementById('checklist-overall-percent').textContent = `${overallProgress}%`;
    document.getElementById('checklist-overall-fill').style.width = `${overallProgress}%`;
    
    const statusElement = document.getElementById('checklist-status');
    statusElement.textContent = statusText;
    statusElement.className = `progress-status ${statusClass}`;
    
    // Update category counts
    CHECKLIST_CATEGORIES.forEach(({ key, countId }) => {
        updateCategoryCount(key, countId);
    });
    
    // Update overview
    updateOverview();
}

// ====================================
// Milestones Section
// ====================================

function renderMilestones() {
    renderMilestone('q3', 'q3-criteria', 'q3-progress-fill', 'q3-progress-percent');
    renderMilestone('q4', 'q4-criteria', 'q4-progress-fill', 'q4-progress-percent');
}

function renderMilestone(quarter, containerId, fillId, percentId) {
    const container = document.getElementById(containerId);
    const milestone = executionPlan.milestones[quarter];
    
    container.innerHTML = milestone.criteria.map((criterion, index) => {
        const criterionId = `${quarter}-${index}`;
        const isChecked = state.milestoneProgress[quarter][criterionId] || false;
        
        return `
            <div class="criterion-item">
                <div class="criterion-header">
                    <input type="checkbox" class="criterion-checkbox" id="${criterionId}" ${isChecked ? 'checked' : ''}>
                    <label for="${criterionId}" class="criterion-category">${criterion.category}</label>
                </div>
                <div class="criterion-target"><strong>Target:</strong> ${criterion.target}</div>
                <div class="criterion-success"><strong>Success:</strong> ${criterion.successCriteria}</div>
            </div>
        `;
    }).join('');
    
    // Add checkbox handlers
    container.querySelectorAll('.criterion-checkbox').forEach(checkbox => {
        checkbox.addEventListener('change', (e) => {
            const criterionId = e.target.id;
            if (!state.milestoneProgress[quarter]) {
                state.milestoneProgress[quarter] = {};
            }
            state.milestoneProgress[quarter][criterionId] = e.target.checked;
            saveState();
            updateMilestoneProgress(quarter, fillId, percentId);
        });
    });
    
    updateMilestoneProgress(quarter, fillId, percentId);
}

function updateMilestoneProgress(quarter, fillId, percentId) {
    const milestone = executionPlan.milestones[quarter];
    const total = milestone.criteria.length;
    const completed = Object.values(state.milestoneProgress[quarter] || {}).filter(Boolean).length;
    const percentage = Math.round((completed / total) * 100);
    
    document.getElementById(fillId).style.width = `${percentage}%`;
    document.getElementById(percentId).textContent = `${percentage}%`;
}

// ====================================
// Key Dates Section
// ====================================

function renderKeyDates() {
    const container = document.getElementById('dates-list');
    const today = new Date();
    
    container.innerHTML = executionPlan.keyDates.map((dateObj, index) => {
        const dateStart = parseDate(dateObj.date);
        const daysUntil = getDaysBetween(today, dateStart);
        const dateId = `date-${index}`;
        
        // Load custom values
        const customType = state.customTags?.type?.[dateId] || dateObj.type;
        const customEvent = state.customWeekData?.['date-event']?.[dateId] || dateObj.event;
        
        return `
            <div class="date-card" data-type="${customType}">
                <div class="date-date">${dateObj.date}</div>
                <div class="date-event" 
                     data-editable-text="date-event" 
                     data-text-id="${dateId}"
                     title="Double-click to edit">${customEvent}</div>
                <span class="date-type type-${customType}"
                      data-editable-tag="type" 
                      data-tag-id="${dateId}"
                      title="Click to change type">${customType}</span>
                <div class="date-location">📍 ${dateObj.location}</div>
            </div>
        `;
    }).join('');
    
    updateNextEventCountdown();
}

function updateNextEventCountdown() {
    const today = new Date();
    const upcomingEvents = executionPlan.keyDates
        .map(dateObj => ({
            ...dateObj,
            date: parseDate(dateObj.date),
            daysUntil: getDaysBetween(today, parseDate(dateObj.date))
        }))
        .filter(e => e.daysUntil >= 0)
        .sort((a, b) => a.daysUntil - b.daysUntil);
    
    if (upcomingEvents.length > 0) {
        const nextEvent = upcomingEvents[0];
        document.getElementById('next-event-name').textContent = nextEvent.event;
        document.getElementById('next-event-countdown').textContent = formatCountdown(nextEvent.daysUntil);
    } else {
        document.getElementById('next-event-name').textContent = 'Program Complete';
        document.getElementById('next-event-countdown').textContent = '🎉';
    }
}

function setupDateFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const filter = btn.dataset.filter;
            const cards = document.querySelectorAll('.date-card');
            
            cards.forEach(card => {
                if (filter === 'all' || card.dataset.type === filter) {
                    card.style.display = 'grid';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
}

// ====================================
// Glossary Section
// ====================================

function renderGlossary() {
    const container = document.getElementById('glossary-list');
    const glossaryArray = Object.entries(executionPlan.glossary).map(([acronym, data]) => ({
        acronym,
        ...data
    }));
    
    container.innerHTML = glossaryArray.map(item => `
        <div class="glossary-item" data-search="${item.acronym} ${item.full} ${item.definition}">
            <div class="glossary-acronym">${item.acronym}</div>
            <div class="glossary-full">${item.full}</div>
            <div class="glossary-definition">${item.definition}</div>
        </div>
    `).join('');
}

function setupGlossarySearch() {
    const searchInput = document.getElementById('glossary-search');
    
    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();
        const items = document.querySelectorAll('.glossary-item');
        
        items.forEach(item => {
            const searchText = item.dataset.search.toLowerCase();
            if (searchText.includes(query)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
}

// ====================================
// Navigation & UI
// ====================================

function setupNavigation() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Smooth scroll (mobile toggle handled by motion.js)
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const isInPageAnchor = typeof targetId === 'string' && targetId.startsWith('#');

            // Let normal page navigation happen for non-anchor links
            if (!isInPageAnchor) {
                window.location.href = targetId;
                return;
            }

            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
                
                // Close mobile menu
                if (navMenu) {
                    navMenu.classList.remove('active');
                    if (navToggle) {
                        navToggle.setAttribute('aria-expanded', 'false');
                    }
                }
            }
        });
    });
}

function setupModal() {
    const modal = document.getElementById('week-modal');
    const closeBtn = modal.querySelector('.modal-close');
    const overlay = modal.querySelector('.modal-overlay');
    
    closeBtn.addEventListener('click', closeModal);
    overlay.addEventListener('click', closeModal);
    
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
}

function setupFooterActions() {
    const exportBtn = document.getElementById('export-btn');
    const resetBtn = document.getElementById('reset-btn');
    
    exportBtn.addEventListener('click', exportProgress);
    resetBtn.addEventListener('click', resetState);
}

function exportProgress() {
    const data = {
        ...state,
        exportDate: new Date().toISOString(),
        overallProgress: calculateOverallProgress(),
        categoryProgress: Object.fromEntries(
            getChecklistCategories().map(category => [
                category,
                calculateCategoryProgress(category)
            ])
        )
    };
    
    const dataStr = JSON.stringify(data, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `solar-sense-progress-${new Date().toISOString().split('T')[0]}.json`;
    link.click();
    URL.revokeObjectURL(url);
}

// ====================================
// Initialization
// ====================================

function init() {
    // Load saved state
    loadState();
    
    // Setup UI components
    setupNavigation();
    setupModal();
    setupFooterActions();
    
    // Initialize editing features
    if (typeof initTagEditing === 'function') {
        initTagEditing();
    }
    if (typeof initTextEditing === 'function') {
        initTextEditing();
    }

    document.addEventListener('weekStatusChanged', (e) => {
        const weekNum = e.detail.tagId.replace('week-', '');
        const card = document.querySelector(`.week-detail-card[data-week="${weekNum}"]`);
        if (card) {
            card.dataset.status = e.detail.newValue.toLowerCase();
        }
    });
    
    // Render all sections
    updateOverview();
    renderTimeline();
    renderWeekActivities();
    setupWeekActivityFilters();
    setupWeekTaskHandlers();
    setupMonthTabs();
    renderRelationships();
    setupRelationshipSearch();
    renderChecklist();
    renderMilestones();
    renderKeyDates();
    setupDateFilters();
    renderGlossary();
    setupGlossarySearch();

    // Re-bind scroll reveal for dynamically rendered cards
    requestAnimationFrame(() => {
        if (window.MidnightMotion?.refreshScrollReveal) {
            window.MidnightMotion.refreshScrollReveal();
        }
    });
    
    console.log('Solar Sense Dashboard initialized successfully');
}

// Wait for DOM and data to load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
