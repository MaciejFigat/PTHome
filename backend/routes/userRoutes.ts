import express from 'express'
const router = express.Router()
import { authUser, registerUser, getUsers, deleteUser } from '../controllers/userController'
import { protect, admin } from '../middleware/authMiddleware.js'


router.route('/').post(registerUser).get(protect, admin, getUsers)
router.post('/login', authUser)
router
    .route('/:id')
    .delete(protect, admin, deleteUser)

export default router