const express = require('express');
const router = express.Router();
const replyController = require('../controller/reply.controller.js');
const Reply = require('../models/reply.model.js');

async function getReply(req, res, next) {
    try {
        const reply = await Reply.findById(req.params.id);
        if (reply == null) {
            return res.status(404).json({ message: 'Cannot find reply' });
        }
        res.reply = reply;
        next();
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
}

router.route('/createReply').post(replyController.createReply);
router.route('/getAllreplies').get(replyController.getAllReplies);
router.route('/getReply/:id').get(getReply,replyController.getReplyById);
router.route('/updateReply/:id').put(getReply,replyController.updateReply);
//router.route('/likereply/:id').patch(getReply,replyController.appendLikeToreply);
router.route('/deleteReply/:id').delete(getReply,replyController.deleteReply);

module.exports=router;