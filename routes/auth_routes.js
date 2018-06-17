const express = require('express');
const { signup, login } = require('../services/auth');
const router = express.Router();

router.post('/signup', async (req, res) => {
  const user = await signup(req.body.firstName, req.body.lastName, req.body.email, req.body.password);
  res.status(201).json(user);
});

router.post('/login', async (req, res) => {
  const user = await login(req.body.email, req.body.password);
  res.status(200).json(user);
});

module.exports = router;