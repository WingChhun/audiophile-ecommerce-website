// @ts-nocheck
/* eslint-disable */
import Cart from '../../models/Cart';
import Product from '../../models/Product';
import Receipt from '../../models/Receipt';

export default {
  Query: {
    // Cart
    cart: (parent, { id: String }) => {
      return new Promise((resolve, reject) => {
        Cart.findOne({ id }, (err, data) => {
          if (err) {
            console.log('error', err);
            reject(err);
          }

          console.log('data:', data);
          resolve(data);
        });
      });
    },

    carts: (parent, args) => {
      return new Promise((resolve, reject) => {
        Cart.find((err, data) => {
          if (err) {
            console.log('error', err);
            reject(err);
          }

          console.log('data:', data);
          resolve(data);
        });
      });
    },

    // Products
    product: (parent, { id }) =>
      new Promise((resolve, reject) => {
        Product.findOne({ id }, (err, data) => {
          if (err) {
            console.log('error', err);
            reject(err);
          }

          console.log('data:', data);
          resolve({
            data,
          });
        });
      }),

    products: (parent, args) =>
      new Promise((resolve, reject) => {
        Product.find((err, data) => {
          if (err) {
            console.log('error', err);
            reject(err);
          }

          console.log('data:', data);
          resolve(data);
        });
      }),

    // Receipts
    receipt: (parent, { id: String }) =>
      new Promise((resolve, reject) => {
        Receipt.findOne({ id }, (err, data) => {
          if (err) {
            console.log('error', err);
            reject(err);
          }

          console.log('data:', data);
          resolve(data);
        });
      }),

    receipts: (parent, { id: String }) =>
      new Promise((resolve, reject) => {
        Receipt.findOne((err, data) => {
          if (err) {
            console.log('error', err);
            reject(err);
          }

          console.log('data:', data);
          resolve(data);
        });
      }),
  },
  Mutation: {
    // Product
    createProduct: async (parent, args) => {
      const newProduct = new Product({
        ...product,
      });
      await newProduct.save();

      return newProduct;
    },

    updateProduct: (parent, { id: String, payload: Product }) => ({}),
    removeProduct: (parent, { id: String }) => ({}),

    // Cart
    createCart: async (parent, { payload }) => {
      // FIXME: search for existing cart.
      // FIXME: Validation? Use npm - yup to validate schema
      const updatedCart = new Cart({
        ...payload,
      });

      await updatedCart.save();

      return updatedCart;
    },
    removeCart: (parent, { id: String }) => ({}),

    // Receipt
    createReceipt: async (parent, { payload }) => {
      // FIXME: search for existing receipt.
      // FIXME: Validation? Use npm - yup to validate schema
      const updatedReceipt = new Receipt({
        ...payload,
      });

      await updatedReceipt.save();

      return updatedReceipt;
    },
    removeReceipt: (parent, { id: String }) => ({}),
  },
};
/* eslint-enable */
