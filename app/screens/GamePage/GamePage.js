// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, ScrollView } from 'react-native';
import { DrawerNavigator } from 'react-navigation';

import { Button } from '../../components';
import GamePageSelector from './GamePage-selector';

import styles from './GamePage-styles';
import type { GamePageProps } from './GamePage-types';

import GameDrawer from './Drawer';

class GamePage extends Component {

  props: GamePageProps;

  render() {
    const { navigation, userName } = this.props;
    console.log(this.props);

    return (
      <View style={styles.container}>
        <Text>Welcome, {userName}</Text>
        <Button
          onPress={() => navigation.dispatch({ type: 'USER_LOGOUT' })}
        >
          Logout
        </Button>
      </View>
    );
  }
}

export default DrawerNavigator({
  Main: { screen: connect(GamePageSelector)(GamePage) },
}, {
  contentComponent: props => <ScrollView><GameDrawer {...props} /></ScrollView>,
});
