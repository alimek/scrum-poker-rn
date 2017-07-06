import { StyleSheet, Dimensions } from 'react-native';
import { PGS_ORANGE, SPACING_REGULAR, SPACING_SMALL } from '../../styles/common';

const window = Dimensions.get('window');
export const IMAGE_HEIGHT = window.width / 2;
export const IMAGE_HEIGHT_SMALL = window.width / 5;
export const HEADER_SIZE = 28;
export const HEADER_SIZE_SMALL = 14;

export default StyleSheet.create({
  container: {
    backgroundColor: PGS_ORANGE,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: SPACING_REGULAR,
    paddingRight: SPACING_REGULAR,
  },
  logo: {
    height: IMAGE_HEIGHT,
    resizeMode: 'contain',
  },
  text: {
    color: '#fff',
    marginBottom: -SPACING_SMALL,
  },
  formContainer: {
    flex: 1,
    flexDirection: 'row',
  },
});
