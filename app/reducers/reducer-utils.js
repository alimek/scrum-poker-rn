const createReducer = (initialState, handlers) => (state = initialState, action) => {
  if (handlers.hasOwnProperty(action.type)) { // eslint-disable-line no-prototype-builtins
    return handlers[action.type](state, action);
  }

  return state;
};

export default createReducer;
