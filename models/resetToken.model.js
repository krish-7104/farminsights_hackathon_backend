const { Schema, model } = require("mongoose")

const tokenSchema = new Schema({
    token: String
}, { timestamps: true })

const resetToken = model('Reset Token', tokenSchema);

module.exports = resetToken;