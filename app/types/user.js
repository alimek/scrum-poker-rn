// @flow

import { cloneObject } from '../utils/flow';

export const defaultUserState = {
  guid: null,
  name: null,
  pickedCard: null,
  isReady: false,
  isOffline: false,
  loggedIn: false,
  hasLoginError: false,
};

export const userState = cloneObject(defaultUserState);
