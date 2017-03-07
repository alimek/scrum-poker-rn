import React from 'react';
import { Provider } from 'mobx-react/native';

import { StackNavigator } from 'react-navigation';
import HomePage from './HomePage';
import GamePage from './GamePage';
import store from '../store';

const Navigator = StackNavigator({
  Home: { screen: HomePage },
  Game: { screen: GamePage },
});

const ScrumPoker = () => (
  <Provider store={store}>
    <Navigator />
  </Provider>
);

export default ScrumPoker;
