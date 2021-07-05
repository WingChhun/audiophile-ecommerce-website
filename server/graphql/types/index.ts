import { gql } from 'apollo-server-express';
// Define shape of queries representing our data.
const typeDefs = gql`
  type Image {
    mobile: String
    tablet: String
    desktop: String
  }

  type ProductFeatures {
    quantity: Float
    item: String
  }

  type Gallery {
    first: Image
    second: Image
    third: Image
  }
  type Slug {
    slug: String
    name: String
    image: Image
  }

  type Product {
    id: ID
    slug: String
    image: Image
    category: String
    new: Boolean
    price: Float
    description: String
    features: String
    includes: [ProductFeatures]
    gallery: Gallery
    others: [Slug]
  }

  input ProductInput {
    slug: String
    image: Image
    category: String
    new: Boolean
    price: Float
    description: String
    features: String
    includes: [ProductFeatures]
    gallery: Gallery
    others: [Slug]
  }

  ###########################
  type Billing {
    name: String
    email: String
    phone: String
  }

  type Shipping {
    address: String
    zip: String
    city: String
    country: String
  }

  type Payment {
    method: String
    eMoneyNum: String
    eMoneyPin: String
  }

  type CheckoutDetails {
    billing: Billing
    shipping: Shipping
    payment: Payment
  }

  input CheckoutDetailsInput {
    billing: Billing
    shipping: Shipping
    payment: Payment
  }

  type Cart {
    id: ID
    products: [Product]
    total: Float
    vat: Float
    shipping: Float
    grandTotal: Float
    active: Boolean

    checkout: CheckoutDetails
  }

  input CartInput {
    products: [ProductInput]
    total: Float
    vat: Float
    shipping: Float
    grandTotal: Float
    active: Boolean

    checkout: CheckoutDetailsInput
  }

  type Receipt {
    id: ID
    cartId: String
    total: Float
    # Store as UTC String
    date: String
  }

  input ReceiptInput {
    cartId: String
    total: Float
    # Store as UTC String
    date: String
  }

  ######################
  type Query {
    # Product Related
    products: [Product]
    product(id: ID!): Product

    #     # Cart related
    #     carts: [Cart]
    # cart(id: String!): Cart

    # # Receipt Related
    # receipt(id: String!): Receipt
    # receipts: [Receipt]
  }

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

// FIXME: mutation.?
export default typeDefs;
