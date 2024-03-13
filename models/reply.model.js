const mongoose=require('mongoose');
const Schema=mongoose.Schema;

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

const reply=mongoose.model('Reply',ReplyModel);

module.exports=reply;

