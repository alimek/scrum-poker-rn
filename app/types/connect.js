// @flow

export type Connect = {
  dispatch: Function,
  navigation: {
    dispatch: Function,
    goBack: Function,
    navigate: Function,
    setParams: Function,
    state: {
      key: string,
      routeName: string,
    },
  },
  screenProps: null | Object,
};
