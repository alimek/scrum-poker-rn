import { StyleSheet } from 'react-native';
import { BRAND_PRIMARY_DISABLED, PGS_ORANGE } from '../../styles/common';

export const RADIUS = 10;

export default StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'transparent',
    overflow: 'hidden',
  },

  ripple: {
    width: RADIUS * 2,
    height: RADIUS * 2,
    borderRadius: RADIUS,
    overflow: 'hidden',
    position: 'absolute',
  },

  base: {
    backgroundColor: 'red',
  },
  disabled: {
    backgroundColor: BRAND_PRIMARY_DISABLED,
  },

  text: {
    color: PGS_ORANGE,
    fontSize: 22,
    fontWeight: '700',
  },
});
