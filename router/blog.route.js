const express = require('express');
const router = express.Router();
const blogController = require('../controller/blog.controller.js');
const upload = require("../middleware/multer.middleware.js")

router.post('/createBlog', upload.single("image"), blogController.createBlog);
router.get('/getBlogs', blogController.getAllBlogs);
router.get('/getBlogs/:id', blogController.getBlogById);
router.put('/updateBlog/:id', blogController.updateBlog);
router.delete('/deleteBlog/:id', blogController.deleteBlog);

module.exports = router;