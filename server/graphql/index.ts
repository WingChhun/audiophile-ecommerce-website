import { Application } from 'express';
import { ApolloServer } from 'apollo-server-express';
import Cart from './types/cart';
import Product from './types/product';
import Receipt from './types/receipt';
import { Query, Mutation } from './types';
import resolvers from './resolvers';

async function initGraphQL(app: Application) {
  // The ApolloServer constructor requires two parameters: your schema
  // definition and your set of resolvers.
  const server = new ApolloServer({
    typeDefs: [Cart, Product, Receipt, Query, Mutation],
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
