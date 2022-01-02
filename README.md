build script versions:
"build": "rimraf ./build && tsc backend/src/server.ts",

"build": "rimraf backend/src/server.js && tsc backend/src/server.ts",
"build": "tsc backend/src/server.ts",

"start": "npm run build && node build/index.js",

"start": "npm run build && npm run build --prefix frontend && node backend/build/src/server.js",

 "heroku-postbuild": "NPM_CONFIG_PRODUCTION=false npm install --prefix frontend && npm run build --prefix frontend"

 {
message: "ENOENT: no such file or directory, stat '/app/backend/build/src/frontend/build/index.html'",
stack: "Error: ENOENT: no such file or directory, stat '/app/backend/build/src/frontend/build/index.html'"
}

web: node backend/build/src/server.js