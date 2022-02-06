import { model, Schema, Document } from 'mongoose'

export interface Token extends Document {
    userId: any
    token: string
    createdAt: any
}
const tokenSchema = new Schema<Token>({
    userId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "User",
    },
    token: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        expires: 3600,
    },
})

const Token = model<Token>('Token', tokenSchema)