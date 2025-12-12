// Theme presets
const themes = {
    default: {
        light: {
            bg: '#f9fafb',
            text: '#1f2937',
            navbarBg: 'linear-gradient(to right, #2563eb, #1e40af)',
            navbarText: '#ffffff',
            cardBg: 'rgba(255, 255, 255, 0.85)',
            footerBg: 'rgba(255, 255, 255, 0.95)',
            footerText: '#6b7280',
            footerBorder: '#e5e7eb',
            dataRowBg: 'rgba(243, 244, 246, 0.5)',
            textGray: '#6b7280',
            textGrayDark: '#374151'
        },
        dark: {
            bg: '#111827',
            text: '#ffffff',
            navbarBg: '#1f2937',
            navbarText: '#ffffff',
            cardBg: 'rgba(31, 41, 55, 0.85)',
            footerBg: 'rgba(31, 41, 55, 0.95)',
            footerText: '#9ca3af',
            footerBorder: '#374151',
            dataRowBg: 'rgba(55, 65, 81, 0.5)',
            textGray: '#9ca3af',
            textGrayDark: '#d1d5db'
        }
    },
    catppuccin_latte: {
        light: {
            bg: '#eff1f5',
            text: '#4c4f69',
            navbarBg: 'linear-gradient(to right, #1e66f5, #7287fd)',
            navbarText: '#eff1f5',
            cardBg: 'rgba(230, 233, 239, 0.85)',
            footerBg: 'rgba(230, 233, 239, 0.95)',
            footerText: '#6c6f85',
            footerBorder: '#dce0e8',
            dataRowBg: 'rgba(220, 224, 232, 0.5)',
            textGray: '#6c6f85',
            textGrayDark: '#4c4f69'
        }
    },
    catppuccin_mocha: {
        dark: {
            bg: '#1e1e2e',
            text: '#cdd6f4',
            navbarBg: 'linear-gradient(to right, #89b4fa, #b4befe)',
            navbarText: '#1e1e2e',
            cardBg: 'rgba(49, 50, 68, 0.85)',
            footerBg: 'rgba(49, 50, 68, 0.95)',
            footerText: '#a6adc8',
            footerBorder: '#45475a',
            dataRowBg: 'rgba(69, 71, 90, 0.5)',
            textGray: '#a6adc8',
            textGrayDark: '#cdd6f4'
        }
    },
    dracula: {
        dark: {
            bg: '#282a36',
            text: '#f8f8f2',
            navbarBg: 'linear-gradient(to right, #bd93f9, #ff79c6)',
            navbarText: '#f8f8f2',
            cardBg: 'rgba(68, 71, 90, 0.85)',
            footerBg: 'rgba(68, 71, 90, 0.95)',
            footerText: '#bfbfbf',
            footerBorder: '#44475a',
            dataRowBg: 'rgba(98, 114, 164, 0.3)',
            textGray: '#bfbfbf',
            textGrayDark: '#f8f8f2'
        }
    },
    tokyonight: {
        dark: {
            bg: '#1a1b26',
            text: '#c0caf5',
            navbarBg: 'linear-gradient(to right, #7aa2f7, #bb9af7)',
            navbarText: '#1a1b26',
            cardBg: 'rgba(36, 40, 59, 0.85)',
            footerBg: 'rgba(36, 40, 59, 0.95)',
            footerText: '#9aa5ce',
            footerBorder: '#414868',
            dataRowBg: 'rgba(65, 72, 104, 0.5)',
            textGray: '#9aa5ce',
            textGrayDark: '#c0caf5'
        }
    },
    tokyonight_storm: {
        dark: {
            bg: '#24283b',
            text: '#c0caf5',
            navbarBg: 'linear-gradient(to right, #7aa2f7, #2ac3de)',
            navbarText: '#1d202f',
            cardBg: 'rgba(41, 46, 66, 0.85)',
            footerBg: 'rgba(41, 46, 66, 0.95)',
            footerText: '#a9b1d6',
            footerBorder: '#414868',
            dataRowBg: 'rgba(65, 72, 104, 0.5)',
            textGray: '#a9b1d6',
            textGrayDark: '#c0caf5'
        }
    },
    everforest_light: {
        light: {
            bg: '#fdf6e3',
            text: '#5c6a72',
            navbarBg: 'linear-gradient(to right, #8da101, #93b259)',
            navbarText: '#fdf6e3',
            cardBg: 'rgba(242, 234, 218, 0.85)',
            footerBg: 'rgba(242, 234, 218, 0.95)',
            footerText: '#829181',
            footerBorder: '#e4ddc8',
            dataRowBg: 'rgba(228, 221, 200, 0.5)',
            textGray: '#829181',
            textGrayDark: '#5c6a72'
        }
    },
    everforest_dark: {
        dark: {
            bg: '#2b3339',
            text: '#d3c6aa',
            navbarBg: 'linear-gradient(to right, #a7c080, #dbbc7f)',
            navbarText: '#2b3339',
            cardBg: 'rgba(62, 68, 76, 0.85)',
            footerBg: 'rgba(62, 68, 76, 0.95)',
            footerText: '#859289',
            footerBorder: '#414b50',
            dataRowBg: 'rgba(65, 75, 80, 0.5)',
            textGray: '#859289',
            textGrayDark: '#d3c6aa'
        }
    },
    duskfox: {
        dark: {
            bg: '#232136',
            text: '#e0def4',
            navbarBg: 'linear-gradient(to right, #569fba, #9ccfd8)',
            navbarText: '#232136',
            cardBg: 'rgba(42, 39, 63, 0.85)',
            footerBg: 'rgba(42, 39, 63, 0.95)',
            footerText: '#908caa',
            footerBorder: '#393552',
            dataRowBg: 'rgba(57, 53, 82, 0.5)',
            textGray: '#908caa',
            textGrayDark: '#e0def4'
        }
    }
};

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
    bgImage: '',
    navbarLinks: [],
    footerLinks: [],
    openDropdown: null,
    draggedIndex: null,
    radioStations: [],
    currentStation: null,
    isPlaying: false,
    volume: 0.7,
    theme: 'default'
};

// Audio player
let audioPlayer = null;

// Load data from localStorage
function loadData() {
    const savedTitle = localStorage.getItem('homepage-navbar-title');
    const savedContainers = localStorage.getItem('homepage-containers');
    const savedNoteContainers = localStorage.getItem('homepage-note-containers');
    const savedDarkMode = localStorage.getItem('homepage-darkmode');
    const savedBgImage = localStorage.getItem('homepage-bg-image');
    const savedDataContainers = localStorage.getItem('homepage-data-containers');
    const savedNavbarLinks = localStorage.getItem('homepage-navbar-links');
    const savedFooterLinks = localStorage.getItem('homepage-footer-links');
    const savedRadioStations = localStorage.getItem('homepage-radio-stations');
    const savedVolume = localStorage.getItem('homepage-volume');
    const savedTheme = localStorage.getItem('homepage-theme');

    if (savedTitle) state.navbarTitle = savedTitle;
    if (savedContainers) state.containers = JSON.parse(savedContainers);
    if (savedDarkMode) state.darkMode = JSON.parse(savedDarkMode);
    if (savedBgImage) state.bgImage = savedBgImage;
    if (savedNavbarLinks) state.navbarLinks = JSON.parse(savedNavbarLinks);
    if (savedFooterLinks) state.footerLinks = JSON.parse(savedFooterLinks);
    if (savedRadioStations) state.radioStations = JSON.parse(savedRadioStations);
    if (savedVolume) state.volume = JSON.parse(savedVolume);
    if (savedTheme) state.theme = savedTheme;

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

// Drag and drop for containers
function handleDragStart(index) {
    state.draggedIndex = index;
}

function handleDragOver(e) {
    e.preventDefault();
}

function handleDrop(e, dropIndex) {
    e.preventDefault();

    if (state.draggedIndex === null || state.draggedIndex === dropIndex) {
        state.draggedIndex = null;
        return;
    }

    const draggedItem = state.containers[state.draggedIndex];
    const newContainers = [...state.containers];

    // Remove dragged item
    newContainers.splice(state.draggedIndex, 1);

    // Insert at new position
    newContainers.splice(dropIndex, 0, draggedItem);

    state.containers = newContainers;
    state.draggedIndex = null;

    saveData('homepage-containers', state.containers);
    render();
}

function handleDragEnd() {
    state.draggedIndex = null;
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

// Navbar links management
function addNavbarLink() {
    state.navbarLinks.push({ title: 'Link', url: '', dropdown: [] });
    saveData('homepage-navbar-links', state.navbarLinks);
    render();
}

function deleteNavbarLink(index) {
    state.navbarLinks.splice(index, 1);
    saveData('homepage-navbar-links', state.navbarLinks);
    render();
}

function updateNavbarLink(index, field, value) {
    state.navbarLinks[index][field] = value;
    saveData('homepage-navbar-links', state.navbarLinks);
    render();
}

function addDropdownItem(linkIndex) {
    state.navbarLinks[linkIndex].dropdown.push({ title: 'Item', url: 'https://' });
    saveData('homepage-navbar-links', state.navbarLinks);
    render();
}

function deleteDropdownItem(linkIndex, dropdownIndex) {
    state.navbarLinks[linkIndex].dropdown.splice(dropdownIndex, 1);
    saveData('homepage-navbar-links', state.navbarLinks);
    render();
}

function updateDropdownItem(linkIndex, dropdownIndex, field, value) {
    state.navbarLinks[linkIndex].dropdown[dropdownIndex][field] = value;
    saveData('homepage-navbar-links', state.navbarLinks);
}

function toggleDropdown(index) {
    state.openDropdown = state.openDropdown === index ? null : index;
    render();
}

// Footer links management
function addFooterLink() {
    state.footerLinks.push({ title: 'Link', url: 'https://' });
    saveData('homepage-footer-links', state.footerLinks);
    render();
}

function deleteFooterLink(index) {
    state.footerLinks.splice(index, 1);
    saveData('homepage-footer-links', state.footerLinks);
    render();
}

function updateFooterLink(index, field, value) {
    state.footerLinks[index][field] = value;
    saveData('homepage-footer-links', state.footerLinks);
}

// Theme management
function setTheme(themeName) {
    state.theme = themeName;
    saveData('homepage-theme', state.theme);
    applyTheme();
    render();
}

function getCurrentThemeColors() {
    const currentTheme = themes[state.theme];
    if (!currentTheme) return themes.default[state.darkMode ? 'dark' : 'light'];

    const mode = state.darkMode ? 'dark' : 'light';

    // If current theme has the requested mode, use it
    if (currentTheme[mode]) {
        return currentTheme[mode];
    }

    // Otherwise, fall back to the only mode available or default
    if (currentTheme.light) return currentTheme.light;
    if (currentTheme.dark) return currentTheme.dark;

    // Final fallback to default
    return themes.default[mode];
}

function applyTheme() {
    const colors = getCurrentThemeColors();
    const root = document.documentElement;

    // Set CSS custom properties
    root.style.setProperty('--bg-color', colors.bg);
    root.style.setProperty('--text-color', colors.text);
    root.style.setProperty('--navbar-bg', colors.navbarBg);
    root.style.setProperty('--navbar-text', colors.navbarText);
    root.style.setProperty('--card-bg', colors.cardBg);
    root.style.setProperty('--footer-bg', colors.footerBg);
    root.style.setProperty('--footer-text', colors.footerText);
    root.style.setProperty('--footer-border', colors.footerBorder);
    root.style.setProperty('--data-row-bg', colors.dataRowBg);
    root.style.setProperty('--text-gray', colors.textGray);
    root.style.setProperty('--text-gray-dark', colors.textGrayDark);

    // Apply background image if set
    if (state.bgImage) {
        document.body.style.backgroundImage = `url(${state.bgImage})`;
    }
}

// Radio station management
function addRadioStation() {
    state.radioStations.push({ name: 'New Station', url: '', type: 'direct' });
    saveData('homepage-radio-stations', state.radioStations);
    render();
}

function deleteRadioStation(index) {
    // Stop playing if deleting current station
    if (state.currentStation === index) {
        stopStation();
    } else if (state.currentStation !== null && state.currentStation > index) {
        state.currentStation--;
    }
    state.radioStations.splice(index, 1);
    saveData('homepage-radio-stations', state.radioStations);
    render();
}

function updateRadioStation(index, field, value) {
    state.radioStations[index][field] = value;
    saveData('homepage-radio-stations', state.radioStations);
}

// Audio player functions
async function parsePlaylistUrl(url, type) {
    try {
        const response = await fetch(url);
        const text = await response.text();

        if (type === 'm3u') {
            // Parse M3U format
            const lines = text.split('\n').filter(line => line.trim() && !line.startsWith('#'));
            return lines[0].trim();
        } else if (type === 'pls') {
            // Parse PLS format
            const match = text.match(/File\d+=(.+)/);
            if (match) {
                return match[1].trim();
            }
        }
        return url;
    } catch (error) {
        console.error('Error parsing playlist:', error);
        return url;
    }
}

function initAudioPlayer() {
    if (!audioPlayer) {
        audioPlayer = new Audio();
        audioPlayer.volume = state.volume;

        // Add error handling
        audioPlayer.addEventListener('error', (e) => {
            console.error('Audio error:', e);
            state.isPlaying = false;
            render();
        });

        // Add ended event
        audioPlayer.addEventListener('ended', () => {
            state.isPlaying = false;
            render();
        });
    }
}

async function playStation(index) {
    initAudioPlayer();

    const station = state.radioStations[index];
    if (!station || !station.url) return;

    // Stop current station if playing
    if (state.currentStation !== null && state.isPlaying) {
        audioPlayer.pause();
    }

    state.currentStation = index;

    try {
        let streamUrl = station.url;

        // Parse playlist files
        if (station.type === 'm3u' || station.type === 'pls') {
            streamUrl = await parsePlaylistUrl(station.url, station.type);
        }

        audioPlayer.src = streamUrl;
        await audioPlayer.play();
        state.isPlaying = true;
    } catch (error) {
        console.error('Error playing station:', error);
        state.isPlaying = false;
    }

    render();
}

function pauseStation() {
    if (audioPlayer && state.isPlaying) {
        audioPlayer.pause();
        state.isPlaying = false;
        render();
    }
}

function resumeStation() {
    if (audioPlayer && !state.isPlaying && state.currentStation !== null) {
        audioPlayer.play().then(() => {
            state.isPlaying = true;
            render();
        }).catch(error => {
            console.error('Error resuming station:', error);
        });
    }
}

function stopStation() {
    if (audioPlayer) {
        audioPlayer.pause();
        audioPlayer.currentTime = 0;
        audioPlayer.src = '';
        state.isPlaying = false;
        state.currentStation = null;
        render();
    }
}

function setVolume(value) {
    state.volume = parseFloat(value);
    saveData('homepage-volume', state.volume);
    if (audioPlayer) {
        audioPlayer.volume = state.volume;
    }
}

// Render navbar
function renderNavbar() {
    return `
        <nav class="navbar">
            <div class="container navbar-content">
                <div class="navbar-left">
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

                    <!-- Custom Navbar Links (Desktop) -->
                    <div class="navbar-custom-links">
                        ${state.navbarLinks.map((link, linkIndex) => `
                            <div class="navbar-link-item">
                                ${link.url && link.dropdown.length === 0 ? `
                                    <a href="${link.url}" target="_blank" rel="noopener noreferrer" class="nav-button">
                                        ${link.title}
                                    </a>
                                ` : link.dropdown.length > 0 ? `
                                    <button class="nav-button" onclick="toggleDropdown(${linkIndex})">
                                        ${link.title} ▼
                                    </button>
                                    ${state.openDropdown === linkIndex ? `
                                        <div class="navbar-dropdown">
                                            ${link.dropdown.map(item => `
                                                <a href="${item.url}" target="_blank" rel="noopener noreferrer">
                                                    ${item.title}
                                                </a>
                                            `).join('')}
                                        </div>
                                    ` : ''}
                                ` : `
                                    <span class="nav-button">${link.title}</span>
                                `}
                            </div>
                        `).join('')}
                    </div>
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
                    <button class="nav-button ${state.currentPage === 'entertainment' ? 'active' : ''}" onclick="setState({ currentPage: 'entertainment', mobileMenuOpen: false })">
                        Entertainment
                    </button>
                    ${state.editMode ? `
                        <button class="nav-button ${state.currentPage === 'settings' ? 'active' : ''}" onclick="setState({ currentPage: 'settings', mobileMenuOpen: false })">
                            Settings
                        </button>
                    ` : ''}

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
                    ${state.navbarLinks.map((link) => {
                        if (link.url && link.dropdown.length === 0) {
                            return `<a href="${link.url}" target="_blank" rel="noopener noreferrer" class="nav-button">${link.title}</a>`;
                        } else if (link.dropdown.length > 0) {
                            return `
                                <div class="mobile-dropdown-section">
                                    <div class="nav-button font-semibold">${link.title}</div>
                                    ${link.dropdown.map(item => `
                                        <a href="${item.url}" target="_blank" rel="noopener noreferrer" class="nav-button ml-4">
                                            ${item.title}
                                        </a>
                                    `).join('')}
                                </div>
                            `;
                        }
                        return '';
                    }).join('')}

                    <button class="nav-button ${state.currentPage === 'home' ? 'active' : ''}" onclick="setState({ currentPage: 'home', mobileMenuOpen: false })">
                        Home
                    </button>
                    <button class="nav-button ${state.currentPage === 'notes' ? 'active' : ''}" onclick="setState({ currentPage: 'notes', mobileMenuOpen: false })">
                        Notes
                    </button>
                    <button class="nav-button ${state.currentPage === 'data' ? 'active' : ''}" onclick="setState({ currentPage: 'data', mobileMenuOpen: false })">
                        Data
                    </button>
                    <button class="nav-button ${state.currentPage === 'entertainment' ? 'active' : ''}" onclick="setState({ currentPage: 'entertainment', mobileMenuOpen: false })">
                        Entertainment
                    </button>
                    ${state.editMode ? `
                        <button class="nav-button ${state.currentPage === 'settings' ? 'active' : ''}" onclick="setState({ currentPage: 'settings', mobileMenuOpen: false })">
                            Settings
                        </button>
                    ` : ''}
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
                    <div class="card ${state.editMode ? 'draggable' : ''} ${state.draggedIndex === containerIndex ? 'dragging' : ''}"
                         ${state.editMode ? `
                            draggable="true"
                            ondragstart="handleDragStart(${containerIndex})"
                            ondragover="handleDragOver(event)"
                            ondrop="handleDrop(event, ${containerIndex})"
                            ondragend="handleDragEnd()"
                         ` : ''}>
                        ${state.editMode ? '<div class="drag-handle" title="Drag to reorder">⋮⋮</div>' : ''}
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

// Render settings page
function renderSettingsPage() {
    return `
        <div class="container">
            <div class="card">
                <h2 class="text-2xl font-bold mb-4">Theme</h2>
                <div class="space-y-2">
                    <label class="font-semibold text-gray-dark">Select Theme Preset</label>
                    <select
                        id="theme-select"
                        class="theme-select"
                        onchange="setTheme(this.value)"
                    >
                        <option value="default" ${state.theme === 'default' ? 'selected' : ''}>Default</option>
                        <option value="catppuccin_latte" ${state.theme === 'catppuccin_latte' ? 'selected' : ''}>Catppuccin Latte (Light)</option>
                        <option value="catppuccin_mocha" ${state.theme === 'catppuccin_mocha' ? 'selected' : ''}>Catppuccin Mocha (Dark)</option>
                        <option value="dracula" ${state.theme === 'dracula' ? 'selected' : ''}>Dracula (Dark)</option>
                        <option value="tokyonight" ${state.theme === 'tokyonight' ? 'selected' : ''}>Tokyo Night (Dark)</option>
                        <option value="tokyonight_storm" ${state.theme === 'tokyonight_storm' ? 'selected' : ''}>Tokyo Night Storm (Dark)</option>
                        <option value="everforest_light" ${state.theme === 'everforest_light' ? 'selected' : ''}>Everforest Light</option>
                        <option value="everforest_dark" ${state.theme === 'everforest_dark' ? 'selected' : ''}>Everforest Dark</option>
                        <option value="duskfox" ${state.theme === 'duskfox' ? 'selected' : ''}>Duskfox (Dark)</option>
                    </select>
                    <p class="text-sm text-gray mt-2">
                        The light/dark toggle switches between variants when available. Themes with only one variant will use that variant regardless of the toggle.
                    </p>
                </div>
            </div>

            <div class="card">
                <div class="header-with-action">
                    <h2 class="text-2xl font-bold">Navbar Links</h2>
                    <button class="btn btn-success" onclick="addNavbarLink()">
                        <span class="icon icon-plus"></span>
                        Add Link
                    </button>
                </div>

                <div class="space-y-6 mt-4">
                    ${state.navbarLinks.map((link, linkIndex) => `
                        <div class="data-row">
                            <div class="flex items-start gap-2 mb-4">
                                <div class="flex-1 space-y-2">
                                    <input
                                        type="text"
                                        value="${link.title}"
                                        placeholder="Link Title"
                                        onchange="updateNavbarLink(${linkIndex}, 'title', this.value)"
                                    />
                                    <input
                                        type="text"
                                        value="${link.url}"
                                        placeholder="URL (leave empty for dropdown only)"
                                        onchange="updateNavbarLink(${linkIndex}, 'url', this.value)"
                                    />
                                </div>
                                <button class="btn btn-danger" onclick="deleteNavbarLink(${linkIndex})">
                                    <span class="icon icon-trash"></span>
                                </button>
                            </div>

                            <div class="ml-4">
                                <div class="flex items-center justify-between mb-2">
                                    <h4 class="font-semibold">Dropdown Items</h4>
                                    <button class="btn btn-primary" onclick="addDropdownItem(${linkIndex})">
                                        <span class="icon icon-plus"></span>
                                        Add Item
                                    </button>
                                </div>
                                ${link.dropdown.map((item, dropdownIndex) => `
                                    <div class="flex items-start gap-2 mb-2">
                                        <input
                                            type="text"
                                            value="${item.title}"
                                            placeholder="Item Title"
                                            onchange="updateDropdownItem(${linkIndex}, ${dropdownIndex}, 'title', this.value)"
                                            class="flex-1"
                                        />
                                        <input
                                            type="text"
                                            value="${item.url}"
                                            placeholder="URL"
                                            onchange="updateDropdownItem(${linkIndex}, ${dropdownIndex}, 'url', this.value)"
                                            class="flex-1"
                                        />
                                        <button class="btn btn-danger" onclick="deleteDropdownItem(${linkIndex}, ${dropdownIndex})">
                                            <span class="icon icon-trash"></span>
                                        </button>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    `).join('')}
                </div>

                ${state.navbarLinks.length === 0 ? '<p class="text-gray mt-4">No navbar links yet. Click "Add Link" to create one.</p>' : ''}
            </div>

            <div class="card">
                <div class="header-with-action">
                    <h2 class="text-2xl font-bold">Footer Links</h2>
                    <button class="btn btn-success" onclick="addFooterLink()">
                        <span class="icon icon-plus"></span>
                        Add Link
                    </button>
                </div>

                <div class="space-y-2 mt-4">
                    ${state.footerLinks.map((link, linkIndex) => `
                        <div class="flex items-start gap-2">
                            <input
                                type="text"
                                value="${link.title}"
                                placeholder="Link Title"
                                onchange="updateFooterLink(${linkIndex}, 'title', this.value)"
                                class="flex-1"
                            />
                            <input
                                type="text"
                                value="${link.url}"
                                placeholder="URL"
                                onchange="updateFooterLink(${linkIndex}, 'url', this.value)"
                                class="flex-1"
                            />
                            <button class="btn btn-danger" onclick="deleteFooterLink(${linkIndex})">
                                <span class="icon icon-trash"></span>
                            </button>
                        </div>
                    `).join('')}
                </div>

                ${state.footerLinks.length === 0 ? '<p class="text-gray mt-4">No footer links yet. Click "Add Link" to create one.</p>' : ''}
            </div>
        </div>
    `;
}

// Render entertainment page
function renderEntertainmentPage() {
    return `
        <div class="container">
            ${state.editMode ? `
                <div class="mb-6">
                    <button class="btn btn-success btn-lg" onclick="addRadioStation()">
                        <span class="icon icon-plus"></span>
                        Add Radio Station
                    </button>
                </div>
            ` : ''}

            ${state.radioStations.length === 0 ? `
                <div class="card">
                    <h2 class="text-2xl font-bold mb-4">Entertainment</h2>
                    <p class="text-gray">No radio stations added yet. ${state.editMode ? 'Click "Add Radio Station" to get started.' : 'Enable edit mode to add stations.'}</p>
                </div>
            ` : `
                <div class="space-y-6">
                    ${state.radioStations.map((station, index) => `
                        <div class="card">
                            <div class="flex items-start gap-4">
                                <div class="flex-1">
                                    ${state.editMode ? `
                                        <input
                                            type="text"
                                            class="input-title-lg mb-2"
                                            value="${station.name}"
                                            placeholder="Station Name"
                                            onchange="updateRadioStation(${index}, 'name', this.value)"
                                        />
                                        <div class="space-y-2">
                                            <input
                                                type="text"
                                                value="${station.url}"
                                                placeholder="Stream URL (.m3u, .pls, or direct stream URL)"
                                                onchange="updateRadioStation(${index}, 'url', this.value)"
                                            />
                                            <div>
                                                <label class="text-sm text-gray mr-4">
                                                    <input type="radio" name="type-${index}" value="direct" ${station.type === 'direct' ? 'checked' : ''} onchange="updateRadioStation(${index}, 'type', 'direct')"> Direct Stream
                                                </label>
                                                <label class="text-sm text-gray mr-4">
                                                    <input type="radio" name="type-${index}" value="m3u" ${station.type === 'm3u' ? 'checked' : ''} onchange="updateRadioStation(${index}, 'type', 'm3u')"> M3U Playlist
                                                </label>
                                                <label class="text-sm text-gray">
                                                    <input type="radio" name="type-${index}" value="pls" ${station.type === 'pls' ? 'checked' : ''} onchange="updateRadioStation(${index}, 'type', 'pls')"> PLS Playlist
                                                </label>
                                            </div>
                                        </div>
                                    ` : `
                                        <h2 class="text-2xl font-bold mb-4">${station.name}</h2>
                                    `}

                                    ${!state.editMode ? `
                                        <div class="flex items-center gap-2 mt-4">
                                            ${state.currentStation === index && state.isPlaying ? `
                                                <button class="btn btn-primary" onclick="pauseStation()">
                                                    ⏸ Pause
                                                </button>
                                            ` : state.currentStation === index && !state.isPlaying ? `
                                                <button class="btn btn-primary" onclick="resumeStation()">
                                                    ▶ Resume
                                                </button>
                                            ` : `
                                                <button class="btn btn-success" onclick="playStation(${index})">
                                                    ▶ Play
                                                </button>
                                            `}

                                            ${state.currentStation === index ? `
                                                <button class="btn btn-danger" onclick="stopStation()">
                                                    ⏹ Stop
                                                </button>
                                            ` : ''}

                                            <div class="flex items-center gap-2 ml-4">
                                                <span class="text-sm">🔊</span>
                                                <input
                                                    type="range"
                                                    min="0"
                                                    max="1"
                                                    step="0.01"
                                                    value="${state.volume}"
                                                    onchange="setVolume(this.value)"
                                                    style="width: 120px;"
                                                />
                                                <span class="text-sm">${Math.round(state.volume * 100)}%</span>
                                            </div>
                                        </div>

                                        ${state.currentStation === index && state.isPlaying ? `
                                            <p class="text-sm text-gray mt-2">♪ Now playing...</p>
                                        ` : ''}
                                    ` : ''}
                                </div>

                                ${state.editMode ? `
                                    <button class="btn btn-danger" onclick="deleteRadioStation(${index})">
                                        <span class="icon icon-trash"></span>
                                        Delete
                                    </button>
                                ` : ''}
                            </div>
                        </div>
                    `).join('')}
                </div>
            `}
        </div>
    `;
}

// Toggle dark mode
function toggleDarkMode() {
    state.darkMode = !state.darkMode;
    saveData('homepage-darkmode', state.darkMode);
    applyTheme();
    render();
}

// Apply dark mode to body (now uses applyTheme)
function applyDarkMode() {
    applyTheme();
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
        darkMode: state.darkMode,
        navbarLinks: state.navbarLinks,
        footerLinks: state.footerLinks,
        radioStations: state.radioStations,
        volume: state.volume,
        theme: state.theme
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
                if (importedData.navbarLinks) {
                    state.navbarLinks = importedData.navbarLinks;
                    saveData('homepage-navbar-links', state.navbarLinks);
                }
                if (importedData.footerLinks) {
                    state.footerLinks = importedData.footerLinks;
                    saveData('homepage-footer-links', state.footerLinks);
                }
                if (importedData.radioStations) {
                    state.radioStations = importedData.radioStations;
                    saveData('homepage-radio-stations', state.radioStations);
                }
                if (importedData.volume !== undefined) {
                    state.volume = importedData.volume;
                    saveData('homepage-volume', state.volume);
                    if (audioPlayer) {
                        audioPlayer.volume = state.volume;
                    }
                }
                if (importedData.theme) {
                    state.theme = importedData.theme;
                    saveData('homepage-theme', state.theme);
                }

                applyTheme();
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
    } else if (state.currentPage === 'entertainment') {
        pageContent = renderEntertainmentPage();
    } else if (state.currentPage === 'settings') {
        pageContent = renderSettingsPage();
    }

    app.innerHTML = `
        ${renderNavbar()}
        <div class="main-content">
            ${pageContent}
        </div>
        <footer class="footer">
            <div class="container footer-content">
                <div class="footer-links">
                    ${state.footerLinks.map(link => `
                        <a href="${link.url}" target="_blank" rel="noopener noreferrer" class="footer-link">
                            ${link.title}
                        </a>
                    `).join('')}
                    ${state.footerLinks.length > 0 ? '<span class="footer-link">|</span>' : ''}
                    <a href="LICENSE" target="_blank" class="footer-link">MIT License</a>
                </div>
                <div>&copy; Errik Rose - <span class="footer-copyright-year" onclick="window.AmberGame.toggle()">2025</span></div>
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
