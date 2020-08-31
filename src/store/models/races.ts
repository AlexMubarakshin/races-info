import { ErgastRepositoryResponse } from './repositories';
import { Circuit } from './circuit';
import { Result } from './result';

export type Race = {
  Circuit: Circuit;
  Results: Result[];
  date: string;
  raceName: string;
  round: string;
  season: string;
  url: string;
};

type RaceTable = {
  Races: Race[];
  driverId: string;
};

export type RacesResponse = ErgastRepositoryResponse<{ RaceTable: RaceTable }>;
