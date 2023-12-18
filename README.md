# React + Webpack

Has all needed configs to start developing react + webpack bundling.

## IMPORTANT for first boot:
### Install Node.js
### Run the following commands one line at a time:
    npm install
    npm run format
    npm run lint
    
    if there are errors, run:
    
    npm run fix_lint

    or read through the errors and fix them. 

    If errors persist, they can be bypassed by removing the linter


## Scripts and Commands
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


