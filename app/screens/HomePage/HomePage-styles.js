import ReactNative from 'react-native';
import * as variables from '../../styles/common';

const { StyleSheet } = ReactNative;
const inputHeight = 40;
const inputWidth = 280;

export default StyleSheet.create({
  mainView: {
    flex: 1,
    width: null,
    justifyContent: 'center',
    flexDirection: 'column',
  },
  backgroundImage: {
    position: 'absolute',
  },
  logoImage: {
    alignSelf: 'center',
    width: 250,
    marginBottom: 20,
  },
  input: {
    marginBottom: 5,
    marginTop: 5,
    backgroundColor: '#fff',
    width: inputWidth,
    alignSelf: 'center',
    textAlign: 'center',
    height: inputHeight,
    borderColor: variables.pgsOrange,
    borderWidth: 2,
    borderRadius: 1,
  },
  text: {
    alignSelf: 'center',
    fontSize: 18,
    color: '#fff',
    backgroundColor: 'transparent',
    fontWeight: '700',
    textShadowColor: '#000',
    textShadowOffset: { width: 2, height: 2 },
  },
  button: {
    marginTop: 5,
    backgroundColor: variables.brandPrimary,
    width: inputWidth,
    alignSelf: 'center',
    height: inputHeight,
    justifyContent: 'center',
    borderRadius: 1,
    borderColor: '#0C42FD',
  },
  buttonText: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: '600',
  },
});
