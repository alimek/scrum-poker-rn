import React from 'react';
import { View, TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import styles from './GameDrawer-styles';
import type { Navigation } from '../../../types/navigation';

const DrawerOpen = ({ navigation }: Navigation) => (
  <View style={styles.DrawerOpen}>
    <TouchableWithoutFeedback
      onPress={() => navigation.navigate('DrawerOpen')}
    >
      <Icon name="list" size={30} color="#000" />
    </TouchableWithoutFeedback>
  </View>
);

export default DrawerOpen;
