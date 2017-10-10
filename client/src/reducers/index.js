import { combineReducers } from 'redux';
import authReducer from './authReducer';
import priceReducer from './priceReducer';

export default combineReducers({
  auth: authReducer,
  prices: priceReducer
});
