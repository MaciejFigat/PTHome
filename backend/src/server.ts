import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
// import connectDB from '../config/db.ts'

dotenv.config()
// connectDB()

const app = express()
app.use(express.json())

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(
        colors.yellow.bold(`Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`)

    )
})
