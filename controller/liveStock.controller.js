const liveStock=require('../models/liveStock.model.js');

exports.createStock = async (req, res) => {
    try {
        const { breed,sex,inseminationDate,type } = req.body;
        const stock = new liveStock({ breed,sex,inseminationDate,type });
        await stock.save();
        res.status(201).json(stock);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getAllStocks = async (req, res) => {
    try {
        const stocks = await liveStock.find();
        res.status(200).json(stocks);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getStockById = async (req, res) => {
    try {
        const stock = await liveStock.findById(req.params.id);
        if (!stock) {
            return res.status(404).json({ message: 'Stock not found' });
        }
        res.status(200).json(stock);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updateStock = async (req, res) => {
    try {
        const { breed,sex,inseminationDate,type } = req.body;
        const stock = await liveStock.findByIdAndUpdate(req.params.id, { breed,sex,inseminationDate,type }, { new: true });
        if (!stock) {
            return res.status(404).json({ message: 'Stock not found' });
        }
        res.status(200).json(stock);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteStock = async (req, res) => {
    try {
        const stock = await liveStock.findByIdAndDelete(req.params.id);
        if (!stock) {
            return res.status(404).json({ message: 'Stock not found' });
        }
        res.status(200).json({ message: 'Stock deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

