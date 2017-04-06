// @flow
import { AuthenticatedUser } from '../screens/Navigator';

const authReducer = (state: Object, action: Function) => {
  const newState = AuthenticatedUser.router.getStateForAction(action, state);
  return newState || state;
};

export default authReducer;
