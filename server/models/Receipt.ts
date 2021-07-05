import mongoose from 'mongoose';

const ReceiptSchema = new mongoose.Schema({
  cartId: {
    type: String,
    ref: 'Cart',
  },
  total: {
    type: Number,
    default: 0,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

const Receipt = mongoose.model('Receipt', ReceiptSchema, 'receipts');

export default Receipt;
