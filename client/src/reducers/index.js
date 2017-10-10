import { combineReducers } from 'redux';
import authReducer from './authReducer';
import priceReducer from './priceReducer';
import { reducer as reduxForm } from 'redux-form';

export default combineReducers({
  auth: authReducer,
  prices: priceReducer,
  form: reduxForm
});
