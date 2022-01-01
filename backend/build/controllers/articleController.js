"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateArticle = exports.createArticle = exports.deleteArticle = exports.getArticleById = exports.getArticles = void 0;
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const blogArticleModel_1 = __importDefault(require("../models/blogArticleModel"));
// @description Fetch all articles
// @route GET /api/articles
// @access Public
const getArticles = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const articles = yield blogArticleModel_1.default.find({});
    res.json(articles);
}));
exports.getArticles = getArticles;
//     const pageSize = 10
//     const page = Number(req.query.pageNumber) || 1
//     // req.query is how I get query strings
//     const keyword = req.query.keyword
//         ? {
//             name: {
//                 // I put this so I don't have to match the exact name
//                 $regex: req.query.keyword,
//                 // 'i' means here it's case insensitive
//                 $options: 'i',
//             },
//         }
//         : {}
//     // part of pagination
//     const count = await BlogArticle.countDocuments({ ...keyword })
//     const articles = await BlogArticle.find({ ...keyword })
//         .limit(pageSize)
//         .skip(pageSize * (page - 1))
//     // find method when passed {} - empty object -> gives everything
//     res.json({ articles, page, pages: Math.ceil(count / pageSize) })
// })
// @description Fetch single Article
// @route GET /api/articles/:_id
// @access Public
const getArticleById = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const article = yield blogArticleModel_1.default.findById(req.params.id);
    // this will give me (req.params.id) whichever id that is in url
    //   const article = articles.find((p) => p._id === req.params.id)
    // for each article find _id that is equal to :id (from route ) (request object.params.id - the last thing in the route)
    if (article) {
        res.json(article);
    }
    else {
        res.status(404);
        throw new Error('article not found');
    }
}));
exports.getArticleById = getArticleById;
// @description delete an article
// @route DELETE /api/articles/:_id
// @access private/admin
const deleteArticle = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const article = yield blogArticleModel_1.default.findById(req.params.id);
    if (article) {
        yield article.remove();
        res.json({ message: 'Article removed' });
    }
    else {
        res.status(404);
        throw new Error('Article not found');
    }
}));
exports.deleteArticle = deleteArticle;
// @description create an Article
// @route POST /api/articles/
// @access private/admin
const createArticle = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { topline, headline, subtitle, imgLink, author } = req.body;
    const article = new blogArticleModel_1.default({
        topline,
        headline,
        subtitle,
        imgLink,
        author
    });
    const createdArticle = yield article.save();
    res.status(201).json(createdArticle);
}));
exports.createArticle = createArticle;
// @description update a product
// @route PUT /api/products/:id
// @access private/admin
const updateArticle = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { topline, headline, subtitle, imgLink, author } = req.body;
    const article = yield blogArticleModel_1.default.findById(req.params.id);
    if (article) {
        article.topline = topline;
        article.headline = headline;
        article.subtitle = subtitle;
        article.imgLink = imgLink;
        article.author = author;
        const updatedArticle = yield article.save();
        res.json(updatedArticle);
    }
    else {
        res.status(404);
        throw new Error('Article not found');
    }
}));
exports.updateArticle = updateArticle;
