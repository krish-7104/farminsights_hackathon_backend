const { Schema, model } = require("mongoose")

const expenseModel = new Schema({
    text: {
        type: String,
    },
    descryption:{
        type:String,
    },
    amount:{
        type:Number,
    },
    type:{
        type:String,
    }
}, { timestamps: true })

module.exports = mongoose.model('Expense', expenseModel);