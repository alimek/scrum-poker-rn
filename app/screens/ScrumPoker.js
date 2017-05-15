// @flow
import React from 'react';
import { Provider } from 'react-redux';
import axios from 'axios';
import Navigator from './Navigator/Navigator';
import configureStore from '../store';

axios.defaults.baseURL = 'http://10.0.2.2:8088/app_dev.php';

const store = configureStore();

const ScrumPoker = () => (
  <Provider store={store}>
    <Navigator />
  </Provider>
);

export default ScrumPoker;
