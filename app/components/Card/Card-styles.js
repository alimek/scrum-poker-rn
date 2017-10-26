// @flow
import { StyleSheet, Dimensions } from 'react-native';

import { PGS_ORANGE, PGS_ORANGE_LIGHT, FONT_BIG } from '../../styles/common';

const window = Dimensions.get('window');
const CARD_HEIGHT = window.height / 2.5;
const CARD_WIDTH = window.width / 2.5;

export default StyleSheet.create({
  Card: {
    backgroundColor: PGS_ORANGE,
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Text: {
    color: PGS_ORANGE_LIGHT,
    fontSize: FONT_BIG,
  },
});
