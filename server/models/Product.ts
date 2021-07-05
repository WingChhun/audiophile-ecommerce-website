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
    type: String,
    default: '',
  },
  includes: {
    type: Array,
    default: [],
  },
  gallery: {
    type: Object,
    default: {
      first: { mobile: '', tablet: '', desktop: '' },
      second: { mobile: '', tablet: '', desktop: '' },
      third: { mobile: '', tablet: '', desktop: '' },
    },
  },
  others: {
    type: Array,
    default: [],
  },
});

const Product = mongoose.model('Product', ProductSchema, 'products');

export default Product;
