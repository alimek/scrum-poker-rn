// @flow
import React from 'react';
import { connect } from 'react-redux';
import { StackNavigator, addNavigationHelpers } from 'react-navigation';
import HomePage from '../HomePage/HomePage';
import GamePage from '../GamePage/GamePage';
import navigatorSelector from '../../selectors/navigatorSelectors';

import type { NavigatorProps } from './Navigator-types';

export const UserAuthenticated = StackNavigator({
  Game: { screen: GamePage },
});

export const UserUnauthenticated = StackNavigator({
  HomePage: { screen: HomePage },
}, {
  headerMode: 'screen',
});

const Navigator = ({ dispatch, authenticated, unauthenticated, loggedIn }: NavigatorProps) => (
  loggedIn ?
    <UserAuthenticated
      navigation={addNavigationHelpers({
        dispatch,
        state: authenticated,
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
