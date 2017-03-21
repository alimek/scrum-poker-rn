import React from 'react';
import { Provider } from 'react-redux';
import Navigator from './Navigator';
import store from '../store';

const ScrumPoker = () => (
  <Provider store={store}>
    <Navigator />
  </Provider>
);

export default ScrumPoker;
