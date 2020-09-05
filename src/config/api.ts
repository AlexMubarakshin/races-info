const API_ENDPOINTS = {
  BASE_API_URL: 'http://ergast.com/api/',
  DRIVERS_LIST_URL: '/f1/drivers.json',
  DRIVER_RESULTS_URL: (driverId: string) => `/f1/drivers/${driverId}/results.json`,
} as const;

export default API_ENDPOINTS;
