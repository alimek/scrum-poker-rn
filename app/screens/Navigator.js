// @flow
import React from 'react';
import { connect } from 'react-redux';
import { StackNavigator, addNavigationHelpers } from 'react-navigation';
import HomePage from './HomePage';
import GamePage from './GamePage';

export const AuthenticatedUser = StackNavigator({
  Game: { screen: GamePage },
});

export const UnauthenticatedUser = StackNavigator({
  HomePage: { screen: HomePage },
});

const Navigator = ({ dispatch, unAuthNav, authNav, loggedIn }: { dispatch: Function, unAuthNav: Object, authNav: Object, loggedIn: Boolean }) => {
  return loggedIn
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
    />
};


const mapStateToProps = state => ({ authNav: state.authNav, unAuthNav: state.unAuthNav, loggedIn: state.user.loggedIn });

export default connect(mapStateToProps)(Navigator);
