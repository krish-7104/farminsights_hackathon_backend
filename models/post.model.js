const { Schema, model } = require("mongoose")

const PostModel = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },  
    title: {
        type: String,
    },
    description: {
        type: String,
    },
    replies: [{
        type: Schema.Types.ObjectId,
        ref: "Reply"
    }],
    like: [{
        type: Schema.Types.ObjectId,
        ref: "User"
    }]
}, { timestamps: true })

module.exports = model("Post",PostModel)
