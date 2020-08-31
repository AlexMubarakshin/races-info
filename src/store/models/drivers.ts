import { ErgastRepositoryResponse } from './repositories';

export type Driver = {
  dateOfBirth: string;
  driverId: string;
  familyName: string;
  givenName: string;
  nationality: string;
  url: string;
};

type DriverTable = {
  Drivers: Driver[];
  driverId: string;
};

export type DriversResponse = ErgastRepositoryResponse<{ DriverTable: DriverTable }>;

export const getDriverName = (driver: Driver): string => `${driver.givenName || ''} ${driver.familyName || ''}`;
