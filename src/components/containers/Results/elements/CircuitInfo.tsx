import React from 'react';
import { Alert, Text, View, StyleSheet, TouchableOpacity } from 'react-native';

import moment from 'moment';

import log from '../../../../utils/logger';
import { openURL } from '../../../utils/linking';

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  raceName: {
    color: '#0584FE',
    fontSize: 17,
    fontWeight: '600',
    lineHeight: 22,
  },
  subtitle: {
    marginTop: 2,
    color: 'rgba(0, 0, 0, 0.5)',
    fontSize: 13,
    lineHeight: 18,
  },
  circuitName: {
    marginTop: 16,
    color: '#0584FE',
    fontSize: 13,
    lineHeight: 18,
  },
});

type CircuitInfoProps = {
  circuitName: string;
  circuitUrl: string;
  raceName: string;
  raceUrl: string;
  location: string;
  country: string;
  date: string;
};

const CircuitInfo: React.FC<CircuitInfoProps> = ({
  location,
  raceName,
  country,
  raceUrl,
  circuitName,
  circuitUrl,
  date,
}) => {
  const onRaceLinkPress = React.useCallback(() => {
    openURL(raceUrl).catch((err) => {
      log.error(err);
      Alert.alert('Sorry, race link opening error.');
    });
  }, [raceUrl]);

  const onCircuitLinkPress = React.useCallback(() => {
    openURL(circuitUrl).catch((err) => {
      log.error(err);
      Alert.alert('Sorry, circuit link opening error.');
    });
  }, [circuitUrl]);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onRaceLinkPress}>
        <Text style={styles.raceName}>{raceName}</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={onCircuitLinkPress}>
        <Text style={styles.circuitName}>{circuitName}</Text>
      </TouchableOpacity>

      <View>
        <Text style={styles.subtitle}>{moment(date).format('LL')}</Text>
        <Text style={styles.subtitle}>{location}</Text>
        <Text style={styles.subtitle}>{country}</Text>
      </View>
    </View>
  );
};

export default CircuitInfo;
