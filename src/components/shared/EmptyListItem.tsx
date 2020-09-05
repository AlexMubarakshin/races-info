import React from 'react';

import { View, StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingVertical: 24,
    paddingHorizontal: 12,
  },
  title: {
    fontSize: 17,
    textAlign: 'center',
  },
});

const EmptyListItem: React.FC = () => (
  <View style={styles.container}>
    <Text style={styles.title}>Sorry, no data... Try Again later.</Text>
  </View>
);

export default React.memo(EmptyListItem);
