// @flow
import React from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { StackNavigator, addNavigationHelpers } from 'react-navigation';
import { path } from 'ramda';

import HomePage from '../HomePage/HomePage';
import GamePage from '../GamePage/GamePage';
import navigatorSelector from '../../selectors/navigatorSelectors';

import type { NavigatorProps } from './Navigator-types';

export const UserAuthenticated = StackNavigator({
  Game: {
    screen: GamePage,
    navigationOptions: ({ screenProps }) => ({
      title: path(['result', 'name'], screenProps),
      headerRight: <Text>Replace with open icon</Text>,
    }),
  },
});

export const UserUnauthenticated = StackNavigator({
  HomePage: {
    screen: HomePage,
    navigationOptions: { header: null },
  },
});

const Navigator = ({
  dispatch,
  authenticated,
  unauthenticated,
  loggedIn,
  game,
}: NavigatorProps) => (
  loggedIn ?
    <UserAuthenticated
      navigation={addNavigationHelpers({
        dispatch,
        state: authenticated,
      })}
      screenProps={game}
    /> :
    <UserUnauthenticated
      navigation={addNavigationHelpers({
        dispatch,
        state: unauthenticated,
      })}
    />
);

export default connect(navigatorSelector)(Navigator);
