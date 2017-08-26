import { createSelector } from 'reselect';

const userSelector = state => state.user;

export const loggedInSelector = createSelector(
  userSelector,
  user => user.loggedIn,
);

export const hasLoginErrorSelector = createSelector(
  userSelector,
  user => user.hasLoginError,
);
