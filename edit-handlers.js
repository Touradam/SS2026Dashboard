// Solar Sense Pro - Edit Handlers
// Inline editing functionality for tags and text content

// ====================================
// Tag Cycling Configuration
// ====================================

const TAG_CYCLES = {
    activity: ['Plan', 'Execution', 'Archived'],
    status: ['Intro pending', 'In Progress', 'Active', 'Completed', 'Unknown'],
    type: ['Program', 'Travel', 'Manufacturing', 'Deployment', 'Milestone', 'Holiday', 'Fundraising']
};

// ====================================
// Tag Cycling Functions
// ====================================

function cycleTag(currentValue, cycleType) {
    const cycle = TAG_CYCLES[cycleType];
    const currentIndex = cycle.indexOf(currentValue);
    const nextIndex = (currentIndex + 1) % cycle.length;
    return cycle[nextIndex];
}

function initTagEditing() {
    // Delegate click handlers for all editable tags
    document.body.addEventListener('click', handleTagClick);
}

function handleTagClick(e) {
    const badge = e.target.closest('[data-editable-tag]');
    if (!badge) return;
    
    // Prevent triggering parent click handlers
    e.stopPropagation();
    
    const tagType = badge.dataset.editableTag; // 'activity', 'status', 'type'
    const tagId = badge.dataset.tagId;
    const currentValue = badge.textContent.trim();
    const newValue = cycleTag(currentValue, tagType);
    
    // Update UI
    badge.textContent = newValue;
    
    // Update class for styling
    const oldClass = badge.className.match(/badge-[\w-]+/);
    if (oldClass) {
        badge.classList.remove(oldClass[0]);
    }
    badge.classList.add(`badge-${newValue.toLowerCase().replace(/\s+/g, '-')}`);
    
    // Save to state
    if (!state.customTags) state.customTags = {};
    if (!state.customTags[tagType]) state.customTags[tagType] = {};
    state.customTags[tagType][tagId] = newValue;
    saveState();
    
    // Visual feedback
    badge.style.transform = 'scale(1.1)';
    setTimeout(() => {
        badge.style.transform = '';
    }, 150);
}

// ====================================
// Text Editing Functions
// ====================================

function initTextEditing() {
    document.body.addEventListener('dblclick', handleDoubleClick);
}

function handleDoubleClick(e) {
    const editableEl = e.target.closest('[data-editable-text]');
    if (!editableEl || editableEl.getAttribute('contenteditable') === 'true') return;
    
    e.preventDefault();
    makeEditable(editableEl);
}

function makeEditable(element) {
    const originalText = element.textContent;
    const textType = element.dataset.editableText; // 'week-topic', 'relationship-name', etc.
    const textId = element.dataset.textId;
    
    element.setAttribute('contenteditable', 'true');
    element.classList.add('editing');
    element.focus();
    
    // Select all text
    const range = document.createRange();
    range.selectNodeContents(element);
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
    
    const finishEdit = () => {
        element.setAttribute('contenteditable', 'false');
        element.classList.remove('editing');
        
        const newText = element.textContent.trim();
        if (newText && newText !== originalText) {
            saveTextEdit(textType, textId, newText);
        } else if (!newText) {
            element.textContent = originalText; // Prevent empty text
        }
    };
    
    // Handle blur event
    element.addEventListener('blur', finishEdit, { once: true });
    
    // Handle keyboard events
    const keyHandler = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            element.blur();
        } else if (e.key === 'Escape') {
            e.preventDefault();
            element.textContent = originalText;
            element.blur();
        }
    };
    
    element.addEventListener('keydown', keyHandler);
    
    // Clean up key handler on blur
    element.addEventListener('blur', () => {
        element.removeEventListener('keydown', keyHandler);
    }, { once: true });
}

function saveTextEdit(textType, textId, newValue) {
    if (!state.customWeekData) state.customWeekData = {};
    if (!state.customWeekData[textType]) state.customWeekData[textType] = {};
    state.customWeekData[textType][textId] = newValue;
    saveState();
}

// ====================================
// Initialization
// ====================================

// These functions will be called from app.js init()
console.log('Edit handlers module loaded');
