import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';

import { ActionError } from '../../../store/types/Action';
import { Driver, getDriverName } from '../../../store/models/drivers';
import { Race } from '../../../store/models/races';

import DriverInfo from './elements/DriverInfo';
import RaceInfoItem from './elements/RaceInfoItem';
import Separator from '../../shared/Separator';
import { Icons } from '../../../assets';
import EmptyListItem from '../../shared/EmptyListItem';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
});

type DriverViewProps = {
  driver: Driver;
  error?: ActionError;
  isRefreshing: boolean;
  results: Race[];
  onLoadMore: () => void;
  onRacePress: (race: Race) => void;
  onRefresh: () => void;
};

const DriverView: React.FC<DriverViewProps> = ({
  driver,
  error,
  isRefreshing,
  results,
  onLoadMore,
  onRacePress,
  onRefresh,
}) => {
  const isNeedShowEmptyMessage = !isRefreshing && !error;
  return (
    <View style={styles.container}>
      <FlatList
        ListHeaderComponent={() => (
          <DriverInfo
            name={getDriverName(driver)}
            nationality={driver.nationality}
            dateOfBirth={driver.dateOfBirth}
            icon={Icons.helmet}
          />
        )}
        data={results}
        keyExtractor={({ date, raceName, round }) => `${raceName}__${date}__${round}`}
        renderItem={({ item }) => <RaceInfoItem race={item} onPress={onRacePress} />}
        ItemSeparatorComponent={() => <Separator />}
        onRefresh={onRefresh}
        onEndReached={onLoadMore}
        onEndReachedThreshold={0.5}
        refreshing={isRefreshing}
        ListEmptyComponent={isNeedShowEmptyMessage ? EmptyListItem : undefined}
      />
    </View>
  );
};

export default DriverView;
