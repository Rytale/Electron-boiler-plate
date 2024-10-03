# Electron Boilerplate

This is a large-scale Electron app boilerplate with a well-organized structure, built-in auto-updater, and development tools for easy builds and live reloading.

## Features

- Modular CSS with page-specific and global styles
- Auto-updater using electron-updater
- React for building user interfaces
- Webpack for bundling and development server
- Electron-builder for packaging and distribution

## Folder Structure

```
src/
├── main/
│   ├── main.js
│   └── preload.js
├── renderer/
│   ├── pages/
│   │   └── Home/
│   │       ├── components/
│   │       ├── services/
│   │       └── styles/
│   ├── shared/
│   │   ├── components/
│   │   └── styles/
│   ├── utilities/
│   └── index.js
├── updater/
└── index.html
```

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Start the development server:
   ```
   npm run dev
   ```
4. To build for production:
   ```
   npm run build
   ```
5. To package the app:
   ```
   npm run package
   ```

## Scripts

- `npm start`: Launch the Electron app
- `npm run dev`: Start the development server with live reloading
- `npm run build`: Build the app for production
- `npm run package`: Package the app for distribution
- `npm run publish`: Build and publish the app (for use with auto-updater)

## Development Workflow

1. Create new pages in `src/renderer/pages/`
2. Add shared components in `src/renderer/shared/components/`
3. Use `src/renderer/utilities/` for helper functions
4. Global styles go in `src/renderer/shared/styles/global.css`
5. The main process code is in `src/main/main.js`
6. Auto-updater logic is in `src/updater/updater.js`

## Best Practices

- Keep components small and focused
- Use services for API calls and complex logic
- Utilize the shared components and utilities for code reuse
- Follow the established folder structure for consistency
- Use CSS modules for component-specific styles

## License

ISC