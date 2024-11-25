const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
    type: { type: String, required: true }, // "income" or "expense"
    amount: { type: Number, required: true },
    description: { type: String, required: true },
    date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Transaction', transactionSchema);
