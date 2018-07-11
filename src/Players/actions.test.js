import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import thunkMiddleware from 'redux-thunk';
import configureStore from 'redux-mock-store';
import * as actionTypes from './actionTypes';
import * as actions from './actions';
import { URL } from './constants';

const axiosMock = new MockAdapter(axios);

const players = [
  { name: 'player 1' },
  { name: 'player 2' },
  { name: 'player 3' },
  { name: 'player 4' },
];

describe('actions', () => {
  const store = configureStore([thunkMiddleware])();

  beforeEach(() => {
    store.clearActions();
    axiosMock.reset();
  });

  it('should create an action to request players', () => {
    const expectedAction = {
      type: actionTypes.REQUEST,
    };
    expect(actions.requestPlayers).toEqual(expectedAction);
  });

  it('should create an action to receive players', () => {
    const expectedAction = {
      type: actionTypes.RECEIVE,
      players,
    };
    expect(actions.receivePlayers(players)).toEqual(expectedAction);
  });

  it('should create an action for error players', () => {
    const expectedAction = {
      type: actionTypes.ERROR,
      error: 'Error',
    };
    expect(actions.errorPlayers('Error')).toEqual(expectedAction);
  });

  it('should create an action to clean players errors', () => {
    const expectedAction = {
      type: actionTypes.CLEAN_ERRORS,
    };
    expect(actions.cleanErrorPlayers).toEqual(expectedAction);
  });

  it('should fetch players', () => {
    axiosMock
      .onGet(URL)
      .reply(200, players);

    return store.dispatch(actions.fetchPlayers()).then(() => {
      const expectedActions = [
        actions.requestPlayers,
        actions.cleanErrorPlayers,
        actions.receivePlayers(players),
      ];

      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('should handle error if fetch players fails', () => {
    axiosMock
      .onGet(URL)
      .reply(400);

    return store.dispatch(actions.fetchPlayers()).then(() => {
      const expectedActions = [
        actions.requestPlayers,
        actions.cleanErrorPlayers,
        actions.errorPlayers('error'),
      ];

      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
