const { Schema, model } = require("mongoose");

const ReplyModel = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    text: {
        type: String,
    },
    post: {
        type: Schema.Types.ObjectId,
        ref: "Post"
    }
}, { timestamps: true })

module.exports=model('Reply',ReplyModel);



