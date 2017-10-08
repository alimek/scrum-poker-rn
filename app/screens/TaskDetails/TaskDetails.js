import React from 'react';
import { Text } from 'react-native';
import { StackNavigator } from 'react-navigation';

const TaskDetails = () => {
  return (
    <Text>TaskDetails</Text>
  );
};

export default StackNavigator({
  TaskDetails: {
    screen: TaskDetails,
  },
});

