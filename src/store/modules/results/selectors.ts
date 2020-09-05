import { Store } from '../../types/Store';

import { Race } from '../../models/races';

export const getResultsForDriver = (state: Store, driverId: string): Race[] => {
  return state.results.results.driverId === driverId ? state.results.results.races : [];
};
