// @ts-nocheck
/* eslint-disable */
import { Mongoose } from 'mongoose';
import { clearTimeout } from 'timers';
import Cart from '../../models/Cart';
import Product from '../../models/Product';
import Receipt from '../../models/Receipt';

const product = {
  id: 6,
  slug: 'zx9-speaker',
  name: 'ZX9 Speaker',
  image: {
    mobile: './assets/product-zx9-speaker/mobile/image-product.jpg',
    tablet: './assets/product-zx9-speaker/tablet/image-product.jpg',
    desktop: './assets/product-zx9-speaker/desktop/image-product.jpg',
  },
  category: 'speakers',
  new: true,
  price: 4500,
  description:
    'Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.',
  features:
    'Connect via Bluetooth or nearly any wired source. This speaker features optical, digital coaxial, USB Type-B, stereo RCA, and stereo XLR inputs, allowing you to have up to five wired source devices connected for easy switching. Improved bluetooth technology offers near lossless audio quality at up to 328ft (100m).\n\nDiscover clear, more natural sounding highs than the competition with ZX9’s signature planar diaphragm tweeter. Equally important is its powerful room-shaking bass courtesy of a 6.5” aluminum alloy bass unit. You’ll be able to enjoy equal sound quality whether in a large room or small den. Furthermore, you will experience new sensations from old songs since it can respond to even the subtle waveforms.',
  includes: [
    {
      quantity: 2,
      item: 'Speaker unit',
    },
    {
      quantity: 2,
      item: 'Speaker cloth panel',
    },
    {
      quantity: 1,
      item: 'User manual',
    },
    {
      quantity: 1,
      item: '3.5mm 10m audio cable',
    },
    {
      quantity: 1,
      item: '10m optical cable',
    },
  ],
  gallery: {
    first: {
      mobile: './assets/product-zx9-speaker/mobile/image-gallery-1.jpg',
      tablet: './assets/product-zx9-speaker/tablet/image-gallery-1.jpg',
      desktop: './assets/product-zx9-speaker/desktop/image-gallery-1.jpg',
    },
    second: {
      mobile: './assets/product-zx9-speaker/mobile/image-gallery-2.jpg',
      tablet: './assets/product-zx9-speaker/tablet/image-gallery-2.jpg',
      desktop: './assets/product-zx9-speaker/desktop/image-gallery-2.jpg',
    },
    third: {
      mobile: './assets/product-zx9-speaker/mobile/image-gallery-3.jpg',
      tablet: './assets/product-zx9-speaker/tablet/image-gallery-3.jpg',
      desktop: './assets/product-zx9-speaker/desktop/image-gallery-3.jpg',
    },
  },
  others: [
    {
      slug: 'zx7-speaker',
      name: 'ZX7 Speaker',
      image: {
        mobile: './assets/shared/mobile/image-zx7-speaker.jpg',
        tablet: './assets/shared/tablet/image-zx7-speaker.jpg',
        desktop: './assets/shared/desktop/image-zx7-speaker.jpg',
      },
    },
    {
      slug: 'xx99-mark-one-headphones',
      name: 'XX99 Mark I',
      image: {
        mobile: './assets/shared/mobile/image-xx99-mark-one-headphones.jpg',
        tablet: './assets/shared/tablet/image-xx99-mark-one-headphones.jpg',
        desktop: './assets/shared/desktop/image-xx99-mark-one-headphones.jpg',
      },
    },
    {
      slug: 'xx59-headphones',
      name: 'XX59',
      image: {
        mobile: './assets/shared/mobile/image-xx59-headphones.jpg',
        tablet: './assets/shared/tablet/image-xx59-headphones.jpg',
        desktop: './assets/shared/desktop/image-xx59-headphones.jpg',
      },
    },
  ],
};

export default {
  Query: {
    // Cart
    // carts: (parent, args) => {
    //   return new Promise((resolve, reject) => {
    //     Cart.find((err, data) => {
    //       if (err) {
    //         console.log('error', err);
    //         reject(err);
    //       }

    //       console.log('data:', data);
    //       resolve(data);
    //     });
    //   });
    // },
    // getCart: (parent, { id: String }) => {
    //   return new Promise((resolve, reject) => {
    //     Cart.findOne({ id }, (err, data) => {
    //       if (err) {
    //         console.log('error', err);
    //         reject(err);
    //       }

    //       console.log('data:', data);
    //       resolve(data);
    //     });
    //   });
    // },

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
    // receipts: (parent, { id: String }) =>
    //   new Promise((resolve, reject) => {
    //     Receipt.find((err, data) => {
    //       if (err) {
    //         console.log('error', err);
    //         reject(err);
    //       }

    //       console.log('data:', data);
    //       resolve(data);
    //     });
    //   }),
    // getReceipt: (parent, { id: String }) =>
    //   new Promise((resolve, reject) => {
    //     Receipt.findOne({ id }, (err, data) => {
    //       if (err) {
    //         console.log('error', err);
    //         reject(err);
    //       }

    //       console.log('data:', data);
    //       resolve(data);
    //     });
    //   }),
  },
  Mutation: {
    // Product
    createProduct: async (parent, args) => {
      const newProduct = new Product({
        ...product,
      });
      await newProduct.save();

      // const data = JSON.parse(json);
      // console.log('data:', data);

      return newProduct;
    },

    updateProduct: (parent, { id: String, payload: Product }) => ({}),
    removeProduct: (parent, { id: String }) => ({}),
    // Cart
    createCart: (parent, { payload }) => ({}),
    removeCart: (parent, { id: String }) => ({}),
    // Receipt
    createReceipt: (parent, { payload }) => ({}),
    removeReceipt: (parent, { id: String }) => ({}),
  },
};
/* eslint-enable */
