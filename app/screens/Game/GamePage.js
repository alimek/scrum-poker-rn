import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import { path } from 'ramda';

import { Button, HeaderIcon } from '../../components';
import gamePageSelector from './GamePageSelector';

class GamePage extends Component {
  render() {
    return (
      <View>
        <Button
          onPress={() => this.props.navigation.navigate('Tasks')}
          title="Go to Lucy's profile"
        />
        <Text>GamePage</Text>
      </View>
    );
  }
}

export default StackNavigator({
  GamePage: {
    screen: connect(gamePageSelector)(GamePage),
    navigationOptions: ({ navigation }) => ({
      title: path(['gameName'], navigation),
      headerLeft: <HeaderIcon
        navigate={navigation.navigate}
        icon="menu"
        destination="Tasks"
        placement="left"
      />,
      headerRight: <HeaderIcon
        navigate={navigation.navigate}
        icon="people"
        destination="Players"
        placement="right"
      />,
    }),
  },
});
