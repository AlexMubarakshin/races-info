import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, ImageSourcePropType } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  iconContainer: {
    borderRadius: 50,
    borderColor: 'rgba(0, 0, 0, 0.15)',
    borderWidth: 1,
    height: 60,
    width: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    height: 24,
    width: 24,
  },
  textContainer: {
    paddingLeft: 12,
  },
  title: {
    textAlign: 'left',
    fontSize: 17,
    fontWeight: '600',
    lineHeight: 20,
    color: '#000',
  },
  subtitle: {
    fontSize: 13,
    lineHeight: 18,
    color: 'rgba(0, 0, 0, 0.5)',
    paddingTop: 2,
  },
});

type DetailedListItemProps = {
  onPress: () => void;
  title: string;
  subtitle: string;
  description: string;
  icon: ImageSourcePropType;
};

const DetailedListItem: React.FC<DetailedListItemProps> = ({ onPress, title, subtitle, description, icon }) => (
  <TouchableOpacity onPress={onPress}>
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Image source={icon} style={styles.icon} />
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
        <Text style={styles.subtitle}>{description}</Text>
      </View>
    </View>
  </TouchableOpacity>
);

export default React.memo(DetailedListItem);
