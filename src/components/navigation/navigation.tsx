import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Driver } from '../../store/models/drivers';
import { Race } from '../../store/models/races';

import { ROUTES } from './routes';

import { DriversContainer } from '../containers/Drivers';
import { DriverContainer } from '../containers/Driver';
import { ResultsContainer } from '../containers/Results';

export type RootStackParamList = {
  [ROUTES.DRIVERS]: undefined;
  [ROUTES.DRIVER]: { driver: Driver };
  [ROUTES.RESULTS]: { race: Race };
};

const Stack = createStackNavigator<RootStackParamList>();

const Navigation = () => (
  <NavigationContainer>
    <Stack.Navigator
      initialRouteName={ROUTES.DRIVERS}
      screenOptions={{
        headerStyle: {
          backgroundColor: '#fff',
          elevation: 0,
          shadowOpacity: 0,
        },
        headerTintColor: '#000',
      }}
    >
      <Stack.Screen name={ROUTES.DRIVERS} component={DriversContainer} />
      <Stack.Screen name={ROUTES.DRIVER} component={DriverContainer} />
      <Stack.Screen name={ROUTES.RESULTS} component={ResultsContainer} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default Navigation;
