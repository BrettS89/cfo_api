const mongoose = require('mongoose');
const Expense = require('./Expense');

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  expenses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Expense' }]
});


module.exports = mongoose.model('User', userSchema);