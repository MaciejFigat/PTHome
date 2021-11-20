import express from 'express'
// import { protect, admin } from '../middleware/authMiddleware'
import { createArticle, deleteArticle, getArticleById, getArticles, updateArticle } from '../controllers/articleController'

const router = express.Router()



router.route('/').get(getArticles).post(createArticle)
router.route('/:id').get(getArticleById).delete(deleteArticle).put(updateArticle)

export default router