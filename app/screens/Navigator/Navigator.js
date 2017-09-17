// @flow
import React from 'react';
import { connect } from 'react-redux';
import { StackNavigator, addNavigationHelpers } from 'react-navigation';
import { path } from 'ramda';

import HomePage from '../HomePage/HomePage';
import GamePage from '../GamePage/GamePage';
import { DrawerOpen } from '../GamePage/Drawer';
import navigatorSelector from '../../selectors/navigatorSelectors';

import type { NavigatorProps } from './Navigator-types';

export const UserAuthenticated = StackNavigator({
  Game: {
    screen: GamePage,
    navigationOptions: ({ screenProps, navigation }) => ({
      title: path(['gameName'], screenProps),
      headerLeft: <DrawerOpen navigation={navigation} />,
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
  gameName,
}: NavigatorProps) => (
  loggedIn ?
    <UserAuthenticated
      navigation={addNavigationHelpers({
        dispatch,
        state: authenticated,
      })}
      screenProps={{ gameName }}
    /> :
    <UserUnauthenticated
      navigation={addNavigationHelpers({
        dispatch,
        state: unauthenticated,
      })}
    />
);

export default connect(navigatorSelector)(Navigator);
