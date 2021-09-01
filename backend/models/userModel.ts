import { model, Schema, Document } from "mongoose"
import bcrypt from 'bcryptjs'

export interface User extends Document {
    name: string
    email: string
    password: string
    isAdmin?: boolean
    matchPassword: (password: string) => Promise<boolean>
}

const userSchema = new Schema<User>(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        isAdmin: {
            type: Boolean,
            required: true,
            default: false,
        },

    },
    {
        timestamps: true,
    }
)

userSchema.methods.matchPassword = async function (enteredPassword: string) {
    return await bcrypt.compare(enteredPassword, this.password)
}

userSchema.pre('save', async function (this: any, next: Function,) {
    if (!this.isModified('password')) {
        next()
    }

    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
})

const User = model<User>('User', userSchema)

export default User


