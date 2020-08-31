import { Action } from '../../types/Action';
import { DRIVERS_ACTIONS } from './keys';
import { DriversResponse, Driver } from '../../models/drivers';
import { DriversState } from './reducer-types';
import driversInitialState from './initial-state';
import { RacesResponse, Race } from '../../models/races';

export default function driversReducer(state = driversInitialState, action: Action): DriversState {
  switch (action.type) {
    case DRIVERS_ACTIONS.LOAD_DRIVERS:
      return {
        ...state,
        isDriversReloading: action.payload.isNeedReload,
        isDriversLoading: true,
      };

    case DRIVERS_ACTIONS.LOAD_DRIVERS_SUCCESS:
      const newDrivers = (action.payload.data as DriversResponse).MRData.DriverTable.Drivers;
      const drivers: Driver[] = state.isDriversReloading ? [...newDrivers] : [...state.drivers, ...newDrivers];

      return {
        ...state,
        isDriversLoading: false,
        isDriversReloading: false,
        drivers,
      };

    case DRIVERS_ACTIONS.LOAD_DRIVERS_FAIL:
      return {
        ...state,
        isDriversReloading: false,
        isDriversLoading: false,
      };

    case DRIVERS_ACTIONS.LOAD_DRIVER_RESULTS:
      return {
        ...state,
        isDriverRacesLoading: true,
        isDriverRacesReloading: action.payload.isNeedReload,
      };

    case DRIVERS_ACTIONS.LOAD_DRIVER_RESULTS_SUCCESS:
      const racesResponse = action.payload.data as RacesResponse;
      const newResults = racesResponse.MRData.RaceTable.Races;
      const races: Race[] = state.isDriversReloading ? [...newResults] : [...state.driverResults.races, ...newResults];

      return {
        ...state,
        isDriversLoading: false,
        isDriversReloading: false,
        driverResults: {
          races,
          driverId: racesResponse.MRData.RaceTable.driverId,
        },
      };

    case DRIVERS_ACTIONS.LOAD_DRIVER_RESULTS_FAIL:
      return {
        ...state,
        isDriversLoading: false,
        isDriversReloading: false,
      };

    default:
      break;
  }

  return state;
}
