import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';

import { Race } from '../../../store/models/races';
import CircuitInfo from './elements/CircuitInfo';
import ResultItem from './elements/ResultItem';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
});

type ResultsViewProps = {
  race: Race;
};

const ResultsView: React.FC<ResultsViewProps> = ({ race }) => {
  return (
    <View style={styles.container}>
      <FlatList
        ListHeaderComponent={() => (
          <CircuitInfo
            circuitName={race.Circuit.circuitName}
            circuitUrl={race.Circuit.url}
            raceUrl={race.url}
            raceName={race.raceName}
            location={race.Circuit.Location.locality}
            country={race.Circuit.Location.country}
            date={race.date}
          />
        )}
        data={race.Results}
        keyExtractor={({ Driver, grid, laps }) => `${Driver.driverId}_${grid}_${laps}`}
        renderItem={({ item }) => <ResultItem result={item} />}
      />
    </View>
  );
};

export default ResultsView;
