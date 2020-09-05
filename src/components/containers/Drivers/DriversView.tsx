import React from 'react';
import { FlatList } from 'react-native';

import { ActionError } from '../../../store/types/Action';
import { Driver } from '../../../store/models/drivers';

import DriverListItem from './elements/DriverListItem';
import EmptyListItem from '../../shared/EmptyListItem';

type DriversViewProps = {
  drivers: Driver[];
  error?: ActionError;
  isRefreshing: boolean;
  onDriverPress: (driver: Driver) => void;
  onRefresh: () => void;
  onLoadMore: () => void;
};

const DriversView: React.FC<DriversViewProps> = ({
  drivers,
  error,
  isRefreshing,
  onDriverPress,
  onRefresh,
  onLoadMore,
}) => {
  const isNeedShowEmptyMessage = !isRefreshing && !error;
  return (
    <FlatList
      data={drivers}
      renderItem={({ item: driver }) => (
        <DriverListItem key={driver.driverId} driver={driver} onPress={onDriverPress} />
      )}
      keyExtractor={(item) => `${item.driverId}`}
      onRefresh={onRefresh}
      onEndReached={onLoadMore}
      refreshing={isRefreshing}
      onEndReachedThreshold={0.5}
      ListEmptyComponent={isNeedShowEmptyMessage ? EmptyListItem : undefined}
    />
  );
};

export default DriversView;
