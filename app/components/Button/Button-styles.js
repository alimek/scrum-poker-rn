import { StyleSheet } from 'react-native';
import { BRAND_PRIMARY_DISABLED, PGS_ORANGE, FONT_BIG } from '../../styles/common';

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
  disabled: {
    backgroundColor: BRAND_PRIMARY_DISABLED,
  },
  text: {
    color: PGS_ORANGE,
    fontSize: FONT_BIG,
    fontWeight: '700',
  },
});
