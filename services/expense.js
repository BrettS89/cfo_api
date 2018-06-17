const User = require('../models/User');
const Expense = require('../models/Expense');


//save an expense
async function newExpense(name, amount, user){
  const newExpense = new Expense({
    name,
    amount,
    user
  });
  const expense = await newExpense.save();
  const theUser = await User.findById(user);
  theUser.expenses.push(expense._id);
  theUser.save();
  return expense;
}

module.exports = { newExpense };