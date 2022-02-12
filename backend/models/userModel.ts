import { model, Schema, Document } from 'mongoose'
import bcrypt from 'bcryptjs'


export interface User extends Document {
    name: string
    email: string
    password: string
    isAdmin?: boolean
    matchPassword: (password: string) => Promise<boolean>
    resetPasswordToken?: string | number,
    resetPasswordExpires?: string | number | any,
    status: 'Pending' | 'Active'
    confirmationCode: string | number | any,
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
        resetPasswordToken: {
            type: String,
            required: false,
        },
        resetPasswordExpires: {
            type: Date,
            required: false,
        },
        status: {
            type: String,
            enum: ['Pending', 'Active'],
            default: 'Pending'
        },
        confirmationCode: {
            type: String,
            unique: true
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


