const graphql = require('graphql');
const UserType = require('./types/user-type');
const {
  GraphQLObjectType
} = graphql;

const RootQueryType = new GraphQLObjectType({
  name: 'RootQueryType',
    fields: {
      ayo: {
        type: UserType
      }
    }
});

module.exports = RootQueryType;