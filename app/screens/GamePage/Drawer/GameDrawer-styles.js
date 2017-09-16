import { StyleSheet } from 'react-native';
import { GRAY_LIGHT } from '../../../styles/common';

export default StyleSheet.create({
  textOuter: {
    height: 50,
    flex: 1,
    borderBottomColor: GRAY_LIGHT,
    borderBottomWidth: StyleSheet.hairlineWidth,
    flexDirection: 'row',
  },
  text: {
    paddingLeft: 10,
    alignSelf: 'center',
  },
});
