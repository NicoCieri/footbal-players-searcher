import { combineReducers } from 'redux';
import filters from './Filters';
import players from './Players';

export default combineReducers({
  [filters.constants.NAME]: filters.reducer,
  [players.constants.NAME]: players.reducer,
});
