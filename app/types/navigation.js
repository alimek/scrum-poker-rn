// @flow

export type Navigation = {
  dispatch: Function,
  goBack: Function,
  navigate: Function,
  setParams: Function,
  state: {
    key: string,
    routeName: string,
  },
};
