import React from 'react';
import { Text } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { HeaderIcon } from '../../components';

const Players = (props) => {
  return (
    <Text>Players</Text>
  );
};


export default StackNavigator({
  PlayersPage: {
    screen: Players,
    navigationOptions: ({ navigation }) => ({
      title: 'Players',
      headerLeft: <HeaderIcon
        navigate={navigation.navigate}
        icon="arrow-back"
        destination="Game"
        placement="left"
      />,
    }),
  },
});
