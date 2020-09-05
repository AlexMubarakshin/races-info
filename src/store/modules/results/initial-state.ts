import { ResultsState } from './reducer-types';

const resultsInitialState: ResultsState = {
  results: {
    driverId: undefined,
    races: [],
  },
  isResultsLoading: false,
  isResultsReloading: false,
};

export default resultsInitialState;
