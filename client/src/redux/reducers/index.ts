import { combineReducers } from 'redux';
import cart from './cart';
import product from './product';
import receipt from './receipt';

const rootReducer = combineReducers({
  cart,
  product,
  receipt,
});

export default rootReducer;
