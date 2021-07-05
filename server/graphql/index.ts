import { Application } from 'express';
import { ApolloServer } from 'apollo-server-express';
import typeDefs from './types';
import resolvers from './resolvers';

async function initGraphQL(app: Application) {
  // The ApolloServer constructor requires two parameters: your schema
  // definition and your set of resolvers.
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    playground: {
      endpoint: '/graphql',
      settings: {
        'editor.theme': 'dark',
      },
    },
    context: ({ req, res }) => ({ req, res }),
  });

  await server.start();

  server.applyMiddleware({
    app,
  });
}

export { initGraphQL };
