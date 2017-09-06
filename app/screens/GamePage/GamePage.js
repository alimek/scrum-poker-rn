// @flow
import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { DrawerNavigator } from 'react-navigation';
import { path } from 'ramda';

import { Button } from '../../components';
import styles from './GamePage-styles';
import type { GamePageProps } from './GamePage-types';

class GamePage extends Component {

  static navigationOptions = {
    header: ({ state }) => ({
      title: path(['params', 'screenProps', 'result', 'name'], state),
    }),
  };

  componentDidMount() {
    this.props.navigation.setParams({
      screenProps: this.props.screenProps,
    });
  }

  render() {
    return (
      <View>
        <Button onPress={() =>this.props.navigation.navigate('DrawerOpen')}
        >Open drawer</Button>
      </View>
    );
  }
}

const DrawerItems = (props) => {
  console.log(props)
  return (
    <Text>
      drawer
    </Text>
  );
};

export default DrawerNavigator({
  Main: { screen: GamePage },
}, {
  contentComponent: props => <ScrollView><DrawerItems {...props} /></ScrollView>,
});
