export const userSelector = state => state.user;
export const userNameSelector = state => state.user.name;
export const loggedInSelector = state => state.user.loggedIn;
export const hasLoginErrorSelector = state => state.user.hasLoginError;
