// @flow
import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

type ButtonProps = {
  style: Object,
  title: string,
  textStyle: ?Object,
}

const Button = (props: ButtonProps) =>
  <TouchableOpacity
    {...props}
    style={props.style}
    activeOpacity={0.9}
  >
    <Text style={props.textStyle}>{props.title}</Text>
  </TouchableOpacity>;

export default Button;
