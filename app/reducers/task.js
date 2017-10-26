// @flow
import createReducer from './reducer-utils';

const defaultState = {
  currentlyActive: null,
};

const taskReducer = createReducer(defaultState, {
  TASK_SET: (state, action) => ({
    ...state,
    currentlyActive: action.currentlyActive,
  }),
});

export default taskReducer;
