import { ActionError } from '../../types/Action';

import { Driver } from '../../models/drivers';

export type DriversState = {
  error?: ActionError;
  drivers: Driver[];
  isDriversLoading: boolean;
  isDriversReloading: boolean;
};
