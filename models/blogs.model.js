const { Schema, model } = require("mongoose")

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

module.exports = model("blog", BlogSchema)