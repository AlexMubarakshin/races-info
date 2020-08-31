import React from 'react';
import { StyleSheet, View, Text, ImageSourcePropType, Image } from 'react-native';

import moment from 'moment';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingVertical: 16,
  },
  iconContainer: {
    borderRadius: 50,
    borderColor: 'rgba(0, 0, 0, 0.15)',
    borderWidth: 1,
    height: 100,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    height: 60,
    width: 60,
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

  icon: ImageSourcePropType;
};

const DriverInfo: React.FC<DriverInfoProps> = ({ name, nationality, dateOfBirth, icon }) => (
  <View style={styles.container}>
    <View style={styles.iconContainer}>
      <Image source={icon} style={styles.icon} />
    </View>

    <Text style={styles.title}>{name}</Text>
    <Text style={styles.subtitle}>{nationality}</Text>
    <Text style={styles.subtitle}>{moment(dateOfBirth).format('LL')}</Text>
  </View>
);

export default React.memo(DriverInfo);
