// @flow
import React, { Component } from 'react';
import ReactNative from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Input, Button } from '../../components';
import styles from './HomePage-styles';
import * as gameActions from '../../actions/game';
import * as userActions from '../../actions/user';
import type { HomePageProps } from './HomePage-types';

const {
  Text,
  Image,
  KeyboardAvoidingView,
} = ReactNative;
const background = require('../../assets/img/team.jpg');
const logo = require('../../assets/img/pgssoftware-logo-white-300px.png');

class HomePage extends Component {

  static navigationOptions = {
    header: {
      visible: false,
    },
  };

  props: HomePageProps;

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

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ ...gameActions, ...userActions }, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomePage);
