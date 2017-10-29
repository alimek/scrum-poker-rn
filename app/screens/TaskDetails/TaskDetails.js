import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { connect } from 'react-redux';
import { path } from 'ramda';

import { Card } from '../../components';
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

// The only way to have header title based on store
const Title = ({ name }: string) => (
  <Text>{name}</Text>
);
const TaskTitle = connect(taskDetailsSelector)(Title);

export default StackNavigator({
  TaskDetails: {
    screen: connect(taskDetailsSelector)(TaskDetails),
    navigationOptions: () => ({
      title: <TaskTitle />,
    }),
  },
}, { headerMode: 'none' });

