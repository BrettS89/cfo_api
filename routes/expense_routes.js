const express = require('express');
const router = express.Router();
const Expense = require('../models/Expense');
const { newExpense } = require('../services/expense');

router.post('/add', async (req, res) => {
  const expense = await newExpense(req.body.name, req.body.amount, req.body.user);
  res.status(201).json({expense});
});

router.get('/:id', async (req, res) => {
  try{
    const expenses = await Expense.find({ user: req.params.id });
    res.status(200).json(expenses);
  }
  catch(e){
    res.status(500).json(e);
  }
});

router.delete('/:id', async (req, res) => {
	try{
		const expense = await Expense.findById(req.params.id);
		const userId = expense.user;
		await expense.remove();
		const expenses = await Expense.find({user: userId});
		res.status(200).json(expenses);
	}	
	catch(e){
		res.status(500).json(e);
	}
});

router.patch('/:id', async (req, res) => {
	try{
		const newExpense = await Expense.update({_id: req.params.id}, { $set: {"amount": Number(req.body.value)} });
		const expenses = await Expense.find({user: req.body.user});
		res.status(200).json(expenses);
	}
	catch(e){
		res.status(500).json(e);
	}
	
});

module.exports = router;