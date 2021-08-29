### Server setup log and notes
helper file for posterior
***don't forget about .gitignore***

*** npm init -y ***
to generate package.json
*** npm i -d typescript ***
adding typescript as dev dependency
*** npx tsc --init ***
ts config file 

*** npm i -D ts-node ***
module for compiling server.ts and running an output server.js with node
"start": "ts-node src/server.ts",

*** npm i -D ts-node-dev ***
to watch the files for changes and to restart the server
necessary to enable this script
 "start": "ts-node-dev --respawn backend/src/server.ts",
 
*** npm i -D nodemon ***
does the same as the one above (need only one)
"dev": "nodemon --exec ts-node backend/src/server.ts",
*** npm i express ***
the framework I use for node
*** npm i -D @types/express ***
type definitions for express
*** npm i -D @types/node ***
package with node type definitions
**installed: axios, bcrypt, colors, dotenv, express-async-handler, jsonwebtoken, mongoose**
**added the db.ts** // useCreateIndex: true, this option was no longer supported - I think it was depreciated 
ok. moongose 6.0+ doesn't support the following: useNewUrlParser, useUnifiedTopology, useFindAndModify, and useCreateIndex. It's safe to remove it from my code. (I used it in moongose ver 5.12.5.)
*** 2 ***
*** 2 ***

### misc 
to add types for a module that I can't find types for 
I created a folder  ├──@types
                            ├──`example.d.ts` that contains `declare module 'example';`
                            this declares the module as any type 

***When TS compiler lags ctrl + shift + p -> typeScript reset TS server ***

***req.name = 'bob' - when things don't work in TS I can escape it***
`req.name = 'bob'` - no such thing in definitions
         `(req as any).name = 'bob'`

*** functions as per usual TS,  ***
`const add = (a: number, b?: number): number => {return a+b}`
<!-- if I don't pass b  -->
add(1)
<!-- then - there will be TS error  -->
`object is possibly undefined`
<!-- one way to get rid of it is: -->
`const add = (a: number, b?: number): number => {
    if(b) {
    return a+b}  
    } else {
        return a
    }
}` 
 
<!-- or I can add ! if I know it's defined -->

`const add = (a: number, b?: number): number => {                                                    return a+b!}`
<!-- or I can add above it -->
`// @ts-ignore` 
`const add = (a: number, b?: number): number => {                                                    return a+b!}`

***Interface and Type***
interface Params {
    a: number
    b: number
}

type Add =(x: Params) => number

const add: Add = x => {
    return x.a + a.b
}