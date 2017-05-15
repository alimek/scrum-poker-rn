// @flow
import React from 'react';
import { connect } from 'react-redux';
import { StackNavigator, addNavigationHelpers } from 'react-navigation';
import HomePage from '../HomePage/HomePage';
import GamePage from '../GamePage/GamePage';

import type { NavigatorProps } from './Navigator-types';

export const AuthenticatedUser = StackNavigator({
  Game: { screen: GamePage },
});

export const UnauthenticatedUser = StackNavigator({
  HomePage: { screen: HomePage },
}, {
  headerMode: 'screen',
});

const Navigator = ({ dispatch, unAuthNav, authNav, loggedIn }: NavigatorProps) => loggedIn
    ? <AuthenticatedUser
      navigation={addNavigationHelpers({
        dispatch,
        state: authNav,
      })}
    />
    : <UnauthenticatedUser
      navigation={addNavigationHelpers({
        dispatch,
        state: unAuthNav,
      })}
    />;

const mapStateToProps = state => ({
  authNav: state.authNav,
  unAuthNav: state.unAuthNav,
  loggedIn: state.user.loggedIn,
});

export default connect(mapStateToProps)(Navigator);
// http://symfony.dev:8088/app_dev.php/_profiler/
