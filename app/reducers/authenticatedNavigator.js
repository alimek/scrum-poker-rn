// @flow
import { NavigationActions } from 'react-navigation';
import { AuthenticatedUser } from '../screens/Navigator/Navigator';
import { GAME_LOGIN } from '../actions/action_types';

const authReducer = (state: Object, action: Function) => {
  switch (action.type) {
    case GAME_LOGIN:
      return AuthenticatedUser.router.getStateForAction(NavigationActions.reset({
        index: 0,
        actions: [
          NavigationActions.navigate({ routeName: 'Game' }),
        ],
      }), state);
    default:
      return AuthenticatedUser.router.getStateForAction(action, state) || state;
  }
};

export default authReducer;
