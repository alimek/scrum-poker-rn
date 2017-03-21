import React from 'react';
import { TextInput } from 'react-native';

const Input = ({ style, children }) => {
  return (
    <TextInput
      style={style}
    >{children}</TextInput>
  );
};

export default Input;
