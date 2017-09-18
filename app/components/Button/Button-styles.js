import { StyleSheet } from 'react-native';
import { BRAND_PRIMARY_DISABLED, PGS_ORANGE, FONT_BIG, SPACING_REGULAR } from '../../styles/common';

export const RADIUS = 10;

export default StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'transparent',
    overflow: 'hidden',
  },
  rippleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E0E0E0',
    minHeight: 56,
    alignSelf: 'stretch',
    marginTop: SPACING_REGULAR,
    borderRadius: 2,
    elevation: 2,
    shadowRadius: 2,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 2,
    },
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
