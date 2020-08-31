import { DriversState } from './reducer-types';

const driversInitialState: DriversState = {
  drivers: [],
  isDriversLoading: false,
  isDriversReloading: false,

  driverResults: {
    driverId: undefined,
    races: [],
  },
  isDriverRacesLoading: false,
  isDriverRacesReloading: false,
};

export default driversInitialState;
