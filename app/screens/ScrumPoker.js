// @flow
import React from 'react';
import { Provider } from 'react-redux';
import axios from 'axios';
import Navigator from './Navigator';
import store from '../store';

axios.defaults.baseURL = 'http://10.0.2.2:8088/app_dev.php';

const ScrumPoker = () => (
  <Provider store={store}>
    <Navigator />
  </Provider>
);

export default ScrumPoker;
