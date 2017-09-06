// @flow
import React from 'react';
import { connect } from 'react-redux';
import { StackNavigator, addNavigationHelpers } from 'react-navigation';

import HomePage from '../HomePage/HomePage';
import GamePage from '../GamePage/GamePage';
import navigatorSelector from '../../selectors/navigatorSelectors';

import type { NavigatorProps } from './Navigator-types';

export const UserAuthenticated = StackNavigator({
  Game: { screen: GamePage } },
);

export const UserUnauthenticated = StackNavigator({
  HomePage: { screen: HomePage } },
);

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
