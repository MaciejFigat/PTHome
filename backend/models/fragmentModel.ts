import { model, Schema, Document } from "mongoose"

export interface Fragment extends Document {
    user: {
        type: any
        required: boolean
        ref: string
    }

    source: string,
    excerpt: string,
    coordinates: string,
    title: string,
    description: string,
    // todo part of keyword functionality
    keywords: string[]

}

const fragmentSchema = new Schema<Fragment>(
    {
        user: {
            type: Schema.Types.ObjectId,
            required: true,
            ref: 'User',
        },

        source: {
            type: String,
            required: true,
        },
        excerpt: {
            type: String,
            required: true,
        },
        coordinates: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        // todo part of keyword functionality
        keywords: [{
            type: String,
            required: false,
        }],



    },
    { timestamps: true, }
)



const Fragment = model<Fragment>('Fragment', fragmentSchema)

export default Fragment