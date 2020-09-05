import { DriversState } from './reducer-types';

const driversInitialState: DriversState = {
  drivers: [],
  isDriversLoading: false,
  isDriversReloading: false,
};

export default driversInitialState;
