import { SET_FILTERS } from './actionTypes';

export const initialState = {
  age: '',
  name: '',
  position: '',
};

export default function filtersReducer(state = initialState, action) {
  switch (action.type) {
    case SET_FILTERS:
      return {
        ...action.payload,
      };
    default:
      return state;
  }
}
