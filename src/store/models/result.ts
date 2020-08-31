import { Driver } from './drivers';
import { Constructor } from './constructor';

export type Result = {
  Constructor: Constructor;
  Driver: Driver;
  grid: string;
  laps: string;
  number: string;
  points: string;
  position: string;
  positionText: string;
  status: string;
};
