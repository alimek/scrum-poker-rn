// @flow
import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import type { ButtonProps } from './Button-types';
import styles from './Button-styles';

const Button = ({ disabled, style, children, ...props }: ButtonProps) => {
  const buttonStyles = [styles.base, style];

  if (disabled === true) buttonStyles.push(styles.disabled);

  return (
    <TouchableOpacity
      {...props}
      style={buttonStyles}
      activeOpacity={0.9}
      disabled={disabled}
    >
      <Text>{children}</Text>
    </TouchableOpacity>
  );
};

export default Button;
