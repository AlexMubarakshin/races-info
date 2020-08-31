import { AxiosAction } from '../../types/Action';
import { DRIVERS_ACTIONS } from './keys';

export type DriversAction = AxiosAction<typeof DRIVERS_ACTIONS.LOAD_DRIVERS, { isNeedReload: boolean }>;
export type DriversFunc<R = DriversAction> = (params: { offset: number; isNeedReload?: boolean }) => R;

export type DriverResultsAction = AxiosAction<typeof DRIVERS_ACTIONS.LOAD_DRIVER_RESULTS, { isNeedReload: boolean }>;
export type DriverResultsFunc<R = DriverResultsAction> = (params: {
  driverId: string;
  offset: number;
  isNeedReload?: boolean;
}) => R;
