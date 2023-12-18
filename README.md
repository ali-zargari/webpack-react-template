# React + Webpack

Has all needed configs to start developing react + webpack bundling.



## First time running:

### Install Node.js

### For Windows Users:
    Run these commands one line at a time:

    npm install
    npm run format
    npm run lint
    
    if there are errors, run:
    
    npm run fix_lint

    or read through the errors and fix them. 

    If errors persist, they can be bypassed by removing Linter and Prettier.

### For Mac Users:
    You must:

    1- Modify ".prettierrc" and ".eslintrc.cjs" to make compatible with Mac.
                              or
    2- Delete Linter and Prettier libraries.

## Scripts and Commands Reference
### vite:

    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    

### webpack:

    "build:webpack": "webpack",
    "watch:webpack": "webpack --watch",
    "start:webpack": "webpack serve --open",
    "server:webpack": "node server.js",
    

### dist. runner:

    "run_dist": "serve -s dist",


### linting

    "lint": "eslint . --ext js,jsx --report-unused-disable-directives --max-warnings 0",
    "fix_lint": "./node_modules/.bin/eslint --fix",
    "format": "prettier --write \"**/*\""


### example commands:

    npm run dev
    npm run build
    npm run build:webpack


