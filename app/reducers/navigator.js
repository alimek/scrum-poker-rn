// @flow
import { AppNavigator } from '../containers/Navigator';

const navReducer = (state: Object, action: Function) => {
  const newState = AppNavigator.router.getStateForAction(action, state);
  return newState || state;
};

export default navReducer;
