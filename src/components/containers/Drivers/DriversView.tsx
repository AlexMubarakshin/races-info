import React from 'react';
import { FlatList } from 'react-native';

import { Driver } from '../../../store/models/drivers';

import DriverListItem from './elements/DriverListItem';

type DriversViewProps = {
  drivers: Driver[];
  isRefreshing: boolean;
  onDriverPress: (driver: Driver) => void;
  onRefresh: () => void;
  onLoadMore: () => void;
};

const DriversView: React.FC<DriversViewProps> = ({ drivers, isRefreshing, onDriverPress, onRefresh, onLoadMore }) => (
  <FlatList
    data={drivers}
    renderItem={({ item: driver }) => <DriverListItem key={driver.driverId} driver={driver} onPress={onDriverPress} />}
    keyExtractor={(item) => `${item.driverId}`}
    onRefresh={onRefresh}
    onEndReached={onLoadMore}
    onEndReachedThreshold={0.5}
    refreshing={isRefreshing}
  />
);

export default DriversView;
