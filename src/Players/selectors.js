import { createSelector } from 'reselect';
import { getAge } from './model';
import filters from '../Filters';

export const getAllPlayers = ({ players: { players } }) =>
  players.map(player => ({ ...player, age: getAge(player.dateOfBirth) }));

export const getPlayers = createSelector(
  getAllPlayers,
  filters.selectors.getAllFilters,
  (players, filters) => {
    const nameQuery = filters.name.toLowerCase();
    const positionQuery = filters.position.toLowerCase();
    return {
      all: players,
      filtered: players.filter(item => (
        (item.name.toLowerCase().includes(nameQuery)) &&
        (item.position.toLowerCase().includes(positionQuery)) &&
        (filters.age === '' || Number(filters.age) === item.age)
      )),
    };
  },
);
