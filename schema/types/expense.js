const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLInt,
  GraphQLList
} = graphql;

const ExpenseType = new GraphQLObjectType({
  name: 'ExpenseType',
  fields: {
    name: { type: GraphQLString },
    amount: { type: GraphQLInt },
    
  }
});

module.exports = ExpenseType;