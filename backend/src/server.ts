import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import morgan from 'morgan'
import path from 'path'
import userRoutes from '../routes/userRoutes'
import connectDB from '../config/db'

import { notFound, errorHandler } from '../middleware/errorMiddleware'

dotenv.config()
connectDB()

const app = express()

app.use(express.json())


app.use('/api/users', userRoutes)

const __dirname = path.resolve()

// response.writeHead(201, {
//   'Content-Type': 'application/javascript',
// })

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '/frontend/build')))

    // app.get('service-worker.js', (req, res) => {
    // app.get('service-worker.js', (req, res) => {
    //     res.sendFile(
    //         path.resolve(__dirname, 'frontend', 'build', 'service-worker.js')
    //         // path.resolve(__dirname, 'frontend', 'build')
    //     )
    // })
    app.get('*', (req, res) =>
        res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
    )
} else {
    app.get('/', (req, res) => {
        res.send('API is running')
        //@ts-ignore
        next()
    })
}
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}

app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000




app.listen(PORT, () => {
    console.log(
        colors.yellow.bgCyan.bold(`Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`)

    )
})






// import { notFound, errorHandler } from '../middleware/errorMiddleware'

// dotenv.config()
// connectDB()

// const app = express()

// app.use(express.json())
// app.use('/api/users', userRoutes)

// const __dirname = path.resolve()

// // HERE

// if (process.env.NODE_ENV === 'production') {
//     app.use(express.static(path.join(__dirname, '/frontend/build')))

//     app.get('service-worker.js', (req, res) => {
//         res.sendFile(
//             path.resolve(__dirname, 'frontend', 'build', 'service-worker.js')
//         )
//     })
//     app.get('*', (req, res) =>
//         res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
//     )
// } else {
//     app.get('/', (req, res) => {
//         res.send('API is running')
//         // 
//         next()
//     })
// }
// if (process.env.NODE_ENV === 'development') {
//     app.use(morgan('dev'))
// }

// app.use(notFound)
// app.use(errorHandler)


// // to HERE
// const PORT = process.env.PORT || 5000