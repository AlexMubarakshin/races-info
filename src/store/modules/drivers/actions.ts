import { DRIVERS_ACTIONS } from './keys';

import API_ENDPOINTS from '../../../config/api';

import { DriversFunc, DriversAction } from './actions-types';

export const getDrivers: DriversFunc = ({ offset, isNeedReload = false }): DriversAction => ({
  type: DRIVERS_ACTIONS.LOAD_DRIVERS,
  payload: {
    isNeedReload,
    request: {
      url: API_ENDPOINTS.DRIVERS_LIST_URL,
      params: { offset },
    },
  },
});
