// @flow
import { UnauthenticatedUser } from '../screens/Navigator/Navigator';

const unAuthReducer = (state: Object, action: Function) => {
  const newState = UnauthenticatedUser.router.getStateForAction(action, state);
  return newState || state;
};

export default unAuthReducer;
