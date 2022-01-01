build script versions:
"build": "rimraf ./build && tsc backend/src/server.ts",

"build": "rimraf backend/src/server.js && tsc backend/src/server.ts",
"build": "tsc backend/src/server.ts",

"start": "npm run build && node build/index.js",

 "heroku-postbuild": "NPM_CONFIG_PRODUCTION=false npm install --prefix frontend && npm run build --prefix frontend"