"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const authMiddleware_1 = require("../middleware/authMiddleware");
const articleController_1 = require("../controllers/articleController");
const router = express_1.default.Router();
router.route('/').get(articleController_1.getArticles).post(authMiddleware_1.protect, authMiddleware_1.admin, articleController_1.createArticle);
router.route('/:id').get(articleController_1.getArticleById).delete(authMiddleware_1.protect, authMiddleware_1.admin, articleController_1.deleteArticle).put(authMiddleware_1.protect, authMiddleware_1.admin, articleController_1.updateArticle);
exports.default = router;
