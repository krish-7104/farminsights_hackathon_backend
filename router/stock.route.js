const express = require('express');
const router = express.Router();
const stockController = require('../controller/liveStock.controller.js');

router.route('/createStock').post(stockController.createStock);
router.route('/getAllStocks').get(stockController.getAllStocks);
router.route('/getstock/:id').get(stockController.getStockById);
router.route('/updateStock/:id').put(stockController.updateStock);
router.route('/deleteStock/:id').delete(stockController.deleteStock);

module.exports = router;