import mongoose from 'mongoose'
// const mongoose = require('mongoose')
import dotenv from 'dotenv'
// const dotenv = require('dotenv')
import colors from 'colors'
// const colors = require('colors')
import users from '../data/users'
// const users = require('../data/users')
import User from '../models/userModel'
// const User = require('../models/userModel')
import connectDB from '../config/db'
// const connectDB = require('../config/db')

dotenv.config()

connectDB()

const importData = async () => {
  try {
    await User.deleteMany()

    const createdUsers = await User.insertMany(users)

    const adminUser = createdUsers[0]._id

    console.log('Data Imported!'.green.inverse)
    process.exit()
  } catch (error) {
    console.error(`${error}`.red.inverse)
    process.exit(1)
  }
}

const destroyData = async () => {
  try {
    await User.deleteMany()

    console.log('Data Destroyed!'.red.inverse)
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
