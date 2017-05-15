// @flow
import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import type { ButtonProps } from './Button-types';
import button from './Button-styles';

const Button = ({ disabled, style, ...props }: ButtonProps) => {
  const styles = [style];

  if (disabled === true) styles.push(button.disabled);

  return (
    <TouchableOpacity
      {...props}
      style={styles}
      activeOpacity={0.9}
      disabled={disabled}
    >
      <Text style={props.textStyle}>{props.title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
