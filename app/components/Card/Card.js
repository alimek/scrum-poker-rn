import React from 'react';
import { Text, View } from 'react-native';

import styles from './Card-styles';

const Card = () => {
  return (
    <View style={styles.Card}>
      <Text style={styles.Text}>Card component</Text>
    </View>
  );
};

export default Card;
