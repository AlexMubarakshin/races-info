import { DRIVERS_ACTIONS } from './keys';

import { DriversFunc, DriversAction, DriverResultsFunc, DriverResultsAction } from './actions-types';

export const getDrivers: DriversFunc = ({ offset, isNeedReload = false }): DriversAction => ({
  type: DRIVERS_ACTIONS.LOAD_DRIVERS,
  payload: {
    isNeedReload,
    request: {
      url: '/f1/drivers.json',
      params: { offset },
    },
  },
});

export const getDriverResults: DriverResultsFunc = ({
  driverId,
  offset,
  isNeedReload = false,
}): DriverResultsAction => ({
  type: DRIVERS_ACTIONS.LOAD_DRIVER_RESULTS,
  payload: {
    isNeedReload,
    request: {
      url: `/f1/drivers/${driverId}/results.json`,
      params: { offset },
    },
  },
});
