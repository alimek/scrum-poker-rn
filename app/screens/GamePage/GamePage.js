// @flow
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { DrawerNavigator } from 'react-navigation';

import styles from './GamePage-styles';
import type { GamePageProps } from './GamePage-types';

class GamePage extends Component {
  render() {
    console.log(this.props)
    return (
      <Text>GamePage</Text>
    );
  }
}


export default DrawerNavigator({
  Main: { screen: GamePage },
});
