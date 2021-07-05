import { gql } from 'apollo-server-express';

const ReceiptTypes = gql`
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
`;

export default ReceiptTypes;
