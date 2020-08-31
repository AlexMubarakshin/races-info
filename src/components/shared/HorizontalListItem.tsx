import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    paddingVertical: 16,
    paddingHorizontal: 16,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 17,
    lineHeight: 20,
    color: '#000',
  },
  value: {
    fontSize: 17,
    lineHeight: 20,
    color: 'rgba(0, 0, 0, 0.35)',
  },
});

type HorizontalListItemProps = {
  title: string;
  value: string;
};

const HorizontalListItem: React.FC<HorizontalListItemProps> = ({ title, value }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
};

export default HorizontalListItem;
