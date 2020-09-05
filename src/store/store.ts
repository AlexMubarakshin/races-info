import { createStore, applyMiddleware, compose } from 'redux';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';

import API_ENDPOINTS from '../config/api';

import createReducers from './reducer';

export default function configureStore() {
  const client = axios.create({
    baseURL: API_ENDPOINTS.BASE_API_URL,
    responseType: 'json',
  });

  // @ts-ignore
  const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

  const reducers = createReducers();

  const store = createStore(reducers, composeEnhancers(applyMiddleware(axiosMiddleware(client))));

  return store;
}
