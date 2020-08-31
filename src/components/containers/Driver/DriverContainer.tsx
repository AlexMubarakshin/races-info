import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';

import { Store } from '../../../store/types/Store';

import { getResultsForDriver } from '../../../store/modules/drivers/selectors';
import { RootStackParamList, ROUTES } from '../../navigation';

import DriverView from './DriverView';
import { getDriverResults } from '../../../store/modules/drivers/actions';
import { Race } from '../../../store/models/races';

type DriverContainerRouteProp = RouteProp<RootStackParamList, 'Driver'>;
type DriverContainerNavigationProp = StackNavigationProp<RootStackParamList, 'Driver'>;

type DriverContainerProps = {
  route: DriverContainerRouteProp;
  navigation: DriverContainerNavigationProp;
};

const DriverContainer: React.FC<DriverContainerProps> = ({
  route: {
    params: { driver },
  },
  navigation,
}) => {
  const dispatch = useDispatch();

  const results = useSelector((state: Store) => getResultsForDriver(state, driver.driverId));
  const isResultsLoading = useSelector((state: Store) => state.drivers.isDriverRacesLoading);
  const isResultsRefreshing = useSelector((state: Store) => state.drivers.isDriverRacesReloading);

  React.useEffect(() => {
    dispatch(getDriverResults({ driverId: driver.driverId, offset: 0, isNeedReload: true }));
  }, [dispatch, driver]);

  const onRacePress = React.useCallback(
    (race: Race) => {
      navigation.navigate(ROUTES.RESULTS, { race });
    },
    [navigation]
  );

  const onLoadMore = React.useCallback(() => {
    if (isResultsLoading) {
      return;
    }

    dispatch(getDriverResults({ driverId: driver.driverId, offset: results.length }));
  }, [dispatch, isResultsLoading, driver.driverId, results.length]);

  const onRefresh = React.useCallback(() => {
    dispatch(getDriverResults({ driverId: driver.driverId, offset: 0, isNeedReload: true }));
  }, [dispatch, driver.driverId]);

  return (
    <DriverView
      isRefreshing={isResultsRefreshing}
      driver={driver}
      results={results}
      onRacePress={onRacePress}
      onRefresh={onRefresh}
      onLoadMore={onLoadMore}
    />
  );
};

export default DriverContainer;
