import { Reducer, combineReducers } from 'redux';

import driversReducer from './modules/drivers/reducer';
import { Store } from './types/Store';

export default function createReducers(): Reducer<Store, any> {
  const reducers = {
    drivers: driversReducer,
  };

  return combineReducers({ ...reducers });
}
