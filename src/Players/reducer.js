import { REQUEST, RECEIVE, ERROR, CLEAN_ERRORS } from './actionTypes';

export const initialState = {
  players: [],
  error: '',
  type: '',
};

export default function filtersReducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST:
      return {
        ...state,
        ...action,
      };
    case RECEIVE:
      return {
        ...state,
        ...action,
      };
    case ERROR:
      return {
        ...state,
        ...action,
      };
    case CLEAN_ERRORS:
      return {
        ...state,
        error: '',
      };
    default:
      return state;
  }
}
