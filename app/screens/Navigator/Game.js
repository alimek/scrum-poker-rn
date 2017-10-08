import { TabNavigator } from 'react-navigation';

import GameScreen from '../Game';
import TasksScreen from '../Tasks';
import PlayersScreen from '../Players';

export default TabNavigator({
  Tasks: { screen: TasksScreen, navigationOptions: { tabBarVisible: false } },
  Game: { screen: GameScreen, navigationOptions: { tabBarVisible: false } },
  Players: { screen: PlayersScreen, navigationOptions: { tabBarVisible: false } },
}, { initialRouteName: 'Game' });
