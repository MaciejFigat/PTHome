import express from 'express'
const router = express.Router()
import {
    authUser,
    registerUser,
    getUsers,
    deleteUser,
    updateUser,
    getUserById,

} from '../controllers/userController'
import { protect, admin } from '../middleware/authMiddleware'

router.route('/').post(registerUser).get(protect, admin, getUsers)
router.post('/login', authUser)

router
    .route('/:id')
    .delete(protect, admin, deleteUser)
    .get(protect, admin, getUserById)
    .put(protect, admin, updateUser)

export default router
