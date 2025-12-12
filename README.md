# ControlCenter

A customizable, offline-first homepage application built with vanilla JavaScript. Create your personal dashboard with quick links, notes, data containers, and internet radio streaming.

## Features

- **Customizable Layout**: Add and organize quick links, notes, and data containers
- **Multiple Themes**: Choose from 9 beautiful theme presets including Catppuccin, Dracula, Tokyo Night, Everforest, and Duskfox
- **Dark/Light Mode**: Toggle between light and dark variants when available
- **Entertainment Tab**: Stream internet radio with support for M3U, PLS, and direct stream URLs
- **Data Management**: Organize information in customizable data containers with multiple rows
- **Import/Export**: Save and share your configuration as JSON
- **Drag & Drop**: Reorder containers on the home page
- **Fully Offline**: Works completely offline, no internet connection required
- **Navbar & Footer Links**: Add custom navigation and footer links with dropdown support
- **Background Images**: Set custom background images for personalization

## Getting Started

1. Open `standalone-index.html` in your web browser
2. Click "Edit" to enable edit mode and start customizing
3. Add containers, links, notes, and radio stations
4. Customize the theme in the Settings page
5. Click "Done" to exit edit mode and use your homepage

## File Structure

- `standalone-index.html` - Main HTML file
- `app.js` - Application logic
- `styles.css` - Styling and themes
- `amber.js` - Easter egg idle game
- `LICENSE` - MIT License

## Data Persistence

All data is saved to browser localStorage, including:
- Quick links and containers
- Notes and data containers
- Theme preferences
- Radio stations
- Custom navbar and footer links

## Browser Compatibility

Works in all modern browsers that support:
- ES6 JavaScript
- HTML5 Audio API
- CSS Custom Properties
- LocalStorage

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Theme Attributions

This project includes color schemes inspired by the following themes:

- **Catppuccin** - https://github.com/catppuccin/catppuccin
- **Dracula** - https://github.com/dracula/dracula-theme
- **Tokyo Night** - https://github.com/enkia/tokyo-night-vscode-theme
- **Everforest** - https://github.com/sainnhe/everforest
- **Duskfox** - https://github.com/EdenEast/nightfox.nvim

All themes remain the property of their respective creators and are used here for color inspiration only.
