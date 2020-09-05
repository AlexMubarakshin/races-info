import { DRIVERS_RESULTS_ACTIONS } from './keys';
import { DriverResultsFunc, DriverResultsAction } from './actions-types';
import API_ENDPOINTS from '../../../config/api';

export const getDriverResults: DriverResultsFunc = ({
  driverId,
  offset,
  isNeedReload = false,
}): DriverResultsAction => ({
  type: DRIVERS_RESULTS_ACTIONS.LOAD_DRIVER_RESULTS,
  payload: {
    isNeedReload,
    request: {
      url: API_ENDPOINTS.DRIVER_RESULTS_URL(driverId),
      params: { offset },
    },
  },
});
