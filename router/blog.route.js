const express = require('express');
const router = express.Router();
const blogController = require('../controller/blog.controller.js');
const upload = require("../middleware/multer.middleware.js")

router.route('/createBlog').post(upload.single("image"), blogController.createBlog);
router.route('/getBlogs').get(blogController.getAllBlogs);
router.route('/getBlogs/:id').get(blogController.getBlogById);
router.route('/updateBlog/:id').put(blogController.updateBlog);
router.route('/deleteBlog/:id').delete(blogController.deleteBlog);

module.exports = router;