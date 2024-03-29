import asyncHandler from 'express-async-handler'
import generateToken from '../utilities/generateToken'
import User from '../models/userModel'
import crypto from 'crypto'
// sequelize is to compare reset token expiration date with the day of the request to reset
import Sequelize from 'sequelize'
import sendEmailTest from '../utilities/nodemailerTestTwo'
import { NextFunction } from 'express'

// @description user provides an email, requests the reset of the password -> sends a link to reset password
// @route POST /api/users/forgotPassword
// @access Public
const forgotUserPassword = asyncHandler(async (req, res) => {
  const { email } = req.body
  // if email provided is empty
  if (email === '') {
    res.status(400).send('email required')
  }
  const user = await User.findOne({ email: email })

  if (user) {
    // create reset token
    const resetToken = crypto.randomBytes(20).toString('hex')

    // save it to the user as resetPasswordToken
    await user.updateOne({
      resetPasswordToken: resetToken,
      resetPasswordExpires: Date.now() + 3600000
    })
    // here we send the email with the reset link
    const userEmail = email
    const subject = 'TurboLex reset hasła'
    const text = 'Zmiana hasła lub zalogowanie bez zmiany.'
    const htmlBody =
      process.env.NODE_ENV === 'production'
        ? `
        
                    <div style='display: grid; place-items:center; border-radius: 10px; background-color: #F7F6F2; padding: 16px;'>
 
                        <h2>Wiadomość została wygenerowana w celu resetu hasła w serwisie TurboLex</h2> 
 
                        <h3 style='font-size: 16px; color: #3B5367;'>
                        Poniższy link prowadzi do ekranu umożliwiającego reset hasła bądź zalogowanie się starym hasłem.</h3>
   

                            <button style='background-color: #3B5367; text-align: center; border-radius: 5px; border: none; padding: 10px; width: 240px;'>
                                <a style='text-decoration: none; color: #F7F6F2; font-size: 20px;' href='https://lexbis.netlify.app/resetpassword/${resetToken}'>
                                Resetuj hasło
                                </a>
                            </button>
 
                    </div>`
        : `      <div style='display: grid; place-items:center; border-radius: 10px; background-color: #F7F6F2; padding: 16px;'>
 
                            <h2>Wiadomość została wygenerowana w celu resetu hasła w serwisie TurboLex</h2> 
 
                            <h3 style='font-size: 16px; color: #3B5367;'>
                            Poniższy link prowadzi do ekranu umożliwiającego reset hasła bądź zalogowanie się starym hasłem.</h3>
   

                            <button style='background-color: #3B5367; text-align: center; border-radius: 5px; border: none; padding: 10px; width: 240px;'>
                                    <a style='text-decoration: none; color: #F7F6F2; font-size: 20px;' href='http://localhost:3000/resetpassword/${resetToken}'>
                                     Resetuj hasło
                                    </a>
                            </button>
 
                    </div>`

    // `<p>Please copy this token: <b>${resetToken}</b> and use it to login and set a new password.</p>
    // <a href='https://lexfront.netlify.app/resetpassword'>Alternative link</a>`

    // <a href='http://localhost:3000/resetpassword'>Alternative link</a>`
    // const htmlBody = `<form method="post" action="http://localhost:5000/api/users/reset?${resetToken}"><input type ="hidden" name ="extra_submit_param" value ="extra_submit_value"><button type="submit" name ="submit_param" value ="submit_value">This link will take you to a password reset screen</button><a href='http://localhost:5000/api/users/reset?${resetToken}'>Alternative link</a></form>`
    sendEmailTest(userEmail, subject, text, htmlBody)
  } else {
    res.status(401)
    throw new Error('Email is not in our database')
  }
})

// @description user confirms his status through a link with a confirmation token, changes status from pending to active
// @route PUT /api/users/userconfirmation
// @access Public
const confirmUser = asyncHandler(async (req, res) => {
  const { confirmationCode } = req.body

  const user = await User.findOne({ confirmationCode: confirmationCode })

  if (user) {
    const userStatus = 'Active'
    user.status = userStatus
    await user.save()
    res.json({ message: 'User status changed' })
  } else {
    res.status(401)
    throw new Error('confirmation code invalid')
  }
})
// @description admin changes user status from pending to active or pending
// @route PUT /api/users/adminconfirmation/:id
// @access private/Admin
// no longer needed - updateUser has that functionality now
const confirmUserByAdmin = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id)
  const userStatus = 'Active'
  if (user && user.status) {
    user.status = userStatus
    await user.save()
    res.json({ message: 'User status changed' })
  } else {
    res.status(404)
    throw new Error('User not found')
  }
})

// @description authenticate user & get token - give email and send link to reset password
// @route GET/api/users/resetPassword
// @access Public
const Op = Sequelize.Op

const resetUserPassword = asyncHandler(async (req, res) => {
  // find user by the resetToken
  const { resetPasswordToken } = req.body
  const user = await User.findOne({
    resetPasswordToken: resetPasswordToken
  })

  if (user) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      status: user.status,
      isAdmin: user.isAdmin,
      token: generateToken(user._id)
    })
  } else {
    res.status(401)
    throw new Error('Password reset link is invalid or has expired')
  }
})

// @description authenticate user & get token
// @route POST /api/users/login
// @access Public

const authUser = asyncHandler(async (req, res, next: NextFunction) => {
  const { email, password } = req.body

  try {
    const user = await User.findOne({ email: email })

    if (user && (await user.matchPassword(password))) {
      res.json({
        _id: user._id,
        name: user.name,
        status: user.status,
        email: user.email,
        isAdmin: user.isAdmin,
        token: generateToken(user._id)
      })
    } else {
      res.status(401).json({
        message: 'Wrong username or password'
      })
    }
  } catch (error: any) {
    next(error)
  }
})

const testReset = asyncHandler(async (req, res) => {
  const { resetPasswordToken } = req.body
  const user = await User.findOne({ resetPasswordToken: resetPasswordToken })

  if (user) {
    res.json({
      _id: user._id,
      name: user.name,
      status: user.status,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
      message: 'User reset token confirmed'
    })
  } else {
    res.status(401)
    throw new Error('Password reset link is invalid or has expired')
  }
})

// @description Register a new user, and create the confirmationToken and send it to provided email
// @route POST /api/users
// @access Public

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body

  const userExists = await User.findOne({ email: email })

  if (userExists) {
    res.status(400)
    throw new Error('User already exists')
  }
  const confirmationToken = crypto.randomBytes(20).toString('hex')

  const user = await User.create({
    name,
    email,
    password,
    status: 'Pending',
    confirmationCode: confirmationToken
  })

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      status: user.status,
      token: generateToken(user._id)
    })
  } else {
    res.status(400)
    throw new Error('Invalid user data')
  }
  // here we send the email with confirmationToken
  const userEmail = email
  const subject = 'Witaj w TurboLex'
  const text = 'Aktywacja konta'

  const htmlBody =
    process.env.NODE_ENV === 'production'
      ? `
       
        <div style='display: grid; place-items:center; border-radius: 10px; background-color: #F7F6F2; padding: 16px;'>
        
            <h2>Dziękujemy za rejestrację w TurboLex</h2> 
        
            <h3 style='font-size: 16px; color: #3B5367;'>Poniższy link weryfikuje email podany podczas rejestracji na serwisie TurboLex</h3>
          

            <button style='background-color: #3B5367; text-align: center; border-radius: 5px; border: none; padding: 10px; width: 240px;'>
                    <a style='text-decoration: none; color: #F7F6F2; font-size: 20px;' href='https://lexbis.netlify.app/confirmaccount/${confirmationToken}'>
                         Aktywuj konto TurboLex
                    </a>
            </button>
        
        </div>
        
        
        `
      : `<div style='display: grid; place-items:center; border-radius: 10px; background-color: #F7F6F2; padding: 16px;'>
        
            <h2>Dziękujemy za rejestrację w TurboLex</h2> 
        
            <h3 style='font-size: 16px; color: #3B5367;'>Poniższy link weryfikuje email podany podczas rejestracji na serwisie TurboLex</h3>
          

            <button style='background-color: #3B5367; text-align: center; border-radius: 5px; border: none; padding: 10px; width: 240px;'>
                    <a style='text-decoration: none; color: #F7F6F2; font-size: 20px;' href='http://localhost:3000/confirmaccount/${confirmationToken}'>
                         Aktywuj konto TurboLex
                    </a>
            </button>
        
        </div>`

  // <a href='https://lexbis.netlify.app/confirmaccount/${confirmationToken}'>Please follow the link and paste the code there.</a></>`
  // const htmlBody = `<><b>Please confirm your email by clicking the link below.</b><form method="post" action="http://localhost:5000/api/users/userconfirmation?confirmationCode=${confirmationToken}"><input type ="hidden" name ="extra_submit_param" value ="extra_submit_value"><button type="submit" name ="submit_param" value ="submit_value">You are confirming your email address.</button><a href='http://localhost:5000/api/users/userconfirmation?confirmationCode=${confirmationToken}'>Alternative link</a></form></>`
  sendEmailTest(userEmail, subject, text, htmlBody)
})

// @description get all users
// @route GET /api/users
// @access private/Admin

const getUsers = asyncHandler(async (req, res) => {
  const users = await User.find({})
  res.json(users)
})

// @description delete user
// @route DELETE /api/users/:id
// @access private/Admin

const deleteUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id)

  if (user) {
    await user.remove()
    res.json({ message: 'User removed' })
  } else {
    res.status(404)
    throw new Error('User not found')
  }
})

// @description update user
// @route PUT /api/users/:id
// @access private/admin

const updateUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id)

  if (user) {
    user.name = req.body.name || user.name
    user.email = req.body.email || user.email
    user.isAdmin = req.body.isAdmin || user.isAdmin
    user.status = req.body.status || user.status

    const updatedUser = await user.save()

    res.json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      isAdmin: updatedUser.isAdmin,
      status: updatedUser.status
    })
  } else {
    res.status(404)
    throw new Error('User not found')
  }
})

// @description get user by ID
// @route GET /api/users/:id
// @access private/Admin

const getUserById = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id).select('-password')
  if (user) {
    res.json(user)
  } else {
    res.status(404)
    throw new Error('User not found')
  }
})
// @description update user profile (by the User)
// @route POST /api/users/profile
// @access private

const updateUserProfile = asyncHandler(async (req: any, res: any) => {
  const user = await User.findById(req.user._id)

  if (user) {
    user.name = req.body.name || user.name
    user.email = req.body.email || user.email
    if (req.body.password) {
      user.password = req.body.password
    }

    const updatedUser = await user.save()

    res.json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      isAdmin: updatedUser.isAdmin,
      token: generateToken(updatedUser._id)
    })
  } else {
    res.status(404)
    throw new Error('User not found')
  }
})

// @description get user profile & get token (by the User)
// @route GET /api/users/profile
// @access private

const getUserProfile = asyncHandler(async (req: any, res: any) => {
  const user = await User.findById(req.user._id)

  if (user) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin
    })
  } else {
    res.status(404)
    throw new Error('User not found')
  }
})

export {
  authUser,
  registerUser,
  getUsers,
  deleteUser,
  updateUser,
  getUserById,
  updateUserProfile,
  getUserProfile,
  resetUserPassword,
  forgotUserPassword,
  testReset,
  confirmUser,
  confirmUserByAdmin
}
