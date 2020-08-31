import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getDrivers } from '../../../store/modules/drivers/actions';
import { Store } from '../../../store/types/Store';

import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList, ROUTES } from '../../navigation';

import DriversView from './DriversView';
import { Driver } from '../../../store/models/drivers';

type DriversContainerNavigationProp = StackNavigationProp<RootStackParamList, 'Drivers'>;

type DriversContainerProps = {
  navigation: DriversContainerNavigationProp;
};

const DriversContainer: React.FC<DriversContainerProps> = ({ navigation }) => {
  const dispatch = useDispatch();

  const drivers = useSelector((state: Store) => state.drivers.drivers);
  const isDriversLoading = useSelector((state: Store) => state.drivers.isDriversLoading);
  const isDriversRefreshing = useSelector((state: Store) => state.drivers.isDriversReloading);

  React.useEffect(() => {
    dispatch(getDrivers({ offset: 0, isNeedReload: true }));
  }, [dispatch]);

  const onDriverPress = React.useCallback(
    (driver: Driver) => {
      navigation.navigate(ROUTES.DRIVER, { driver });
    },
    [navigation]
  );

  const onLoadMore = React.useCallback(() => {
    if (isDriversLoading) {
      return;
    }

    dispatch(getDrivers({ offset: drivers.length }));
  }, [dispatch, isDriversLoading, drivers.length]);

  const onRefresh = React.useCallback(() => {
    dispatch(getDrivers({ offset: 0, isNeedReload: true }));
  }, [dispatch]);

  return (
    <DriversView
      drivers={drivers}
      isRefreshing={isDriversRefreshing}
      onDriverPress={onDriverPress}
      onRefresh={onRefresh}
      onLoadMore={onLoadMore}
    />
  );
};

export default DriversContainer;
