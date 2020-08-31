export const ROUTES = {
  DRIVERS: 'Drivers',
  DRIVER: 'Driver',
  RESULTS: 'Results',
} as const;

type ROUTES_TYPEOF = typeof ROUTES;
export type ROUTES_KEYS = keyof ROUTES_TYPEOF;
