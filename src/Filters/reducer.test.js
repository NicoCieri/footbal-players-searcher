import reducer, { initialState } from './reducer';
import { SET_FILTERS } from './actionTypes';

describe('Filters reducer', () => {
  it('returns initial state', () => {
    let notDefined;
    const returnedState = reducer(notDefined, {});

    expect(returnedState).toEqual(initialState);
  });

  it('should handle SET_FILTERS', () => {
    const currentState = {
      filter: '',
    };
    const expectedState = {
      filter: 'set',
    };
    const action = {
      type: SET_FILTERS,
      payload: {
        filter: 'set',
      },
    };
    const result = reducer(currentState, action);
    expect(result).toEqual(expectedState);
  });
});
