import { Schema, model } from "mongoose"

const UserSchema = new Schema({
    username: {
        type: String,
        unique: [true, "Username should be unique!"],
        required: [true, "Username is required!"]
    },
    email: {
        type: String,
        unique: [true, "Email should be unique!"],
        required: [true, "Email is required!"]
    },
    password: {
        type: String,
        required: [true, "Password is Required"]
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
}, { timestamps: true })

UserSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next()
    this.password = await bcrypt.hash(this.password, 10)
    next()
})

UserSchema.methods.isPasswordCorrect = async function (password) {
    return await bcrypt.compare(password, this.password)
}

export default model("user", UserSchema)