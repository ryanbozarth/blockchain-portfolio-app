import axios from 'axios';
import {
  FETCH_USER,
  FETCH_PRICES,
  SUBMIT_FORM,
  CURRENT_VALUE,
  INITIAL_INVESTMENT,
  AMOUNT_EARNED,
  ROI,
  ROOT_URL
} from './types';

export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user');

  dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchPrices = () => {
  const request = axios.get(`${ROOT_URL}`);

  return dispatch => {
    request.then(data => {
      dispatch({ type: FETCH_PRICES, payload: data });
    });
  };
};

// export const fetchPrices = () => async dispatch => {
//   const res = await axios.get(`${ROOT_URL}`);
//
//   dispatch({ type: FETCH_PRICES, payload: res.data });
// };

export const initialInvestment = data => {
  return dispatch => dispatch({ type: INITIAL_INVESTMENT, payload: data });
};

export const amountEarned = data => {
  return dispatch => dispatch({ type: AMOUNT_EARNED, payload: data });
};

export const roi = data => {
  return dispatch => dispatch({ type: ROI, payload: data });
};

export const currentValue = data => {
  return dispatch => dispatch({ type: CURRENT_VALUE, payload: data });
};

// post or patch to update certain fields in a database object
export const submitForm = (values, history, auth_id) => async dispatch => {
  values.auth_id = auth_id;
  const res = await axios.post('/api/addassets', values);

  history.push('/dashboard');
  dispatch({ type: SUBMIT_FORM, payload: res.data });
};
