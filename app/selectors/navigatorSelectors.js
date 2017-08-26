import { createSelector } from 'reselect';
import { loggedInSelector } from './userSelectors';
import { gameSelector } from './gameSelectors';

const authenticatedNavigationSelector = state => state.navigator.authenticated;
const unauthenticatedNavigationSelector = state => state.navigator.unauthenticated;

export default createSelector(
  authenticatedNavigationSelector,
  unauthenticatedNavigationSelector,
  loggedInSelector,
  gameSelector, (
    authenticated,
    unauthenticated,
    loggedIn,
    game,
  ) => ({
    authenticated,
    unauthenticated,
    loggedIn,
    game,
  }),
);
