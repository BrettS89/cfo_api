const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLInt,
  GraphQLList
} = graphql;

const UserType = new GraphQLObjectType({
  name: 'UserType',
  fields:{
    id: { type: GraphQLID },
    firstName: { type: GraphQLString },
    lastName: { type: GraphQLString },
    email: { type: GraphQLString },
    token: { type: GraphQLString }
  }
});

module.exports = UserType;