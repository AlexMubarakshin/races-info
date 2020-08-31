import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import moment from 'moment';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingVertical: 16,
  },
  icon: {
    borderRadius: 50,
    borderColor: 'rgba(0, 0, 0, 0.15)',
    borderWidth: 1,
    height: 100,
    width: 100,
  },
  title: {
    color: '#000',
    fontSize: 24,
    fontWeight: 'bold',
    lineHeight: 29,
    marginTop: 2,
  },
  subtitle: {
    color: 'rgba(0, 0, 0, 0.5)',
    fontSize: 15,
    lineHeight: 18,
    marginTop: 2,
  },
});

type DriverInfoProps = {
  name: string;
  nationality: string;
  dateOfBirth: string;
};

const DriverInfo: React.FC<DriverInfoProps> = ({ name, nationality, dateOfBirth }) => (
  <View style={styles.container}>
    <View style={styles.icon} />
    <Text style={styles.title}>{name}</Text>
    <Text style={styles.subtitle}>{nationality}</Text>
    <Text style={styles.subtitle}>{moment(dateOfBirth).format('LL')}</Text>
  </View>
);

export default React.memo(DriverInfo);
