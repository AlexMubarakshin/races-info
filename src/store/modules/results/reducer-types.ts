import { ActionError } from '../../types/Action';

import { Race } from '../../models/races';

export type ResultsState = {
  error?: ActionError;
  results: { races: Race[]; driverId?: string };
  isResultsLoading: boolean;
  isResultsReloading: boolean;
};
