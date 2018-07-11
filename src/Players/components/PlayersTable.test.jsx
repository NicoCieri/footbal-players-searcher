import React from 'react';
import { shallow } from 'enzyme';
import PlayersTable from './PlayersTable';

const fetchPlayers = jest.fn();

const players = {
  filtered: [
    {
      name: 'n1',
      position: 'p1',
      nationality: 'n1',
      age: '20',
    },
    {
      name: 'n2',
      position: 'p2',
      nationality: 'n2',
      age: '25',
    },
    {
      name: 'n3',
      position: 'p3',
      nationality: 'n3',
      age: '30',
    },
  ],
};

const props = {
  players,
  fetchPlayers,
};

describe('DayPartReport', () => {
  const subject = shallow(<PlayersTable {...props} />);

  afterEach(() => {
    fetchPlayers.mockClear();
  });

  it('should receive props', () => {
    expect(subject.instance().props).toEqual(props);
  });

  it('should call fetchPlayers when component did mount', () => {
    const { mock: { calls } } = fetchPlayers;
    subject.instance().componentDidMount();
    expect(calls.length).toBe(1);
  });
});
