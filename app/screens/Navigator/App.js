// @flow
import React from 'react';
import { connect } from 'react-redux';
import { StackNavigator, addNavigationHelpers } from 'react-navigation';

import GamePage from './Game';
import HomePage from '../Home';
import TaskDetails from '../TaskDetails';
import navigatorSelector from '../../selectors/navigatorSelectors';
import type { NavigatorProps } from './Navigator-types';

export const UserAuthenticated = StackNavigator({
  Game: {
    screen: GamePage,
    navigationOptions: { header: null },
  },
  TaskDetails: {
    screen: TaskDetails,
  },
});

export const UserUnauthenticated = StackNavigator({
  Home: {
    screen: HomePage,
    navigationOptions: { header: null },
  },
});

const Navigator = ({
  dispatch,
  authenticated,
  unauthenticated,
  loggedIn,
  gameName,
}: NavigatorProps) => (
  loggedIn ?
    <UserAuthenticated
      navigation={addNavigationHelpers({
        dispatch,
        state: authenticated,
        gameName,
      })}
    /> :
    <UserUnauthenticated
      navigation={addNavigationHelpers({
        dispatch,
        state: unauthenticated,
      })}
    />
);

export default connect(navigatorSelector)(Navigator);
