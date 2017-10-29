// @flow

export type User = {
  guid: null,
  name: null,
  pickedCard: null,
  isReady: boolean,
  isOffline: boolean,
  loggedIn: boolean,
  hasLoginError: boolean,
};

export const user = {
  guid: null,
  name: null,
  pickedCard: null,
  isReady: false,
  isOffline: false,
  loggedIn: false,
  hasLoginError: false,
};
