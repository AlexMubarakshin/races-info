import { Action } from '../../types/Action';
import { DRIVERS_RESULTS_ACTIONS } from './keys';

import { ResultsState } from './reducer-types';
import driversInitialState from './initial-state';
import { RacesResponse, Race } from '../../models/races';

export default function driversReducer(state = driversInitialState, action: Action): ResultsState {
  switch (action.type) {
    case DRIVERS_RESULTS_ACTIONS.LOAD_DRIVER_RESULTS:
      return {
        ...state,
        isResultsLoading: true,
        isResultsReloading: action.payload.isNeedReload,
      };

    case DRIVERS_RESULTS_ACTIONS.LOAD_DRIVER_RESULTS_SUCCESS:
      const racesResponse = action.payload.data as RacesResponse;
      const newResults = racesResponse.MRData.RaceTable.Races;
      const races: Race[] = state.isResultsReloading ? [...newResults] : [...state.results.races, ...newResults];

      return {
        ...state,
        isResultsLoading: false,
        isResultsReloading: false,
        results: {
          races,
          driverId: racesResponse.MRData.RaceTable.driverId,
        },
      };

    case DRIVERS_RESULTS_ACTIONS.LOAD_DRIVER_RESULTS_FAIL:
      return {
        ...state,
        isResultsLoading: false,
        isResultsReloading: false,
      };

    default:
      break;
  }

  return state;
}
