import React from 'react';

import TextBase from './Text';
import styles from './Text-styles';

const TextWarning = ({ children } : { children: Object }) => (
  <TextBase style={styles.warning}>{children}</TextBase>
);

export default TextWarning;
