"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const blogArticleSchema = new mongoose_1.Schema({
    topline: {
        type: String,
        required: true,
    },
    headline: {
        type: String,
        required: true,
    },
    subtitle: {
        type: String,
        required: true,
    },
    imgLink: {
        type: String,
        required: false,
    },
    author: {
        type: String,
        required: true,
    },
}, { timestamps: true, });
const Article = (0, mongoose_1.model)('Article', blogArticleSchema);
exports.default = Article;
