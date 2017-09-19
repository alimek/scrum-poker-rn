import React, { Component } from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import { gameTasksSelector } from '../../../selectors/gameSelectors';

import styles from './GameDrawer-styles';
import type { GameDrawerProps } from './GameDrawer-types';

class GameDrawer extends Component {

  props: GameDrawerProps;

  render() {
    const { tasks } = this.props;
    return (
      <View>
        {tasks.map(task =>
          <TouchableWithoutFeedback
            key={task}
            onPress={() => console.log('handle click')}
          >
            <View style={styles.textOuter}>
              <Text style={styles.text}>{task}</Text>
            </View>
          </TouchableWithoutFeedback>,
        )}
      </View>
    );
  }
}


const gameDrawerSelector = createSelector(
  gameTasksSelector,
  tasks => ({
    tasks,
  }),
);

export default connect(gameDrawerSelector)(GameDrawer);
