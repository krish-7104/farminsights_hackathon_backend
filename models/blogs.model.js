import { Schema, model } from "mongoose"

const BlogSchema = new Schema({
    title: {
        type: String
    },
    description: {
        type: String,
    },
    image: {
        type: String
    }
}, { timestamps: true })

export default model("blog", BlogSchema)