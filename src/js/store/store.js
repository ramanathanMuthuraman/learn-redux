import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import allReducers from './../reducers';

const logger = createLogger();
const store = createStore(
  allReducers,
  window.devToolsExtension ? window.devToolsExtension() : f => f,
  applyMiddleware(thunk, logger)
);

export default store;