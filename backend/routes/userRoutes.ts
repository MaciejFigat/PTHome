import express from 'express'
import {
    authUser,
    registerUser,
    getUsers,
    deleteUser,
    updateUser,
    getUserById,
    getUserProfile,
    updateUserProfile,
    resetUserPassword,
    forgotUserPassword,
} from '../controllers/userController'
import { protect, admin } from '../middleware/authMiddleware'
const router = express.Router()

router.route('/').post(registerUser).get(protect, admin, getUsers)
router.route('/forgotPassword').post(forgotUserPassword)
router.route('/passwordReset').get(resetUserPassword)


router.post('/login', authUser)

router
    .route('/profile')
    .get(protect, getUserProfile)
    .put(protect, updateUserProfile)

router
    .route('/:id')
    .delete(protect, admin, deleteUser)
    .get(protect, admin, getUserById)
    .put(protect, admin, updateUser)

export default router
