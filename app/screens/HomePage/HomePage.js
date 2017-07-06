// @flow
import React, { Component } from 'react';
import { Animated, Keyboard, KeyboardAvoidingView } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { HomePageForm } from '../../components';
import styles, { IMAGE_HEIGHT, IMAGE_HEIGHT_SMALL, HEADER_SIZE, HEADER_SIZE_SMALL } from './HomePage-styles';
import { createTiming } from '../../utils/animations';
import { SPACING_REGULAR, SPACING_BIG } from '../../styles/common';
import * as gameActions from '../../actions/game';
import * as userActions from '../../actions/user';
import type { HomePageProps } from './HomePage-types';

const logo = require('../../assets/img/pgssoftware-logo-white-300px.png');

class HomePage extends Component {

  static navigationOptions = {
    header: {
      visible: false,
    },
  };

  constructor(props) {
    super(props);

    this.imageHeight = new Animated.Value(IMAGE_HEIGHT);
    this.textSize = new Animated.Value(HEADER_SIZE);
    this.textMargin = new Animated.Value(-SPACING_BIG);
  }

  componentWillMount() {
    this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this.keyboardDidShow);
    this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this.keyboardDidHide);
  }

  componentWillUnmount() {
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
  }

  props: HomePageProps;

  imageHeight: Object;

  textSize: Object;

  textMargin: Object;

  keyboardDidShow: Function;

  keyboardDidShowListener: Function;

  keyboardDidHide: Function;

  keyboardDidHideListener: Function;

  keyboardDidShow = () => {
    Animated.parallel([
      createTiming(Animated, this.imageHeight, IMAGE_HEIGHT_SMALL),
      createTiming(Animated, this.textSize, HEADER_SIZE_SMALL),
      createTiming(Animated, this.textMargin, -SPACING_REGULAR),
    ]).start();
  };

  keyboardDidHide = () => {
    Animated.parallel([
      createTiming(Animated, this.imageHeight, IMAGE_HEIGHT),
      createTiming(Animated, this.textSize, HEADER_SIZE),
      createTiming(Animated, this.textMargin, -SPACING_BIG),
    ]).start();
  };

  render() {
    const {
      navigation: { navigate },
      actions,
    } = this.props;

    return (
      <KeyboardAvoidingView
        style={styles.container}
      >
        <Animated.Image source={logo} style={[styles.logo, { height: this.imageHeight }]} />

        <Animated.Text
          style={[styles.text, { fontSize: this.textSize, marginTop: this.textMargin }]}
        >
          Planning Poker
        </Animated.Text>

        <HomePageForm
          containerStyle={styles.formContainer}
        />
      </KeyboardAvoidingView>
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
