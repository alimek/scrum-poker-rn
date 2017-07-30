// @flow
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import { gameResultSelector } from '../../selectors/gameSelectors';

import type { GamePageProps } from './GamePage-types';

class GamePage extends Component {

  static navigationOptions = {
    header: {
      visible: false,
    },
  };

  props: GamePageProps;

  render() {
    return (
      <View>
        <Text>{this.props.name}</Text>
      </View>
    );
  }
}

export default connect(
  gameResultSelector,
)(GamePage);
