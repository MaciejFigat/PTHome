import mongoose from 'mongoose'
import dotenv from 'dotenv'
import colors from 'colors'
import blogArticles from '../data/blogArticles'
import BlogArticle from '../models/blogArticleModel'
import connectDB from '../config/db'

dotenv.config()

connectDB()

const importData = async () => {
  try {
    await BlogArticle.deleteMany()

    const createdArticles = await BlogArticle.insertMany(blogArticles)

    console.log('Blog data Imported!'.green.inverse)
    process.exit()
  } catch (error) {
    console.error(`${error}`.red.inverse)
    process.exit(1)
  }
}

const destroyData = async () => {
  try {
    await BlogArticle.deleteMany()

    console.log('Blog data Destroyed!'.red.inverse)
    process.exit()
  } catch (error) {
    console.error(`${error}`.red.inverse)
    process.exit(1)
  }
}

if (process.argv[2] === '-d') {
  destroyData()
} else {
  importData()
}
