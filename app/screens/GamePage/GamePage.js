// @flow
import React from 'react';
import { connect } from 'react-redux';
import { View, Text, ScrollView } from 'react-native';
import { DrawerNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { RippleButton } from '../../components';
import GameDrawer from './Drawer';
import GamePageSelector from './GamePage-selector';
import { userLogout } from '../../actions/user';

import styles from './GamePage-styles';
import type { GamePageProps } from './GamePage-types';

const GamePage = ({ navigation, userName }: GamePageProps) => (
  <View style={styles.container}>
    <Icon style={styles.iconAccount} name="account-circle" />
    <Text style={styles.textWelcome}>Welcome, {userName}</Text>
    <RippleButton
      onPress={() => navigation.dispatch(userLogout())}
    >
      Logout
    </RippleButton>
  </View>
);


export default DrawerNavigator({
  Main: { screen: connect(GamePageSelector)(GamePage) } },
  { contentComponent: props => <ScrollView><GameDrawer {...props} /></ScrollView> },
);
