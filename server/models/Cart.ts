import mongoose from 'mongoose';

const CartSchema = new mongoose.Schema({
  id: {
    type: String,
  },
  products: {
    type: Array,
    default: [],
  },
  total: {
    type: Number,
    default: 0,
  },
  vat: {
    type: Number,
    default: 0,
  },
  shipping: {
    type: Number,
    default: 0,
  },
  grandTotal: {
    type: Number,
    default: 0,
  },
  active: {
    type: Boolean,
    default: true,
  },
  checkout: {
    type: Object,
    default: {
      billing: {
        name: '',
        email: '',
        phone: '',
      },
      shipping: { address: '', zip: '', city: '', country: '' },
      payment: { method: '', eMoneyNum: '', eMoneyPin: '' },
    },
  },
});

const Cart = mongoose.model('Cart', CartSchema, 'carts');

export default Cart;
