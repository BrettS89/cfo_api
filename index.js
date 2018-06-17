const express = require('express');
const expressGraphQL = require('express-graphql');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const schema = require('./schema/schema.js');
const expenseRoutes = require('./routes/expense_routes');
const authRoutes = require('./routes/auth_routes');
const cors = require('cors');
const { MONGO_URI } = require('./config/index');

const app = express();

mongoose.Promise = global.Promise;
mongoose.connect(MONGO_URI);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(cors());

app.use('/expenses', expenseRoutes);
app.use('/auth', authRoutes);
app.use('/graphql', expressGraphQL({
  schema,
  graphiql: true
}));

app.listen(4000, () => {
  console.log('server started');
});

