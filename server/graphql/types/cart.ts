import { gql } from 'apollo-server-express';

const CartTypes = gql`
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
    id: ID
    products: [Product]
    total: Float
    vat: Float
    shipping: Float
    grandTotal: Float
    active: Boolean

    checkout: CheckoutDetails
  }

  ###################
  input BillingInput {
    name: String
    email: String
    phone: String
  }

  input ShippingInput {
    address: String
    zip: String
    city: String
    country: String
  }

  input PaymentInput {
    method: String
    eMoneyNum: String
    eMoneyPin: String
  }

  input CheckoutDetailsInput {
    billing: BillingInput
    shipping: ShippingInput
    payment: PaymentInput
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
`;

export default CartTypes;
