import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({
  slug: {
    type: String,
  },
  image: {
    type: Object,
    default: {
      mobile: '',
      tablet: '',
      desktop: '',
    },
  },
  category: {
    type: String,
  },
  new: {
    type: Boolean,
  },
  price: {
    type: Number,
    default: 0,
  },
  description: {
    type: String,
  },
  features: {
    type: Array,
    default: [],
  },
  includes: {
    type: String,
  },
  gallery: {
    type: String,
  },
  others: {
    type: Array,
    default: [],
  },
});

const Product = mongoose.model('Product', ProductSchema, 'products');

export default Product;
