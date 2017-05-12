// @flow
/* eslint-disable no-use-before-define*/
import React, { Component } from 'react';
import ReactNative from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as gameActions from '../actions/game';
import * as userActions from '../actions/user';

import {
  Input,
  Button,
} from '../components';
import * as variables from '../styles/common';

const {
  Text,
  Image,
  StyleSheet,
  KeyboardAvoidingView,
} = ReactNative;

class HomePage extends Component {

  static navigationOptions = {
    header: {
      visible: false,
    },
  };

  props: HomepageProps;

  render() {
    const { navigation: { navigate },
      actions,
    } = this.props;

    return (
      <Image source={background} style={styles.mainView}>
        <KeyboardAvoidingView behavior="padding" contentContainerStyle={{ flex: 1 }}>

          <Image source={logo} style={styles.logoImage} />

          <Text style={styles.text}>Planning Pokers - let&apos;s plan your sprint</Text>

          <Input
            underlineColorAndroid={'transparent'}
            placeholder={'Game id'}
            placeholderTextColor={'#d3d3d3'}
            style={styles.input}
            onChangeText={actions.setGameId}
          />

          <Input
            underlineColorAndroid={'transparent'}
            placeholder={'Your nickname'}
            placeholderTextColor={'#d3d3d3'}
            style={styles.input}
            onChangeText={actions.setUserName}

          />

          <Button
            title="Go to GamePage"
            onPress={actions.gameLogin}
            style={styles.button}
            textStyle={styles.buttonText}
          />

        </KeyboardAvoidingView>
      </Image>
    );
  }
}

type HomepageProps = {
  navigation: {
    navigate: Function,
  }
}

const background = require('../assets/img/team.jpg');
const logo = require('../assets/img/pgssoftware-logo-white-300px.png');

const inputHeight = 40;
const inputWidth = 280;

const styles = StyleSheet.create({
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

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ ...gameActions, ...userActions }, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomePage);
