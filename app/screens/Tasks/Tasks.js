import React from 'react';
import { connect } from 'react-redux';
import { StackNavigator } from 'react-navigation';
import { List, ListItem } from 'react-native-elements';
import { map } from 'ramda';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { HeaderIcon } from '../../components';
import TasksSelector from './TasksSelector';
import { taskSetActive } from '../../actions/task';

const IconLeft = ({ type }: string) => {
  switch (type) {
    case 'flipped':
      return (
        <Icon
          name="layers"
          size={22}
          style={{ marginRight: 10, color: '#000' }}
        />
      );
    case 'new':
      return (
        <Icon
          name="new-releases"
          size={22}
          style={{ marginRight: 10, color: '#f00' }}
        />
      );
    default:
      return (
        <Icon
          name="new-releases"
          size={22}
          style={{ marginRight: 10, color: '#f00' }}
        />
      );
  }
};

const Tasks = ({ tasks, navigation }) => (
  <List>
    {map(task => (
      <ListItem
        key={task.id}
        title={task.name}
        subtitle={task.status}
        leftIcon={<IconLeft type={task.status} />}
        hideChevron
        onPress={() => navigation.dispatch(taskSetActive(task.id))}
      />), tasks)
    }
  </List>
);

export default StackNavigator({
  TasksPage: {
    screen: connect(TasksSelector)(Tasks),
    navigationOptions: ({ navigation }) => ({
      title: 'Tasks',
      headerRight: <HeaderIcon
        navigate={navigation.navigate}
        icon="arrow-forward"
        destination="Game"
        placement="right"
      />,
    }),
  },
});
