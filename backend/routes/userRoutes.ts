// import express from 'express'
// import { authUser, registerUser } from '../controllers/userController'

// const router = express.Router()

// router.route('/').post(registerUser)
// router.post('/login', authUser)

// export default router

import express from 'express'
const router = express.Router()
import { authUser, registerUser } from '../controllers/userController'


router.route('/').post(registerUser)
router.post('/login', authUser)

export default router