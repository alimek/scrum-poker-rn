// @flow
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

import * as variables from '../../styles/common';


type ButtonProps = {
  style: Object,
  title: string,
  textStyle: ?Object,
  disabled: boolean,
}

const button = StyleSheet.create({
  disabled: {
    backgroundColor: variables.brandPrimaryDisabled,
  },
});


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

