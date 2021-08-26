### Server setup log
helper file for posterior

*** npm init -y ***
to generate package.json
*** npm i -d typescript ***
adding typescript as dev dependency
*** npx tsc --init ***
ts config file 

*** npm i -D ts-node ***
module for compiling index.ts and running an output index.js with node
"start": "ts-node src/index.ts",

*** npm i -D ts-node-dev ***
to watch the files for changes and to restart the server
necessary to enable this script
 "start": "ts-node-dev --respawn src/index.ts",
 
*** npm i -D nodemon ***
does the same as the one above (need only one)
"dev": "nodemon --exec ts-node src/index.ts",
*** 2 ***
*** 2 ***