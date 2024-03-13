const express = require('express');
const Post = require('../models/post.model.js');
const Reply = require('../models/reply.model.js');

exports.createPost = async (req, res) => {
    try {
        const post = await Post.create(req.body);
        res.status(201).json(post);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.getAllPosts = async (req, res) => {
    try {
        const posts = await Post.find().populate("like userId replies")
        res.json(posts);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.getPostById = async (req, res) => {
    res.json(res.post);
};

exports.updatePost = async (req, res) => {
    try {
        const { title, description, replies, like, userId } = req.body;
        const post = await Post.findByIdAndUpdate(req.params.id, { title, description, replies, like, userId }, { new: true });

        if (!post) {
            return res.status(404).json({ message: 'Post not found' });
        }
        const updatedPost = await post.save();
        res.json(updatedPost);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};


exports.deletePost = async (req, res) => {
    try {
        const postId = req.params.id;
        const deletedPost = await Post.findByIdAndDelete(postId);
        if (!deletedPost) {
            return res.status(404).json({ message: 'Post not found' });
        }
        res.json({ message: 'Deleted Post' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.appendLikeToPost = async (req, res) => {
    try {
        const postId = req.params.id;
        const userId = req.body.userId;

        const post = await Post.findById(postId);
        if (!post) {
            return res.status(404).json({ message: 'Post not found' });
        }

        const userIndex = post.like.indexOf(userId);

        if (userIndex === -1) {
            post.like.push(userId);
            await post.save();
            res.json(post);
        } else {
            post.like.splice(userIndex, 1);
            await post.save();
            res.json(post);
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};


