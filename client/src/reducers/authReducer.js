import { FETCH_USER, SUBMIT_FORM } from '../actions/types';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_USER:
      return action.payload || false;
    case SUBMIT_FORM:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}
