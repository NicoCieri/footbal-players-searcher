import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import PlayersTableContainer from './PlayersTableContainer';

jest.mock('../actions', () => ({
  fetchPlayers: jest.fn().mockImplementation(() => ({
    type: 'players/FETCH_PLAYERS',
  })),
}));

const players = [
  {
    name: 'n1',
    position: 'p1',
    nationality: 'n1',
    dateOfBirth: '1980/01/01',
  },
  {
    name: 'n2',
    position: 'p2',
    nationality: 'n2',
    dateOfBirth: '1980/01/01',
  },
  {
    name: 'n3',
    position: 'p3',
    nationality: 'n3',
    dateOfBirth: '1980/01/01',
  },
];

const testState = {
  filters: {
    name: 'n1',
    position: '',
    age: '',
  },
  players: {
    players,
  },
};

describe('PlayersTableContainer', () => {
  const mockStore = configureStore()(testState);
  const subject = shallow(<PlayersTableContainer store={mockStore} />);

  beforeEach(() => {
    mockStore.clearActions();
  });

  it('should map state players to props', () => {
    const all = players.map(p => ({ ...p, age: 38 }));
    expect(subject.props().players).toEqual({
      all,
      filtered: [
        {
          name: 'n1',
          position: 'p1',
          nationality: 'n1',
          dateOfBirth: '1980/01/01',
          age: 38,
        },
      ],
    });
  });

  it('should map fetchPlayers action creator to props', () => {
    subject.props().fetchPlayers();
    expect(mockStore.getActions()).toEqual([{ type: 'players/FETCH_PLAYERS' }]);
  });
});
