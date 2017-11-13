import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { connect } from 'react-redux';

import { Card } from '../../components';
import TaskTitle from './TaskTitle';
import taskDetailsSelector from './TaskDetailsSelector';
import type { Game } from '../../types/game';

class TaskDetails extends Component {
  render() {
    console.log(this.props)
    return (
      <View>
        <Text>TaskDetails</Text>
        <Card />
      </View>
    );
  }
}

export default StackNavigator({
  TaskDetails: {
    screen: connect(taskDetailsSelector)(TaskDetails),
    navigationOptions: () => ({
      title: <TaskTitle />,
    }),
  },
}, { headerMode: 'none' });

