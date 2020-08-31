import { Driver } from '../../models/drivers';
import { Race } from '../../models/races';

export type DriversState = {
  drivers: Driver[];
  isDriversLoading: boolean;
  isDriversReloading: boolean;

  driverResults: { races: Race[]; driverId?: string };
  isDriverRacesLoading: boolean;
  isDriverRacesReloading: boolean;
};
