const express = require('express');
const router = express.Router();
const postController = require('../controller/post.controller.js');
const Post = require('../models/post.model.js');

// Middleware to get post by ID
async function getPost (req, res, next){
    try {
        const post = await Post.findById(req.params.id);
        if (post == null) {
            return res.status(404).json({ message: 'Cannot find post' });
        }
        res.post = post;
        next();
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
};

router.route('/createPost').post(postController.createPost);
router.route('/getAllPosts').get(postController.getAllPosts);
router.route('/getPost/:id').get(getPost,postController.getPostById);
router.route('/updatePost/:id').put(getPost,postController.updatePost);
router.route('/likePost/:id').patch(getPost,postController.appendLikeToPost);
router.route('/deletePost/:id').delete(getPost,postController.deletePost);

module.exports = router;