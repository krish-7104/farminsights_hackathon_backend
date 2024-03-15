const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const liveStockSchema = new Schema({
    breed: {
        type: String,
        required: [true, 'breed is required'],
    },
    sex: {
        type: String,
        required: [true, 'sex is required'],
    },
    dob: {
        type: String,
        required: [false, 'Birth Date is required'],
    },
    type: {
        type: String,
        required: [true, 'Type is required'],
    }
}, { timestamp: true });

const liveStock = mongoose.model('LiveStock', liveStockSchema);

module.exports = liveStock;


