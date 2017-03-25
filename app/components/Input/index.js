import React from 'react';
import { TextInput } from 'react-native';

const Input = (props, { children }) =>
  <TextInput
    {...props}
  >{children}
  </TextInput>;

export default Input;
