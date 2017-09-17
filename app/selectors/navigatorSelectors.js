import { createSelector } from 'reselect';
import { loggedInSelector } from './userSelectors';
import { gameNameSelector } from './gameSelectors';

const authenticatedNavigationSelector = state => state.navigator.authenticated;
const unauthenticatedNavigationSelector = state => state.navigator.unauthenticated;

export default createSelector(
  authenticatedNavigationSelector,
  unauthenticatedNavigationSelector,
  loggedInSelector,
  gameNameSelector, (
    authenticated,
    unauthenticated,
    loggedIn,
    gameName,
  ) => ({
    authenticated,
    unauthenticated,
    loggedIn,
    gameName,
  }),
);
