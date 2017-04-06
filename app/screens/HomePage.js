// @flow
/* eslint-disable no-use-before-define*/
import React, { Component } from 'react';
import ReactNative from 'react-native';
import { Input, Button } from '../components';
import * as variables from '../styles/common';
import axios from 'axios'

const {
  View,
  Text,
  Image,
  StyleSheet,
} = ReactNative;

class HomePage extends Component {

  static navigationOptions = {
    header: {
      visible: false,
    },
  }

  constructor() {
    super();
    this.state = {
      name: null,
    };

    this.updateName = (name: string) => {
      this.setState({ name });
    };
  }

  state: {
    name: null | string,
  }

  props: HomepageProps;

  updateName: (e: string) => void;

  render() {
    const { navigation: { navigate } } = this.props;

    return (
      <View style={styles.mainView}>
        <Image source={background} style={styles.backgroundImage} />
        <Image source={logo} style={styles.logoImage} />

        <Text style={styles.text}>Planning Poker - let&apos;s plan your sprint</Text>

        <Input
          underlineColorAndroid={'transparent'}
          placeholder={'type your name'}
          placeholderTextColor={'#d3d3d3'}
          style={styles.input}
          onChangeText={e => this.updateName(e)}
        />

        <Button
          title="Go to GamePage"
          onPress={() => axios.get('/games/58c7fdc7e27aa00800fb0197').then(r => console.error(r))}
          style={styles.button}
          textStyle={styles.buttonText}
        />
      </View>
    );
  }
}

type HomepageProps = {
  navigation: {
    navigate: Function,
  }
}

const background = require('../assets/img/team.jpg');
const logo = require('../assets/img/pgssoftware-logo-white-150px.png');

const inputHeight = 40;
const inputWidth = 280;

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
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
    marginBottom: 10,
    marginTop: 10,
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
    fontWeight: '700',
    textShadowColor: '#000',
    textShadowOffset: { width: 2, height: 2 },
  },
  button: {
    backgroundColor: variables.defaultBlue,
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

export default HomePage;
