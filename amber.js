// Terminal Uptime - Hidden Idle Game
// Activated by clicking the copyright year in footer

(function() {
    'use strict';

    // Game state
    let gameState = {
        active: false,
        minimized: false,
        uptime: 0,
        uptimePerSecond: 1,
        cpuCycles: 0,
        memory: 0,
        terminals: 1,
        lastTick: Date.now(),
        upgrades: {
            betterCPU: 0,
            moreRAM: 0,
            fasterClock: 0,
            additionalTerminals: 0
        }
    };

    // Upgrade costs and effects
    const upgrades = {
        betterCPU: {
            name: 'Better CPU',
            baseCost: 100,
            costMultiplier: 1.5,
            effect: () => gameState.uptimePerSecond += 1,
            description: '+1 uptime/sec'
        },
        moreRAM: {
            name: 'More RAM',
            baseCost: 250,
            costMultiplier: 1.6,
            effect: () => gameState.uptimePerSecond += 2,
            description: '+2 uptime/sec'
        },
        fasterClock: {
            name: 'Faster Clock',
            baseCost: 500,
            costMultiplier: 1.7,
            effect: () => gameState.uptimePerSecond += 5,
            description: '+5 uptime/sec'
        },
        additionalTerminals: {
            name: 'Add Terminal',
            baseCost: 1000,
            costMultiplier: 2.0,
            effect: () => {
                gameState.terminals += 1;
                gameState.uptimePerSecond += 10;
            },
            description: '+1 terminal, +10 uptime/sec'
        }
    };

    // Calculate upgrade cost
    function getUpgradeCost(upgradeName) {
        const upgrade = upgrades[upgradeName];
        const level = gameState.upgrades[upgradeName];
        return Math.floor(upgrade.baseCost * Math.pow(upgrade.costMultiplier, level));
    }

    // Purchase upgrade
    function purchaseUpgrade(upgradeName) {
        const cost = getUpgradeCost(upgradeName);
        if (gameState.uptime >= cost) {
            gameState.uptime -= cost;
            gameState.upgrades[upgradeName]++;
            upgrades[upgradeName].effect();
            saveGame();
            updateDisplay();
        }
    }

    // Format large numbers
    function formatNumber(num) {
        if (num >= 1e9) return (num / 1e9).toFixed(2) + 'B';
        if (num >= 1e6) return (num / 1e6).toFixed(2) + 'M';
        if (num >= 1e3) return (num / 1e3).toFixed(2) + 'K';
        return Math.floor(num).toString();
    }

    // Format uptime as time
    function formatUptime(seconds) {
        const days = Math.floor(seconds / 86400);
        const hours = Math.floor((seconds % 86400) / 3600);
        const mins = Math.floor((seconds % 3600) / 60);
        const secs = Math.floor(seconds % 60);

        if (days > 0) return `${days}d ${hours}h ${mins}m ${secs}s`;
        if (hours > 0) return `${hours}h ${mins}m ${secs}s`;
        if (mins > 0) return `${mins}m ${secs}s`;
        return `${secs}s`;
    }

    // Save game to localStorage
    function saveGame() {
        localStorage.setItem('terminal-uptime-save', JSON.stringify(gameState));
    }

    // Load game from localStorage
    function loadGame() {
        const saved = localStorage.getItem('terminal-uptime-save');
        if (saved) {
            try {
                const loaded = JSON.parse(saved);
                Object.assign(gameState, loaded);
                gameState.active = false; // Don't auto-show on page load
                gameState.minimized = false;
            } catch (e) {
                console.error('Failed to load game:', e);
            }
        }
    }

    // Create terminal HTML
    function createTerminal() {
        const terminal = document.createElement('div');
        terminal.id = 'amber-terminal';
        terminal.className = 'amber-terminal';
        terminal.innerHTML = `
            <div class="amber-header">
                <span class="amber-title">SYSTEM MONITOR v1.0</span>
                <div class="amber-controls">
                    <button class="amber-btn-minimize" onclick="window.AmberGame.minimize()">_</button>
                    <button class="amber-btn-close" onclick="window.AmberGame.close()">X</button>
                </div>
            </div>
            <div class="amber-content">
                <div class="amber-screen">
                    <div class="amber-line">SYSTEM UPTIME: <span id="uptime-display">0s</span></div>
                    <div class="amber-line">TERMINALS ONLINE: <span id="terminals-display">1</span></div>
                    <div class="amber-line">CYCLES/SEC: <span id="cycles-display">1</span></div>
                    <div class="amber-line amber-spacer">────────────────────────────</div>
                    <div id="upgrades-list"></div>
                    <div class="amber-line amber-spacer">────────────────────────────</div>
                    <div class="amber-line amber-help">CLICK YEAR TO TOGGLE TERMINAL</div>
                </div>
            </div>
        `;
        document.body.appendChild(terminal);
    }

    // Update display
    function updateDisplay() {
        if (!gameState.active) return;

        document.getElementById('uptime-display').textContent = formatUptime(gameState.uptime);
        document.getElementById('terminals-display').textContent = gameState.terminals;
        document.getElementById('cycles-display').textContent = formatNumber(gameState.uptimePerSecond);

        updateUpgradesList();
    }

    // Separate function to rebuild upgrades list (called less frequently)
    function updateUpgradesList() {
        const upgradesList = document.getElementById('upgrades-list');
        if (!upgradesList) return;

        upgradesList.innerHTML = '';

        Object.keys(upgrades).forEach(key => {
            const upgrade = upgrades[key];
            const cost = getUpgradeCost(key);
            const level = gameState.upgrades[key];
            const canAfford = gameState.uptime >= cost;

            const line = document.createElement('div');
            line.className = 'amber-line amber-upgrade' + (canAfford ? ' amber-affordable' : '');
            line.innerHTML = `[${canAfford ? '+' : ' '}] ${upgrade.name} [${level}] - ${formatNumber(cost)} - ${upgrade.description}`;
            if (canAfford) {
                line.onclick = () => window.AmberGame.buy(key);
            }
            upgradesList.appendChild(line);
        });
    }

    // Game loop
    let lastUpgradeUpdate = Date.now();
    function gameTick() {
        if (!gameState.active) return;

        const now = Date.now();
        const delta = (now - gameState.lastTick) / 1000;
        gameState.lastTick = now;

        gameState.uptime += gameState.uptimePerSecond * delta;

        // Update stats every tick
        const uptimeDisplay = document.getElementById('uptime-display');
        if (uptimeDisplay) uptimeDisplay.textContent = formatUptime(gameState.uptime);

        // Only update upgrades list once per second to prevent flickering
        if (now - lastUpgradeUpdate > 1000) {
            updateUpgradesList();
            lastUpgradeUpdate = now;
        }
    }

    // Show terminal
    function show() {
        if (!document.getElementById('amber-terminal')) {
            createTerminal();
        }
        gameState.active = true;
        gameState.minimized = false;
        gameState.lastTick = Date.now();
        document.getElementById('amber-terminal').classList.remove('amber-minimized');
        document.getElementById('amber-terminal').style.display = 'block';
        updateDisplay();
    }

    // Hide terminal
    function close() {
        gameState.active = false;
        const terminal = document.getElementById('amber-terminal');
        if (terminal) {
            terminal.style.display = 'none';
        }
        saveGame();
    }

    // Minimize terminal
    function minimize() {
        gameState.minimized = !gameState.minimized;
        const terminal = document.getElementById('amber-terminal');
        if (terminal) {
            terminal.classList.toggle('amber-minimized');
        }
    }

    // Toggle terminal visibility
    function toggle() {
        if (gameState.active) {
            close();
        } else {
            show();
        }
    }

    // Initialize
    function init() {
        loadGame();

        // Start game loop
        setInterval(gameTick, 100); // Update 10 times per second

        // Auto-save every 5 seconds
        setInterval(() => {
            if (gameState.active) {
                saveGame();
            }
        }, 5000);
    }

    // Expose public API
    window.AmberGame = {
        toggle: toggle,
        show: show,
        close: close,
        minimize: minimize,
        buy: purchaseUpgrade
    };

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();
