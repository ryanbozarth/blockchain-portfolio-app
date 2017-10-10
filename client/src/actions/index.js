import axios from 'axios';
import {
  FETCH_USER,
  FETCH_PRICES,
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

export function fetchPrices() {
  const request = axios.get(`${ROOT_URL}`);

  return dispatch => {
    request.then(data => {
      dispatch({ type: FETCH_PRICES, payload: data });
    });
  };
}

// export const fetchPrices = () => async dispatch => {
//   const res = await axios.get(`${ROOT_URL}`);
//
//   dispatch({ type: FETCH_PRICES, payload: res.data });
// };

export function initialInvestment(data) {
  return dispatch => dispatch({ type: INITIAL_INVESTMENT, payload: data });
}

export function amountEarned(data) {
  return dispatch => dispatch({ type: AMOUNT_EARNED, payload: data });
}

export function roi(data) {
  return dispatch => dispatch({ type: ROI, payload: data });
}

export function currentValue(data) {
  return dispatch => dispatch({ type: CURRENT_VALUE, payload: data });
}

// post or patch to update certain fields in a database object
export const submitForm = (values, history) => async dispatch => {
  const res = await axios.post('./api/addassets', values);

  history.push('/dashboard');
  dispatch({ type: FETCH_USER, payload: res.data });
};
