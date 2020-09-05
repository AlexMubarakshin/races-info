import { DriversState } from '../modules/drivers/reducer-types';
import { ResultsState } from '../modules/results/reducer-types';

export type Store = {
  drivers: DriversState;
  results: ResultsState;
};
