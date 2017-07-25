import { StyleSheet } from 'react-native';
import { SPACING_REGULAR } from '../../styles/common';

export default StyleSheet.create({
  formInner: {
    flex: 1,
    paddingLeft: SPACING_REGULAR,
    paddingRight: SPACING_REGULAR,
  },

  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E0E0E0',
    minHeight: 56,
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
});
