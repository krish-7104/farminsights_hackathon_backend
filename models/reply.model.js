const { Schema, model } = require("mongoose")

const ReplyModel = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: "user"
    },
    text: {
        type: String,
    },
    post: {
        type: Schema.Types.ObjectId,
        ref: "post"
    }
}, { timestamps: true })

module.exports = mongoose.model('reply', ReplyModel);