import { AxiosAction } from '../../types/Action';
import { DRIVERS_RESULTS_ACTIONS } from './keys';

export type DriverResultsAction = AxiosAction<
  typeof DRIVERS_RESULTS_ACTIONS.LOAD_DRIVER_RESULTS,
  { isNeedReload: boolean }
>;
export type DriverResultsFunc<R = DriverResultsAction> = (params: {
  driverId: string;
  offset: number;
  isNeedReload?: boolean;
}) => R;
