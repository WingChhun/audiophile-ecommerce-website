import { gql } from 'apollo-server-express';
// Define shape of queries representing our data.
const types = gql`
  type Image {
    mobile: String
    tablet: String
    desktop: String
  }

  type ProductFeatures {
    quantity: Int
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
    id: String
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

  type Cart {
    id: String
    products: [Product]
    total: Float
    vat: Float
    shipping: Float
    grandTotal: Float
    active: Boolean

    checkout: CheckoutDetails
  }
  ###########################
  type Receipt {
    id: String
    cartId: String
    total: Float
    # Store as UTC String
    date: String
  }

  type Query {
    # Cart related
    cart: Cart
    carts: [Cart]
    getCart(id: String!): Cart

    # Product Related
    product: Product
    products: [Product]

    # Receipt Related
    receipt: Receipt
    getReceipt(id: String!): Receipt
    receipts: [Receipt]
  }
  # TODO Mutation

  #type Mutation {
  # Product
  # getProduct(id:String!):Product
  # createProduct():Product
  # removeProduct():Product
  # updateProduct():Product

  # Cart
  # createCart():Cart
  # getCart(id:String!):Cart
  # updateCart():Cart
  # removeCart():Cart

  # Receipt
  # createReceipt():Receipt
  # getReceipt(id:String!):Receipt
  # removeReceipt():Receipt
  #}
`;

// FIXME: mutation.?
export default types;
