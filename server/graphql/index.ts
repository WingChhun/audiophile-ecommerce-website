import { ApolloServer } from 'apollo-server-express';
import types from './types';
import resolvers from './resolvers';

async function initGraphQL(app: any) {
  // The ApolloServer constructor requires two parameters: your schema
  // definition and your set of resolvers.
  const server = new ApolloServer({
    typeDefs: types,
    resolvers,
    playground: {
      endpoint: '/graphql',
      settings: {
        'editor.theme': 'dark',
      },
    },
    // dataSources
    context: ({ req, res }) => ({ req, res }),
  });

  await server.start();

  server.applyMiddleware({
    app,
  });
}

export { initGraphQL };
