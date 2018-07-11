import reducer, { initialState } from './reducer';
import * as actionTypes from './actionTypes';

const emptyState = {
  players: [],
  error: '',
  type: '',
};

describe('Filters reducer', () => {
  it('returns an empty array for the initial state', () => {
    let notDefined;
    const returnedState = reducer(notDefined, {});

    expect(returnedState).toEqual(initialState);
  });

  it('should handle REQUEST', () => {
    const currentState = emptyState;
    const expectedState = {
      ...currentState,
      type: actionTypes.REQUEST,
    };
    const action = {
      type: actionTypes.REQUEST,
    };
    const result = reducer(currentState, action);
    expect(result).toEqual(expectedState);
  });

  it('should handle RECEIVE', () => {
    const currentState = {
      type: actionTypes.REQUEST,
      players: [],
    };
    const expectedState = {
      ...currentState,
      type: actionTypes.RECEIVE,
      players: [{ name: 'n1' }],
    };
    const action = {
      type: actionTypes.RECEIVE,
      players: [{ name: 'n1' }],
    };
    const result = reducer(currentState, action);
    expect(result).toEqual(expectedState);
  });

  it('should handle ERROR', () => {
    const currentState = {
      type: actionTypes.REQUEST,
      players: [],
      error: '',
    };
    const expectedState = {
      ...currentState,
      type: actionTypes.ERROR,
      players: [],
      error: 'Error',
    };
    const action = {
      type: actionTypes.ERROR,
      error: 'Error',
    };
    const result = reducer(currentState, action);
    expect(result).toEqual(expectedState);
  });

  it('should handle CLEAN_ERRORS', () => {
    const currentState = {
      error: 'Error',
    };
    const expectedState = {
      ...currentState,
      error: '',
    };
    const action = {
      type: actionTypes.CLEAN_ERRORS,
    };
    const result = reducer(currentState, action);
    expect(result).toEqual(expectedState);
  });
});
