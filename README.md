# React TypeScript Base Project

This is a base project for React applications written in TypeScript. It includes a basic setup for a single-page application with routing, styling with styled-components, global styleds and prettier + eslint.

## Getting Started

To get started, clone this repository and run the following commands:

```
yarn
yarn start
```

This will install the necessary dependencies and start the development server.

##Project Structure
├── public
│ ├── index.html
│ └── favicon
├── src
│ ├── components
│ ├── pages
│ ├── styles
│ ├── routes
│ ├── utils
│ ├── context
│ ├── assets
│ ├── index.tsx
│ └── ...
├── .gitignore
├── .prettierrc
├── .editorconfig
├── .eslintrc
├── tsconfig.json
├── package.json

public: This directory contains static assets that are served by the development and production servers. The main HTML file (index.html) is also located here.
src: This directory contains the source code for the application.
components: This directory contains reusable components used throughout the application.
pages: This directory contains the main pages of the application.
styles: This directory contains global styles that are applied to the entire application.
index.tsx: This is the entry point of the application, which renders the App component.
.gitignore: This file lists files and directories that should be ignored by Git.
package.json: This file lists the dependencies and scripts used by the application.
tsconfig.json: This file list typescript configs of your project.

# Available Scripts

In the project directory, you can run:

yarn start
Runs the app in development mode. Open http://localhost:3000 to view it in the browser.

The page will reload if you make edits. You will also see any lint errors in the console.

yarn run build
Builds the app for production to the build folder. It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes. Your app is ready to be deployed!

yarn test
Launches the test runner in the interactive watch mode. See the section about running tests for more information.

yarn run eject
Note: this is a one-way operation. Once you eject, you can’t go back!
