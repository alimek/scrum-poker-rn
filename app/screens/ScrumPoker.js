// @flow
import React from 'react';
import { Provider } from 'react-redux';
import Navigator from './Navigator/Navigator';
import configureStore from '../store';

const store = configureStore({});

const ScrumPoker = () => (
  <Provider store={store}>
    <Navigator />
  </Provider>
);

export default ScrumPoker;
