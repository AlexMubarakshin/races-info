import { Race } from '../../models/races';

export type ResultsState = {
  results: { races: Race[]; driverId?: string };
  isResultsLoading: boolean;
  isResultsReloading: boolean;
};
