const express = require('express');
const router = express.Router();
const expenseController = require('../controller/expense.controller.js');

router.route('/createExpense').post(expenseController.createExpense);
router.route('/getAllExpenses').get(expenseController.getAllExpenses);
router.route('/getExpense/:id').get(expenseController.getExpenseById);
router.route('/updateExpense/:id').put(expenseController.updateExpense);
router.route('/deleteExpense/:id').delete(expenseController.deleteExpense);

module.exports = router;