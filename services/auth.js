const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/User');


async function signup(firstName, lastName, email, password){
  const newUser = new User({
    firstName,
    lastName,
    email,
    password: bcrypt.hashSync(password, 10)
  });
  if (!email || !password) { throw new Error('You must provide an email and password.') }
  const user = await newUser.save();
  var token = jwt.sign({user: user}, 'secret', {expiresIn: 7200});
  user.token = token;
  return user;
}


async function login(email, password){
  try{
    const user = await User.findOne({ email });
    if(!bcrypt.compareSync(password, user.password)){
      return 'Invalid login credentials';
    }
    const token = jwt.sign({ user }, 'secret', { expiresIn:7200 });
    user.token = token;
    return user;
  } catch(e){
    return 'An error occured';
  }
}

module.exports = { signup, login };