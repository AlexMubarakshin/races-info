import { Series } from './series';

export type ErgastRepositoryResponse<T> = {
  MRData: T;
  limit: number;
  offset: number;
  series: keyof typeof Series;
  total: number;
  url: string;
  xmlns: string;
};
