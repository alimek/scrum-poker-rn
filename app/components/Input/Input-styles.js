// @flow
import { StyleSheet } from 'react-native';

import { PGS_ORANGE_LIGHT, GRAY_LIGHT, FONT_REGULAR } from '../../styles/common';

export default StyleSheet.create({
  inputContainer: {
    position: 'relative',
    height: 50,
    marginTop: 5,
    marginBottom: 5,
  },
  placeholder: {
    position: 'absolute',
    fontSize: FONT_REGULAR,
    color: PGS_ORANGE_LIGHT,
  },
  placeholderColored: {
    color: GRAY_LIGHT,
  },
  text: {
    color: '#fff',
    fontSize: FONT_REGULAR,
  },
  floatingBorderContainer: {
    flexDirection: 'row',
    marginTop: -10,
  },
  borderInactive: {
    height: 1,
    width: '100%',
    backgroundColor: PGS_ORANGE_LIGHT,
  },
  borderActive: {
    height: 1,
    flex: 1,
    backgroundColor: GRAY_LIGHT,
  },
  textError: {
    color: 'red',
    position: 'absolute',
    right: 0,
    top: -5,
    fontSize: 10,
  },
});
