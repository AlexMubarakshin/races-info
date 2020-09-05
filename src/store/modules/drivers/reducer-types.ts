import { Driver } from '../../models/drivers';

export type DriversState = {
  drivers: Driver[];
  isDriversLoading: boolean;
  isDriversReloading: boolean;
};
