import { StyleSheet, Dimensions } from 'react-native';
import { PGS_ORANGE, SPACING_REGULAR } from '../../styles/common';

const window = Dimensions.get('window');
export const IMAGE_HEIGHT = window.width / 2;

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
  formContainer: {
    alignSelf: 'stretch',
  },
});

