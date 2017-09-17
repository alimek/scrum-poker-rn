import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Button } from '../../../components';
import styles from './GameDrawer-styles';

const DrawerOpen = ({ navigation }) => (
  <View style={styles.DrawerOpen}>
    <Button onPress={() => navigation.navigate('DrawerOpen')}>
      <Icon name="list" size={30} color="#000" />
    </Button>
  </View>
);

export default DrawerOpen;
