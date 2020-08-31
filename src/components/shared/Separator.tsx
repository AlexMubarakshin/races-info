import React from 'react';
import { StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  separator: {
    height: 0.5,
    backgroundColor: 'rgba(0, 0, 0, 0.12)',
    marginVertical: 0.5,
    width: '95%',
    alignSelf: 'center',
  },
});

const Separator = () => <View style={styles.separator} />;

export default Separator;
