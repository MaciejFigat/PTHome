import { model, Schema, Document } from "mongoose"

export interface BlogArticle extends Document {
    topline: string
    headline: string
    subtitle: string
    imgLink?: string
    author: string
}

const blogArticleSchema = new Schema<BlogArticle>(
    {
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
    },
    { timestamps: true, }
)



const BlogArticle = model<BlogArticle>('BlogArticle', blogArticleSchema)

export default BlogArticle