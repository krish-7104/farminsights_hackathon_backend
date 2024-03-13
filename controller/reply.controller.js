const Reply = require('../models/reply.model.js');

exports.createReply = async (req, res) => {
    try {
        const reply = await Reply.create(req.body);
        res.status(201).json(reply);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.getAllReplies = async (req, res) => {
    try {
        const replies = await Reply.find();
        res.json(replies);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.getReplyById = async (req, res) => {
    res.json(res.reply);
};

exports.updateReply = async (req, res) => {
    try {
        const { userId,text,post } = req.body;
        const reply = await Reply.findByIdAndUpdate(req.params.id, { userId,text,post}, { new: true });
        
        if (!reply) {
            return res.status(404).json({ message: 'Reply not found' });
        }
        const updatedReply = await reply.save();
        res.json(updatedReply);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.deleteReply = async (req, res) => {
    try {
        await res.reply.remove();
        res.json({ message: 'Deleted Reply' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
