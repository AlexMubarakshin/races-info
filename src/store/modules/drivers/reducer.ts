import { Action } from '../../types/Action';
import { DRIVERS_ACTIONS } from './keys';
import { DriversResponse, Driver } from '../../models/drivers';
import { DriversState } from './reducer-types';
import driversInitialState from './initial-state';

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

    default:
      break;
  }

  return state;
}
