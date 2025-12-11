// State management
let state = {
    navbarTitle: 'My Homepage',
    editingTitle: false,
    currentPage: 'home',
    editMode: false,
    darkMode: false,
    mobileMenuOpen: false,
    containers: [],
    noteContainers: [],
    dataContainers: [],
    bgImage: ''
};

// Load data from localStorage
function loadData() {
    const savedTitle = localStorage.getItem('homepage-navbar-title');
    const savedContainers = localStorage.getItem('homepage-containers');
    const savedNoteContainers = localStorage.getItem('homepage-note-containers');
    const savedDarkMode = localStorage.getItem('homepage-darkmode');
    const savedBgImage = localStorage.getItem('homepage-bg-image');
    const savedDataContainers = localStorage.getItem('homepage-data-containers');

    if (savedTitle) state.navbarTitle = savedTitle;
    if (savedContainers) state.containers = JSON.parse(savedContainers);
    if (savedDarkMode) state.darkMode = JSON.parse(savedDarkMode);
    if (savedBgImage) state.bgImage = savedBgImage;

    if (savedNoteContainers) {
        state.noteContainers = JSON.parse(savedNoteContainers);
    } else {
        // Initialize with one default note container
        state.noteContainers = [{ title: 'Notes', content: '' }];
    }

    if (savedDataContainers) {
        const parsed = JSON.parse(savedDataContainers);
        // Migrate old format to new format if needed
        state.dataContainers = parsed.map(container => {
            if (container.content !== undefined && !container.rows) {
                return { title: container.title, rows: [{ name: '', key: '', radio: '' }] };
            }
            return container;
        });
    } else {
        // Initialize with 6 default containers
        state.dataContainers = [
            { title: 'Group 1', rows: [{ name: '', key: '', radio: '' }] },
            { title: 'Group 2', rows: [{ name: '', key: '', radio: '' }] },
            { title: 'Group 3', rows: [{ name: '', key: '', radio: '' }] },
            { title: 'Group 4', rows: [{ name: '', key: '', radio: '' }] },
            { title: 'Group 5', rows: [{ name: '', key: '', radio: '' }] },
            { title: 'Group 6', rows: [{ name: '', key: '', radio: '' }] }
        ];
    }
}

// Save data to localStorage
function saveData(key, value) {
    localStorage.setItem(key, typeof value === 'string' ? value : JSON.stringify(value));
}

// Update state and re-render
function setState(updates) {
    Object.assign(state, updates);

    // Update document title if navbar title changed
    if (updates.navbarTitle !== undefined) {
        document.title = updates.navbarTitle;
    }

    render();
}

// Container management
function addContainer() {
    state.containers.push({ title: 'New Container', links: [] });
    saveData('homepage-containers', state.containers);
    render();
}

function deleteContainer(index) {
    state.containers.splice(index, 1);
    saveData('homepage-containers', state.containers);
    render();
}

function updateContainerTitle(index, newTitle) {
    state.containers[index].title = newTitle;
    saveData('homepage-containers', state.containers);
    render();
}

function addLink(containerIndex) {
    state.containers[containerIndex].links.push({ title: 'New Link', url: 'https://' });
    saveData('homepage-containers', state.containers);
    render();
}

function deleteLink(containerIndex, linkIndex) {
    state.containers[containerIndex].links.splice(linkIndex, 1);
    saveData('homepage-containers', state.containers);
    render();
}

function updateLink(containerIndex, linkIndex, field, value) {
    state.containers[containerIndex].links[linkIndex][field] = value;
    saveData('homepage-containers', state.containers);
    render();
}

// Note container management
function addNoteContainer() {
    state.noteContainers.push({ title: 'New Note', content: '' });
    saveData('homepage-note-containers', state.noteContainers);
    render();
}

function deleteNoteContainer(index) {
    state.noteContainers.splice(index, 1);
    saveData('homepage-note-containers', state.noteContainers);
    render();
}

function updateNoteContainerTitle(index, newTitle) {
    state.noteContainers[index].title = newTitle;
    saveData('homepage-note-containers', state.noteContainers);
}

function updateNoteContent(index, newContent) {
    state.noteContainers[index].content = newContent;
    saveData('homepage-note-containers', state.noteContainers);
}

// Data container management
function addDataContainer() {
    state.dataContainers.push({ title: 'New Group', rows: [{ name: '', key: '', radio: '' }] });
    saveData('homepage-data-containers', state.dataContainers);
    render();
}

function deleteDataContainer(index) {
    state.dataContainers.splice(index, 1);
    saveData('homepage-data-containers', state.dataContainers);
    render();
}

function updateDataContainerTitle(index, newTitle) {
    state.dataContainers[index].title = newTitle;
    saveData('homepage-data-containers', state.dataContainers);
    render();
}

function addRow(containerIndex) {
    state.dataContainers[containerIndex].rows.push({ name: '', key: '', radio: '' });
    saveData('homepage-data-containers', state.dataContainers);
    render();
}

function deleteRow(containerIndex, rowIndex) {
    state.dataContainers[containerIndex].rows.splice(rowIndex, 1);
    saveData('homepage-data-containers', state.dataContainers);
    render();
}

function updateRowField(containerIndex, rowIndex, field, value) {
    state.dataContainers[containerIndex].rows[rowIndex][field] = value;
    saveData('homepage-data-containers', state.dataContainers);
}

// Render navbar
function renderNavbar() {
    return `
        <nav class="navbar">
            <div class="container navbar-content">
                <div class="navbar-title">
                    ${state.editingTitle ? `
                        <input
                            type="text"
                            id="navbar-title-input"
                            value="${state.navbarTitle}"
                            onblur="setState({ editingTitle: false })"
                        />
                    ` : `
                        <h1 onclick="setState({ editingTitle: true })">${state.navbarTitle}</h1>
                    `}
                </div>

                <!-- Desktop Menu -->
                <div class="navbar-menu">
                    <button class="nav-button ${state.currentPage === 'home' ? 'active' : ''}" onclick="setState({ currentPage: 'home', mobileMenuOpen: false })">
                        Home
                    </button>
                    <button class="nav-button ${state.currentPage === 'notes' ? 'active' : ''}" onclick="setState({ currentPage: 'notes', mobileMenuOpen: false })">
                        Notes
                    </button>
                    <button class="nav-button ${state.currentPage === 'data' ? 'active' : ''}" onclick="setState({ currentPage: 'data', mobileMenuOpen: false })">
                        Data
                    </button>
                    <button class="nav-button ${state.editMode ? 'edit-mode' : 'edit-button'}" onclick="setState({ editMode: !state.editMode, mobileMenuOpen: false })">
                        ${state.editMode ? 'Done' : 'Edit'}
                    </button>
                    <button class="icon-button" onclick="toggleDarkMode()">
                        <span class="icon ${state.darkMode ? 'icon-sun' : 'icon-moon'}"></span>
                    </button>
                </div>

                <!-- Mobile Menu Button -->
                <button class="mobile-menu-button" onclick="setState({ mobileMenuOpen: !state.mobileMenuOpen })">
                    <span class="icon ${state.mobileMenuOpen ? 'icon-x' : 'icon-menu'}"></span>
                </button>
            </div>

            <!-- Mobile Menu -->
            ${state.mobileMenuOpen ? `
                <div class="mobile-menu">
                    <button class="nav-button ${state.currentPage === 'home' ? 'active' : ''}" onclick="setState({ currentPage: 'home', mobileMenuOpen: false })">
                        Home
                    </button>
                    <button class="nav-button ${state.currentPage === 'notes' ? 'active' : ''}" onclick="setState({ currentPage: 'notes', mobileMenuOpen: false })">
                        Notes
                    </button>
                    <button class="nav-button ${state.currentPage === 'data' ? 'active' : ''}" onclick="setState({ currentPage: 'data', mobileMenuOpen: false })">
                        Data
                    </button>
                    <button class="nav-button ${state.editMode ? 'edit-mode' : 'edit-button'}" onclick="setState({ editMode: !state.editMode, mobileMenuOpen: false })">
                        ${state.editMode ? 'Done' : 'Edit'}
                    </button>
                    <button class="nav-button" onclick="toggleDarkMode(); setState({ mobileMenuOpen: false })">
                        <span class="icon ${state.darkMode ? 'icon-sun' : 'icon-moon'}"></span>
                        ${state.darkMode ? 'Light Mode' : 'Dark Mode'}
                    </button>
                </div>
            ` : ''}
        </nav>
    `;
}

// Render home page
function renderHomePage() {
    return `
        <div class="container">
            ${state.editMode ? `
                <div class="card">
                    <h2 class="text-xl font-bold mb-4">Background Image</h2>
                    <div class="space-y-2">
                        <div class="bg-settings">
                            <input
                                type="text"
                                id="bg-image-input"
                                value="${state.bgImage}"
                                placeholder="Enter image URL or filename (e.g., background.jpg)"
                            />
                            <button class="btn btn-danger" onclick="clearBackground()">Clear</button>
                        </div>
                        <p class="text-sm text-gray">You can use a URL or place an image file in the same folder and enter its filename</p>
                    </div>
                </div>

                <div class="card">
                    <h2 class="text-xl font-bold mb-4">Import / Export Data</h2>
                    <div class="flex gap-2">
                        <button class="btn btn-primary flex-1" onclick="exportData()">
                            Export Data
                        </button>
                        <button class="btn btn-primary flex-1" onclick="importData()">
                            Import Data
                        </button>
                    </div>
                    <p class="text-sm text-gray mt-2">Export all your data to a JSON file or import from a previously exported file</p>
                </div>
            ` : ''}

            ${state.editMode ? `
                <div class="mb-6">
                    <button class="btn btn-success btn-lg" onclick="addContainer()">
                        <span class="icon icon-plus"></span>
                        Add Container
                    </button>
                </div>
            ` : ''}

            <div class="grid grid-1 grid-2 grid-3">
                ${state.containers.map((container, containerIndex) => `
                    <div class="card">
                        <div class="mb-4">
                            ${state.editMode ? `
                                <input
                                    type="text"
                                    class="input-title"
                                    value="${container.title}"
                                    onchange="updateContainerTitle(${containerIndex}, this.value)"
                                />
                            ` : `
                                <h3 class="text-xl font-bold">${container.title}</h3>
                            `}
                        </div>

                        <div class="space-y-2">
                            ${container.links.map((link, linkIndex) => `
                                <div class="space-y-2">
                                    ${state.editMode ? `
                                        <input
                                            type="text"
                                            value="${link.title}"
                                            placeholder="Link title"
                                            onchange="updateLink(${containerIndex}, ${linkIndex}, 'title', this.value)"
                                        />
                                        <div class="flex gap-2">
                                            <input
                                                type="text"
                                                class="flex-1"
                                                value="${link.url}"
                                                placeholder="URL"
                                                onchange="updateLink(${containerIndex}, ${linkIndex}, 'url', this.value)"
                                            />
                                            <button class="btn btn-danger" onclick="deleteLink(${containerIndex}, ${linkIndex})">
                                                <span class="icon icon-trash"></span>
                                            </button>
                                        </div>
                                    ` : `
                                        <a href="${link.url}" target="_blank" rel="noopener noreferrer" class="link-button">
                                            ${link.title}
                                        </a>
                                    `}
                                </div>
                            `).join('')}
                        </div>

                        ${state.editMode ? `
                            <div class="mt-4 flex gap-2">
                                <button class="btn btn-primary flex-1" onclick="addLink(${containerIndex})">
                                    <span class="icon icon-plus"></span>
                                    Add Link
                                </button>
                                <button class="btn btn-danger" onclick="deleteContainer(${containerIndex})">
                                    <span class="icon icon-trash"></span>
                                </button>
                            </div>
                        ` : ''}
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

// Render notes page
function renderNotesPage() {
    return `
        <div class="container">
            ${state.editMode ? `
                <div class="mb-6">
                    <button class="btn btn-success btn-lg" onclick="addNoteContainer()">
                        <span class="icon icon-plus"></span>
                        Add Note Container
                    </button>
                </div>
            ` : ''}

            <div class="space-y-6">
                ${state.noteContainers.map((noteContainer, index) => `
                    <div class="card">
                        <div class="header-with-action">
                            <div class="flex-1">
                                ${state.editMode ? `
                                    <input
                                        type="text"
                                        class="input-title-lg"
                                        value="${noteContainer.title}"
                                        onchange="updateNoteContainerTitle(${index}, this.value)"
                                    />
                                ` : `
                                    <h2 class="text-2xl font-bold">${noteContainer.title}</h2>
                                `}
                            </div>
                            ${state.editMode && state.noteContainers.length > 1 ? `
                                <button class="btn btn-danger ml-4" onclick="deleteNoteContainer(${index})">
                                    <span class="icon icon-trash"></span>
                                    Delete
                                </button>
                            ` : ''}
                        </div>
                        <textarea
                            id="note-textarea-${index}"
                            class="notes-textarea"
                            placeholder="Start typing your notes here..."
                        >${noteContainer.content}</textarea>
                        <p class="text-sm text-gray mt-2">Changes are saved automatically</p>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

// Render data page
function renderDataPage() {
    return `
        <div class="container">
            ${state.editMode ? `
                <div class="mb-6">
                    <button class="btn btn-success btn-lg" onclick="addDataContainer()">
                        <span class="icon icon-plus"></span>
                        Add Container
                    </button>
                </div>
            ` : ''}

            <div class="space-y-6">
                ${state.dataContainers.map((dataContainer, containerIndex) => `
                    <div class="card">
                        <div class="header-with-action">
                            <div class="flex-1">
                                ${state.editMode ? `
                                    <input
                                        type="text"
                                        class="input-title-lg"
                                        value="${dataContainer.title}"
                                        onchange="updateDataContainerTitle(${containerIndex}, this.value)"
                                    />
                                ` : `
                                    <h2 class="text-2xl font-bold">${dataContainer.title}</h2>
                                `}
                            </div>
                            ${state.editMode ? `
                                <button class="btn btn-danger ml-4" onclick="deleteDataContainer(${containerIndex})">
                                    <span class="icon icon-trash"></span>
                                    Delete Container
                                </button>
                            ` : ''}
                        </div>

                        <div class="column-headers">
                            <div class="font-semibold text-gray-dark">Name</div>
                            <div class="font-semibold text-gray-dark">Key</div>
                            <div class="font-semibold text-gray-dark">Radio</div>
                        </div>

                        <div>
                            ${dataContainer.rows.map((row, rowIndex) => `
                                <div class="data-row">
                                    <div class="data-row-header">
                                        <div class="data-row-fields">
                                            <div class="data-field">
                                                <label class="data-field-label">Name</label>
                                                <input
                                                    type="text"
                                                    value="${row.name}"
                                                    placeholder="Enter name..."
                                                    onchange="updateRowField(${containerIndex}, ${rowIndex}, 'name', this.value)"
                                                />
                                            </div>
                                            <div class="data-field">
                                                <label class="data-field-label">Key</label>
                                                <input
                                                    type="text"
                                                    value="${row.key}"
                                                    placeholder="Enter key..."
                                                    onchange="updateRowField(${containerIndex}, ${rowIndex}, 'key', this.value)"
                                                />
                                            </div>
                                            <div class="data-field">
                                                <label class="data-field-label">Radio</label>
                                                <input
                                                    type="text"
                                                    value="${row.radio}"
                                                    placeholder="Enter radio..."
                                                    onchange="updateRowField(${containerIndex}, ${rowIndex}, 'radio', this.value)"
                                                />
                                            </div>
                                        </div>
                                        ${state.editMode ? `
                                            <button class="btn btn-danger delete-row-btn" onclick="deleteRow(${containerIndex}, ${rowIndex})" title="Delete row">
                                                <span class="icon icon-trash"></span>
                                            </button>
                                        ` : ''}
                                    </div>
                                </div>
                            `).join('')}
                        </div>

                        ${state.editMode ? `
                            <div class="mt-4">
                                <button class="btn btn-primary" onclick="addRow(${containerIndex})">
                                    <span class="icon icon-plus"></span>
                                    Add Row
                                </button>
                            </div>
                        ` : ''}

                        <p class="text-sm text-gray mt-4">Auto-saved</p>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

// Toggle dark mode
function toggleDarkMode() {
    state.darkMode = !state.darkMode;
    saveData('homepage-darkmode', state.darkMode);
    applyDarkMode();
    render();
}

// Apply dark mode to body
function applyDarkMode() {
    document.body.className = state.darkMode ? 'dark-mode' : 'light-mode';
    if (state.bgImage) {
        document.body.style.backgroundImage = `url(${state.bgImage})`;
    }
}

// Clear background
function clearBackground() {
    state.bgImage = '';
    saveData('homepage-bg-image', state.bgImage);
    document.body.style.backgroundImage = '';
    render();
}

// Export all data as JSON
function exportData() {
    const exportData = {
        version: '1.0',
        navbarTitle: state.navbarTitle,
        containers: state.containers,
        noteContainers: state.noteContainers,
        dataContainers: state.dataContainers,
        bgImage: state.bgImage,
        darkMode: state.darkMode
    };

    const dataStr = JSON.stringify(exportData, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);

    const link = document.createElement('a');
    link.href = url;
    link.download = 'homepage-data.json';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
}

// Import data from JSON file
function importData() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'application/json';

    input.onchange = (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (event) => {
            try {
                const importedData = JSON.parse(event.target.result);

                // Validate and import data
                if (importedData.navbarTitle) {
                    state.navbarTitle = importedData.navbarTitle;
                    saveData('homepage-navbar-title', state.navbarTitle);
                    document.title = state.navbarTitle;
                }
                if (importedData.containers) {
                    state.containers = importedData.containers;
                    saveData('homepage-containers', state.containers);
                }
                if (importedData.noteContainers) {
                    state.noteContainers = importedData.noteContainers;
                    saveData('homepage-note-containers', state.noteContainers);
                }
                if (importedData.dataContainers) {
                    state.dataContainers = importedData.dataContainers;
                    saveData('homepage-data-containers', state.dataContainers);
                }
                if (importedData.bgImage !== undefined) {
                    state.bgImage = importedData.bgImage;
                    saveData('homepage-bg-image', state.bgImage);
                    document.body.style.backgroundImage = state.bgImage ? `url(${state.bgImage})` : '';
                }
                if (importedData.darkMode !== undefined) {
                    state.darkMode = importedData.darkMode;
                    saveData('homepage-darkmode', state.darkMode);
                    applyDarkMode();
                }

                render();
                alert('Data imported successfully!');
            } catch (error) {
                alert('Error importing data: ' + error.message);
            }
        };
        reader.readAsText(file);
    };

    input.click();
}

// Main render function
function render() {
    const app = document.getElementById('app');

    let pageContent = '';
    if (state.currentPage === 'home') {
        pageContent = renderHomePage();
    } else if (state.currentPage === 'notes') {
        pageContent = renderNotesPage();
    } else if (state.currentPage === 'data') {
        pageContent = renderDataPage();
    }

    app.innerHTML = `
        ${renderNavbar()}
        <div class="main-content">
            ${pageContent}
        </div>
        <footer class="footer">
            <div class="container">
                &copy; 2025 | <a href="LICENSE" target="_blank">MIT License</a>
            </div>
        </footer>
    `;

    // Add event listeners after render
    addEventListeners();
}

// Add event listeners for dynamic elements
function addEventListeners() {
    // Navbar title input
    const titleInput = document.getElementById('navbar-title-input');
    if (titleInput) {
        titleInput.focus();
        titleInput.addEventListener('input', (e) => {
            state.navbarTitle = e.target.value;
            document.title = e.target.value;
            saveData('homepage-navbar-title', state.navbarTitle);
        });
        titleInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                setState({ editingTitle: false });
            }
        });
    }

    // Background image input
    const bgInput = document.getElementById('bg-image-input');
    if (bgInput) {
        bgInput.addEventListener('input', (e) => {
            state.bgImage = e.target.value;
            saveData('homepage-bg-image', state.bgImage);
            document.body.style.backgroundImage = state.bgImage ? `url(${state.bgImage})` : '';
        });
    }

    // Note container textareas
    state.noteContainers.forEach((_, index) => {
        const textarea = document.getElementById(`note-textarea-${index}`);
        if (textarea) {
            textarea.addEventListener('input', (e) => {
                updateNoteContent(index, e.target.value);
            });
        }
    });
}

// Initialize app
function init() {
    loadData();
    applyDarkMode();
    document.title = state.navbarTitle;
    render();
}

// Start the app when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
