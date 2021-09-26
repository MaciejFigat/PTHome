import asyncHandler from 'express-async-handler'
import generateToken from '../utilities/generateToken'
import User from '../models/userModel'

// @description authenticate user & get token
// @route POST /api/users/login
// @access Public

const authUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body
    const user = await User.findOne({ email: email })
    //@ts-ignore
    if (user && (await user.matchPassword(password))) {
        res.json({
            _id: user._id,
            //@ts-ignore
            name: user.name,
            //@ts-ignore
            email: user.email,
            //@ts-ignore
            isAdmin: user.isAdmin,
            token: generateToken(user._id),
        })
    } else {
        res.status(401)
        throw new Error('Wrong username or password')
    }
})

// @description Register a new user
// @route POST /api/users
// @access Public

const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body

    const userExists = await User.findOne({ email: email })

    if (userExists) {
        res.status(400)
        throw new Error('User already exists')
    }
    const user = await User.create({
        name,
        email,
        password,
    })

    if (user) {
        res.status(201).json({
            _id: user._id,
            //@ts-ignore
            name: user.name,
            //@ts-ignore
            email: user.email,
            //@ts-ignore
            isAdmin: user.isAdmin,
            token: generateToken(user._id),
        })
    } else {
        res.status(400)
        throw new Error('Invalid user data')
    }
})

export { authUser, registerUser }
