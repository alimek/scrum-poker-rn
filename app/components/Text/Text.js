// @flow
import React from 'react';
import { Text } from 'react-native';

import styles from './Text-styles';

const TextBase = ({ children, style }: { children: Object, style: Object }) => (
  <Text style={[styles.base, style]} >{children}</Text>
);

export default TextBase;
