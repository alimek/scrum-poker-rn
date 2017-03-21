// @flow
import React from 'react';
import { connect } from 'react-redux';
import { StackNavigator, addNavigationHelpers } from 'react-navigation';
import HomePage from './HomePage';
import GamePage from './GamePage';

export const AppNavigator = StackNavigator({
  Home: { screen: HomePage },
  Game: { screen: GamePage },
});

const Navigator = ({ dispatch, nav }: { dispatch: Function, nav: Object }) =>
  <AppNavigator
    navigation={addNavigationHelpers({
      dispatch: dispatch,
      state: nav,
    })}
  />;

const mapStateToProps = state => ({ nav: state.nav });

export default connect(mapStateToProps)(Navigator);
