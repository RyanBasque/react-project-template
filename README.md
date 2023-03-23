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
├── public <br />
│ ├── index.html <br />
│ └── favicon <br />
├── src <br />
│ ├── components <br />
│ ├── pages <br />
│ ├── styles <br />
│ ├── routes<br />
│ ├── utils<br />
│ ├── context<br />
│ ├── assets <br />
│ ├── index.tsx <br />
├── .gitignore <br />
├── .prettierrc<br />
├── .editorconfig<br />
├── .eslintrc <br />
├── tsconfig.json <br />
├── package.json <br />

public: This directory contains static assets that are served by the development and production servers. The main HTML file (index.html) is also located here. <br />
src: This directory contains the source code for the application.<br />
components: This directory contains reusable components used throughout the application.<br />
pages: This directory contains the main pages of the application.<br />
styles: This directory contains global styles that are applied to the entire application.<br />
index.tsx: This is the entry point of the application, which renders the App component.<br />
.gitignore: This file lists files and directories that should be ignored by Git.<br />
package.json: This file lists the dependencies and scripts used by the application.<br />
tsconfig.json: This file list typescript configs of your project.<br />

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
