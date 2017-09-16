// @flow
import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { DrawerNavigator } from 'react-navigation';

import { Button } from '../../components';
import styles from './GamePage-styles';
import type { GamePageProps } from './GamePage-types';

import GameDrawer from './Drawer';

class GamePage extends Component {

  render() {
    const { navigation } = this.props;
    console.log(this.props)

    return (
      <View style={styles.container}>
        <Button
          onPress={() => navigation.navigate('DrawerOpen')}
        >
          Open drawer
        </Button>
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
  Main: { screen: GamePage },
}, {
  contentComponent: props => <ScrollView><GameDrawer {...props} /></ScrollView>,
});
