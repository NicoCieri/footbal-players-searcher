import { setFilters } from './actions';
import { SET_FILTERS } from './actionTypes';

describe('actions', () => {
  it('should create an action to set filters', () => {
    const payload = 'filter';
    const expectedAction = {
      type: SET_FILTERS,
      payload,
    };
    expect(setFilters(payload)).toEqual(expectedAction);
  });
});
