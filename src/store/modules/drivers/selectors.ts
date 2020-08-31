import { Store } from '../../types/Store';

import { Race } from '../../models/races';

export const getResultsForDriver = (state: Store, driverId: string): Race[] => {
  return state.drivers.driverResults.driverId === driverId ? state.drivers.driverResults.races : [];
};
