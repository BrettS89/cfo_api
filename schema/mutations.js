const graphql = require('graphql');
const auth = require('../services/auth');
const expense = require('../services/expense')
const UserType = require('./types/user-type');
const ExpenseType = require('./types/expense');
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLID
} = graphql;

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    signup: {
      type: UserType,
      args: {
        firstName: { type: GraphQLString },
        lastName: { type: GraphQLString },
        email: { type: GraphQLString },
        password: { type: GraphQLString }
      },
      resolve(parentValue, args, req){
        return auth.signup(args.firstName, args.lastName, args.email, args.password);
      }
    },
    login: {
      type: UserType,
      args: {
        email: { type: GraphQLString },
        password: { type: GraphQLString }
      },
      resolve(parentValue, args, req){
        return auth.login(args.email, args.password);
      }
    },
    newExpense: {
      type: ExpenseType,
      args: {
        name: { type: GraphQLString },
        amount: { type: GraphQLInt },
        user: { type: GraphQLID }
      },
      resolve(parentValue, args, req){
        return expense.newExpense(args.name, args.amount, args.user);
      }
    }
  }
});

module.exports = mutation;

