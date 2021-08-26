### Server setup log
helper file for posterior
***don't forget about .gitignore***

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
*** npm i express ***
the framework I use for node
*** npm i -D @types/express ***
type definitions for express
*** npm i -D @types/node ***
package with node type definitions
*** 2 ***
*** 2 ***
*** 2 ***
*** 2 ***

### misc
to add types for a module that I can't find types for 
I created a folder  ├──@types
                            ├──`example.d.ts` that contains `declare module 'example';`
                 
         