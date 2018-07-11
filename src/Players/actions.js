import axios from 'axios';
import { REQUEST, RECEIVE, ERROR, CLEAN_ERRORS } from './actionTypes';
import { URL } from './constants';

export const requestPlayers = {
  type: REQUEST,
};

export const receivePlayers = players => ({
  type: RECEIVE,
  players,
});

export const errorPlayers = error => ({
  type: ERROR,
  error,
});
export const cleanErrorPlayers = {
  type: CLEAN_ERRORS,
};

export const fetchPlayers = () => (dispatch) => {
  dispatch(requestPlayers);
  dispatch(cleanErrorPlayers);

  return axios.get(URL)
    .then(({ data }) => dispatch(receivePlayers(data)))
    .catch(() => dispatch(errorPlayers('error')));
};
