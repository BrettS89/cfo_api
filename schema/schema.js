const graphql = require('graphql');
const { GraphQLSchema } = graphql;
const mutation = require('./mutations');
const RootQueryType = require('./root-query');

module.exports = new GraphQLSchema({
  query: RootQueryType,
  mutation
});