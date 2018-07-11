import { getAllPlayers, getPlayers } from './selectors';

describe('selectors', () => {
  it('should return all the players', () => {
    const state = {
      players: {
        players: [
          { name: 'n1', position: 'p1', dateOfBirth: '1980/01/01' },
          { name: 'n2', position: 'p2', dateOfBirth: '1980/01/01' },
          { name: 'n3', position: 'p3', dateOfBirth: '1980/01/01' },
        ],
      },
    };
    const expectedResult = [
      {
        name: 'n1',
        position: 'p1',
        dateOfBirth: '1980/01/01',
        age: 38,
      },
      {
        name: 'n2',
        position: 'p2',
        dateOfBirth: '1980/01/01',
        age: 38,
      },
      {
        name: 'n3',
        position: 'p3',
        dateOfBirth: '1980/01/01',
        age: 38,
      },
    ];
    expect(getAllPlayers(state)).toEqual(expectedResult);
  });

  it('should return the filtered players', () => {
    const state = {
      players: {
        players: [
          { name: 'n1', position: 'p1', dateOfBirth: '1980/01/01' },
          { name: 'n2', position: 'p2', dateOfBirth: '1970/01/01' },
          { name: 'n3', position: 'p3', dateOfBirth: '1990/01/01' },
        ],
      },
      filters: {
        name: 'n2',
        position: '',
        age: 48,
      },
    };
    const expectedResult = {
      all: [
        {
          name: 'n1',
          position: 'p1',
          dateOfBirth: '1980/01/01',
          age: 38,
        },
        {
          name: 'n2',
          position: 'p2',
          dateOfBirth: '1970/01/01',
          age: 48,
        },
        {
          name: 'n3',
          position: 'p3',
          dateOfBirth: '1990/01/01',
          age: 28,
        },
      ],
      filtered: [
        {
          name: 'n2',
          position: 'p2',
          dateOfBirth: '1970/01/01',
          age: 48,
        },
      ],
    };
    expect(getPlayers(state)).toEqual(expectedResult);
  });
});
