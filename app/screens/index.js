// @flow
import React from 'react';
import { Provider } from 'react-redux';
import App from './Navigator';
import configureStore from '../store';

const store = configureStore({});

const ScrumPoker = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default ScrumPoker;
