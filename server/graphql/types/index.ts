import { gql } from 'apollo-server-express';

const Query = gql`
  ######################
  type Query {
    # Product Related
    products: [Product]
    product(id: ID!): Product

    #     # Cart related
    carts: [Cart]
    cart(id: String!): Cart

    # # Receipt Related
    receipt(id: String!): Receipt
    receipts: [Receipt]
  }
`;
// Define shape of queries representing our data.
const Mutation = gql`
  ########################
  # In a sense, this is our CRUD.
  type Mutation {
    #   createProducts(payload: [ProductInput]): [Product]
    # Product

    createProduct(test: String): Product
    updateProduct(id: ID!, payload: ProductInput!): Product
    removeProduct(id: ID!): Product

    # # Cart
    createCart(payload: CartInput!): Cart
    # updateCart(id: String!, payload: Cart!): Cart
    removeCart(id: String!): Cart

    # # Receipt
    createReceipt(payload: ReceiptInput!): Receipt
    removeReceipt(id: String!): Receipt
  }
`;

export { Query, Mutation };
