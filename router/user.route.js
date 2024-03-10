const express = require('express');
const router = express.Router();
const userController = require('../controller/user.controller.js');

router.route('/register').post(userController.register);
router.route('/login').post(userController.login);
router.route('/get-user').post(userController.user);
router.route('/forgotPassword').post(userController.forgotPassword);
router.route('/updatePassword').post(userController.updatePassword);

module.exports = router;