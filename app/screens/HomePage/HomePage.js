// @flow
import React, { Component } from 'react';
import { Animated, Keyboard, KeyboardAvoidingView } from 'react-native';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import { HomePageForm, Warning } from '../../components';
import { createTiming } from '../../utils/animations';
import { gameEnter } from '../../actions/game';
import { hasLoginErrorSelector } from '../../selectors/userSelectors';

import styles, {
  IMAGE_HEIGHT,
  IMAGE_HEIGHT_SMALL,
  HEADER_SIZE,
  HEADER_SIZE_SMALL,
} from './HomePage-styles';
import { SPACING_REGULAR, SPACING_BIG } from '../../styles/common';

import type { HomePageProps } from './HomePage-types';

const logo = require('../../assets/img/pgssoftware-logo-white-300px.png');

class HomePage extends Component {

  static navigationOptions = {
    header: {
      visible: false,
    },
  };

  componentWillMount() {
    this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this.keyboardDidShow);
    this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this.keyboardDidHide);
  }

  componentWillUnmount() {
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
  }

  imageHeight = new Animated.Value(IMAGE_HEIGHT);

  textSize = new Animated.Value(HEADER_SIZE);

  textMargin = new Animated.Value(-SPACING_BIG);

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

  handleSubmit = (validFormData) => {
    const { submitForm } = this.props;
    return submitForm(validFormData);
  }

  render() {
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
          onSubmit={this.handleSubmit}
        />
        {this.props.loginError &&
          <Warning>Login error</Warning>
        }
      </KeyboardAvoidingView>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  submitForm: formData => dispatch(gameEnter(formData)),
});

const selector = createSelector(
  hasLoginErrorSelector,
  (loginError) => ({
    loginError,
  }),
);

export default connect(
  selector,
  mapDispatchToProps,
)(HomePage);
