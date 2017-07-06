import { StyleSheet } from 'react-native';

import { PGS_ORANGE_LIGHT, GRAY_LIGHT, SPACING_SMALL } from '../../styles/common';

export const PLACEHOLDER_ACTIVE = 10;
export const PLACEHOLDER_INACTIVE = 18;

export default StyleSheet.create({
  inputContainer: {
    position: 'relative',
    height: 50,
    marginBottom: SPACING_SMALL,
  },
  placeholder: {
    left: 5,
    color: PGS_ORANGE_LIGHT,
  },
  placeholderColored: {
    color: GRAY_LIGHT,
  },
  text: {
    color: '#fff',
    fontSize: PLACEHOLDER_INACTIVE,
    marginBottom: -SPACING_SMALL,
  },
  floatingBorderContainer: {
    flexDirection: 'row',
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
});
