// Solar Sense Pro - China Launch Dashboard
// Main Application Logic

// ====================================
// State Management
// ====================================

const state = {
    checklistProgress: {},
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
        return 27; // After end
    }
    
    const daysPassed = getDaysBetween(startDate, today);
    const weekNumber = Math.floor(daysPassed / 7) + 1;
    return Math.min(weekNumber, 26);
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

function calculateOverallProgress() {
    const totalItems = 14;
    const completedItems = Object.values(state.checklistProgress).filter(Boolean).length;
    return Math.round((completedItems / totalItems) * 100);
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
    document.getElementById('current-week').textContent = currentWeek > 0 && currentWeek <= 26 ? `Week ${currentWeek}` : '—';
    document.getElementById('days-remaining').textContent = daysRemaining > 0 ? `${daysRemaining} days` : 'Completed';
    
    const completedItems = Object.values(state.checklistProgress).filter(Boolean).length;
    document.getElementById('checklist-progress').textContent = `${completedItems}/14`;
    
    // Calculate total hours
    const totalHours = executionPlan.weeks.reduce((sum, week) => {
        return sum + week.hours.adama + week.hours.jordan;
    }, 0);
    document.getElementById('total-hours').textContent = totalHours;
}

// ====================================
// Timeline Section
// ====================================

function getPhaseClass(phase) {
    const phaseMap = {
        'Pipeline Seeding': 'Pipeline',
        'Audits & Commitments': 'Audits',
        'Production Kickoff': 'Production',
        'Hardware Validation': 'Hardware',
        'Field Deployment': 'Field',
        'Scale & Graduation': 'Scale'
    };
    return phaseMap[phase] || 'Pipeline';
}

function renderTimeline() {
    const container = document.getElementById('timeline-container');
    const currentWeek = getCurrentWeek();
    
    container.innerHTML = executionPlan.weeks.map(week => {
        const isCurrentWeek = week.weekNumber === currentWeek;
        const phaseClass = getPhaseClass(week.phase);
        
        // Load custom values if they exist
        const customPriority = state.customTags?.priority?.[`week-${week.weekNumber}`];
        const priority = customPriority || week.priority;
        
        const customTopic = state.customWeekData?.['week-topic']?.[`week-${week.weekNumber}`];
        const topic = customTopic || week.topic;
        
        return `
            <div class="week-card ${isCurrentWeek ? 'current-week' : ''}" data-week="${week.weekNumber}">
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
                        <span class="badge badge-${priority.toLowerCase()}" 
                              data-editable-tag="priority" 
                              data-tag-id="week-${week.weekNumber}"
                              title="Click to change priority">${priority}</span>
                        <span class="badge" style="background: var(--phase-${week.month.toLowerCase()}); color: white;">${week.month}</span>
                    </div>
                    <div class="week-hours">
                        Adama: ${week.hours.adama}h | Jordan: ${week.hours.jordan}h
                    </div>
                </div>
            </div>
        `;
    }).join('');
    
    // Add click handlers
    document.querySelectorAll('.week-card').forEach(card => {
        card.addEventListener('click', () => {
            const weekNum = parseInt(card.dataset.week);
            showWeekModal(weekNum);
        });
    });
}

function showWeekModal(weekNumber) {
    const week = executionPlan.weeks.find(w => w.weekNumber === weekNumber);
    if (!week) return;
    
    const modal = document.getElementById('week-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalBody = document.getElementById('modal-body');
    
    // Load custom values
    const customTopic = state.customWeekData?.['week-topic']?.[`week-${weekNumber}`] || week.topic;
    const customPriority = state.customTags?.priority?.[`week-${weekNumber}`] || week.priority;
    const customTechnical = state.customWeekData?.['technical-track']?.[`week-${weekNumber}`] || week.technicalTrack;
    const customRelationship = state.customWeekData?.['relationship-track']?.[`week-${weekNumber}`] || week.relationshipTrack;
    const customJordan = state.customWeekData?.['jordan-track']?.[`week-${weekNumber}`] || week.jordanTrack;
    
    modalTitle.textContent = `Week ${week.weekNumber}: ${customTopic}`;
    
    modalBody.innerHTML = `
        <div class="week-details">
            <div class="detail-section">
                <div class="detail-title">📅 Dates</div>
                <div class="detail-text">${week.dates}</div>
            </div>
            
            <div class="detail-section">
                <div class="detail-title">🎯 Priority Level</div>
                <span class="badge badge-${customPriority.toLowerCase()}"
                      data-editable-tag="priority" 
                      data-tag-id="week-${weekNumber}"
                      title="Click to change priority">${customPriority}</span>
            </div>
            
            <div class="detail-section">
                <div class="detail-title">⏱️ Estimated Hours</div>
                <div class="detail-text">Adama: ${week.hours.adama} hours | Jordan: ${week.hours.jordan} hours</div>
            </div>
            
            <div class="detail-section">
                <div class="detail-title">🔧 Technical Track</div>
                <div class="detail-text" 
                     data-editable-text="technical-track" 
                     data-text-id="week-${weekNumber}"
                     title="Double-click to edit">${customTechnical}</div>
            </div>
            
            <div class="detail-section">
                <div class="detail-title">🤝 Relationship Track</div>
                <div class="detail-text" 
                     data-editable-text="relationship-track" 
                     data-text-id="week-${weekNumber}"
                     title="Double-click to edit">${customRelationship}</div>
            </div>
            
            <div class="detail-section">
                <div class="detail-title">👨‍💼 Jordan Track</div>
                <div class="detail-text" 
                     data-editable-text="jordan-track" 
                     data-text-id="week-${weekNumber}"
                     title="Double-click to edit">${customJordan}</div>
            </div>
            
            <div class="detail-section">
                <div class="detail-title">📦 Deliverables</div>
                <ul class="deliverable-list">
                    ${week.deliverables.map(d => `<li class="deliverable-item">${d}</li>`).join('')}
                </ul>
            </div>
            
            <div class="detail-section">
                <div class="detail-title">✓ Success Metrics</div>
                <ul class="metric-list">
                    ${week.successMetrics.map(m => `<li class="metric-item">${m}</li>`).join('')}
                </ul>
            </div>
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
            ${monthWeeks.map(week => `
                <div class="week-accordion">
                    <div class="week-accordion-header">
                        <div>
                            <div class="week-accordion-title">Week ${week.weekNumber}: ${week.topic}</div>
                            <div style="font-size: 14px; color: #6B7280; margin-top: 4px;">${week.dates}</div>
                        </div>
                        <div class="week-accordion-icon">▼</div>
                    </div>
                    <div class="week-accordion-content">
                        <div class="week-details">
                            <div class="detail-section">
                                <div class="detail-title">Technical Track</div>
                                <div class="detail-text">${week.technicalTrack}</div>
                            </div>
                            <div class="detail-section">
                                <div class="detail-title">Relationship Track</div>
                                <div class="detail-text">${week.relationshipTrack}</div>
                            </div>
                            <div class="detail-section">
                                <div class="detail-title">Jordan Track</div>
                                <div class="detail-text">${week.jordanTrack}</div>
                            </div>
                            <div class="detail-section">
                                <div class="detail-title">Deliverables</div>
                                <ul class="deliverable-list">
                                    ${week.deliverables.map(d => `<li class="deliverable-item">${d}</li>`).join('')}
                                </ul>
                            </div>
                            <div class="detail-section">
                                <div class="detail-title">Success Metrics</div>
                                <ul class="metric-list">
                                    ${week.successMetrics.map(m => `<li class="metric-item">${m}</li>`).join('')}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            `).join('')}
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
    renderRelationshipCategory('pilotChampions', 'pilot-champions-list');
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

function renderChecklist() {
    renderChecklistCategory('pilot', 'pilot-checklist', 'pilot-count');
    renderChecklistCategory('manufacturing', 'manufacturing-checklist', 'manufacturing-count');
    renderChecklistCategory('network', 'network-checklist', 'network-count');
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
    updateCategoryCount('pilot', 'pilot-count');
    updateCategoryCount('manufacturing', 'manufacturing-count');
    updateCategoryCount('network', 'network-count');
    
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
    
    // Mobile menu toggle
    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
            navToggle.setAttribute('aria-expanded', !isExpanded);
        });
    }
    
    // Smooth scroll
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
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
        categoryProgress: {
            pilot: calculateCategoryProgress('pilot'),
            manufacturing: calculateCategoryProgress('manufacturing'),
            network: calculateCategoryProgress('network')
        }
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
    
    // Render all sections
    updateOverview();
    renderTimeline();
    setupMonthTabs();
    renderRelationships();
    setupRelationshipSearch();
    renderChecklist();
    renderMilestones();
    renderKeyDates();
    setupDateFilters();
    renderGlossary();
    setupGlossarySearch();
    
    console.log('Solar Sense Dashboard initialized successfully');
}

// Wait for DOM and data to load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
