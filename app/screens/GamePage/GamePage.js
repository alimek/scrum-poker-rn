// @flow
import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { DrawerNavigator } from 'react-navigation';
import { path } from 'ramda';

import { Button } from '../../components';
import styles from './GamePage-styles';
import type { GamePageProps } from './GamePage-types';

import GameDrawer from './Drawer';

class GamePage extends Component {

  static navigationOptions = {
    header: ({ state }) => ({
      title: path(['params', 'title'], state),
    }),
  };

  componentDidMount() {
    this.props.navigation.setParams({
      title: this.props.screenProps.result.name,
    });
  }

  render() {
    const { navigation } = this.props;

    return (
      <View style={styles.container}>
        <Button
          onPress={() => navigation.navigate('DrawerOpen')}
        >
          Open drawer
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
