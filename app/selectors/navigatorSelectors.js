import { createSelector } from 'reselect';
import { loggedInSelector } from './userSelectors';

export const authenticatedNavigationSelector = state => state.navigator.authenticated;
export const unauthenticatedNavigationSelector = state => state.navigator.unauthenticated;

export default createSelector(
  authenticatedNavigationSelector,
  unauthenticatedNavigationSelector,
  loggedInSelector,
  (authenticated, unauthenticated, loggedIn) => ({
    authenticated,
    unauthenticated,
    loggedIn,
  }),
);
