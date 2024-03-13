const { Schema, model } = require("mongoose")

const expenseModel = new Schema({
    text: {
        type: String,
    },
    description:{
        type:String,
    },
    amount:{
        type:Number,
    },
    type:{
        type:String,
    }
}, { timestamps: true })

module.exports = model('Expense', expenseModel);