// @flow
import { NavigationActions } from 'react-navigation';
import { combineReducers } from 'redux';
import { UserAuthenticated, UserUnauthenticated } from '../screens/Navigator/App';
import { TASK_SET } from '../actions/task';

const authenticated = (state: Object, action: Function) => {
  let nextState;
  switch (action.type) {
    case TASK_SET:
      nextState = UserAuthenticated.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'TaskDetails' }),
        state,
      );
      break;
    default:
      nextState = UserAuthenticated.router.getStateForAction(action, state);
      break;
  }

  return nextState || state;
};

const unauthenticated = (state: Object, action: Function) => {
  const nextState = UserUnauthenticated.router.getStateForAction(action, state);
  return nextState || state;
};

export default combineReducers({ authenticated, unauthenticated });
