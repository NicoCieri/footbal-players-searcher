import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleWare from 'redux-thunk';
import reducers from './rootReducer';
import filters from './Filters';
import players from './Players';
import './App.css';

const { Filters } = filters;
const { PlayersTable } = players;

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = [thunkMiddleWare];

const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(...middlewares)),
);

const App = () => (
  <Provider store={store}>
    <div className="App container-fluid pt-3">
      <h1 className="h2">Football Player Finder</h1>
      <Filters />
      <PlayersTable />
    </div>
  </Provider>
);

export default App;
