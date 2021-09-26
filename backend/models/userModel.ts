import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'
//@ts-ignore
const userSchema = mongoose.Schema(
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
//@ts-ignore
userSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password)
}
//@ts-ignore
userSchema.pre('save', async function (next) {
    //@ts-ignore
    if (!this.isModified('password')) {
        next()
    }

    const salt = await bcrypt.genSalt(10)
    //@ts-ignore
    this.password = await bcrypt.hash(this.password, salt)
})

const User = mongoose.model('User', userSchema)

export default User
