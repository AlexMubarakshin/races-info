import { Reducer, combineReducers } from 'redux';

import { Store } from './types/Store';

import driversReducer from './modules/drivers/reducer';
import resultsReducer from './modules/results/reducer';

export default function createReducers(): Reducer<Store, any> {
  const reducers = {
    drivers: driversReducer,
    results: resultsReducer,
  };

  return combineReducers({ ...reducers });
}
