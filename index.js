const paitents = require('./data.json');
const { ApolloServer, gql } = require('apollo-server');

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = gql`
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Paitent" type defines the queryable fields for every paitent in our data source.
  type Paitent {
    patientId: String
    claimId: String
    lineNumber: String
    procedureCode: String
    providerId: String
    practiceId: String
    dateOfBirth: String
    dataOfService: String
    toothNumber: String
    quadrant: String
    productId: String
    imageId: String
    reviewed: String
    reviewResult: String
    allowedAmount: String
    approvedAmount: String
    patientState: String
    overjetReviewResults: String
    clientResponseCode: String
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "paitents" query returns an array of zero or more Paitents (defined above).
  type Query {
    paitents: [Paitent]
  }
`;

// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves paitents from the "paitents" array above.
const resolvers = {
  Query: {
    paitents: () => paitents
  }
};

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
