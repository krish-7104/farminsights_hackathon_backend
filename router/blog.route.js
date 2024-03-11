const express = require('express');
const router = express.Router();
const blogController = require('../controller/blog.controller.js');

router.post('/createBlog', blogController.createBlog);
router.get('/getBlogs', blogController.getAllBlogs);
router.get('/getBlogs/:id', blogController.getBlogById);
router.put('/updateBlog/:id', blogController.updateBlog);
router.delete('/deleteBlog/:id', blogController.deleteBlog);

module.exports = router;