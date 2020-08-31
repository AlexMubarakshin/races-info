import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import moment from 'moment';

import { Race } from '../../../../store/models/races';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 16,
  },
  title: {
    fontWeight: '600',
    fontSize: 13,
    lineHeight: 16,
    textTransform: 'uppercase',
  },
  date: {
    marginTop: 2,
    fontWeight: '400',
    fontSize: 13,
    lineHeight: 16,
    textTransform: 'uppercase',
    color: 'rgba(0, 0, 0, 0.35)',
  },
});

type RaceInfoItemProps = {
  race: Race;
  onPress: (race: Race) => void;
};

const RaceInfoItem: React.FC<RaceInfoItemProps> = ({ race, onPress }) => {
  const onPressHandle = React.useCallback(() => {
    onPress(race);
  }, [race, onPress]);

  return (
    <TouchableOpacity onPress={onPressHandle}>
      <View style={styles.container}>
        <Text style={styles.title}>{race.raceName}</Text>
        <Text style={styles.date}>{moment(race.date).format('LL')}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default RaceInfoItem;
