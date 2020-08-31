import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';

import { Driver, getDriverName } from '../../../store/models/drivers';
import { Race } from '../../../store/models/races';

import DriverInfo from './elements/DriverInfo';
import RaceInfoItem from './elements/RaceInfoItem';
import Separator from '../../shared/Separator';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
});

type DriverViewProps = {
  driver: Driver;
  results: Race[];
  isRefreshing: boolean;
  onRacePress: (race: Race) => void;
  onRefresh: () => void;
  onLoadMore: () => void;
};

const DriverView: React.FC<DriverViewProps> = ({
  driver,
  results,
  isRefreshing,
  onRacePress,
  onRefresh,
  onLoadMore,
}) => (
  <View style={styles.container}>
    <FlatList
      ListHeaderComponent={() => (
        <DriverInfo name={getDriverName(driver)} nationality={driver.nationality} dateOfBirth={driver.dateOfBirth} />
      )}
      data={results}
      keyExtractor={({ date, raceName, round }) => `${raceName}__${date}__${round}`}
      renderItem={({ item }) => <RaceInfoItem race={item} onPress={onRacePress} />}
      ItemSeparatorComponent={() => <Separator />}
      onRefresh={onRefresh}
      onEndReached={onLoadMore}
      onEndReachedThreshold={0.5}
      refreshing={isRefreshing}
    />
  </View>
);

export default DriverView;
