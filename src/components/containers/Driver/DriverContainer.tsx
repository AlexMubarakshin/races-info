import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';

import { Store } from '../../../store/types/Store';

import { getResultsForDriver } from '../../../store/modules/drivers/selectors';
import { RootStackParamList } from '../../navigation';

import DriverView from './DriverView';
import { getDriverResults } from '../../../store/modules/drivers/actions';

type DriveerScreenRouteProp = RouteProp<RootStackParamList, 'Driver'>;
type DriverScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Driver'>;

type DriverContainerProps = {
  route: DriveerScreenRouteProp;
  navigation: DriverScreenNavigationProp;
};

const DriverContainer: React.FC<DriverContainerProps> = ({
  route: {
    params: { driver },
  },
}) => {
  const dispatch = useDispatch();

  const results = useSelector((state: Store) => getResultsForDriver(state, driver.driverId));

  React.useEffect(() => {
    dispatch(getDriverResults({ driverId: driver.driverId, offset: 0, isNeedReload: true }));
  }, []);

  return <DriverView driver={driver} results={results} />;
};

export default DriverContainer;
