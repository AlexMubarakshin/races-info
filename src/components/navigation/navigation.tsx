import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Driver } from '../../store/models/drivers';

import { ROUTES } from './routes';

import { DriversContainer } from '../containers/Drivers';
import { DriverContainer } from '../containers/Driver';

export type RootStackParamList = {
  [ROUTES.DRIVERS]: undefined;
  [ROUTES.DRIVER]: { driver: Driver };
};

const Stack = createStackNavigator<RootStackParamList>();

const Navigation = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName={ROUTES.DRIVERS}>
      <Stack.Screen name={ROUTES.DRIVERS} component={DriversContainer} />
      <Stack.Screen name={ROUTES.DRIVER} component={DriverContainer} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default Navigation;
