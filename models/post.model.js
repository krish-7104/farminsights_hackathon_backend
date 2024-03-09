import { Schema, model } from "mongoose"

const PostModel = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: "user"
    },
    text: {
        type: String,
    },
    replies: [{
        type: Schema.Types.ObjectId,
        ref: "reply"
    }],
    like: [{
        type: Schema.Types.ObjectId,
        ref: "user"
    }]
}, { timestamps: true })

export default model("post", PostModel)