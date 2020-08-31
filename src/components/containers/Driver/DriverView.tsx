import React from 'react';
import { View, StyleSheet } from 'react-native';

import { Driver, getDriverName } from '../../../store/models/drivers';
import { Race } from '../../../store/models/races';

import DriverInfo from './elements/DriverInfo';
import DriverRaces from './elements/DriverRaces';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
});

type DriverViewProps = {
  driver: Driver;
  results: Race[];
};

const DriverView: React.FC<DriverViewProps> = ({ driver, results }) => {
  return (
    <View style={styles.container}>
      <DriverInfo name={getDriverName(driver)} nationality={driver.nationality} dateOfBirth={driver.dateOfBirth} />

      <DriverRaces results={results} />
    </View>
  );
};

export default DriverView;
