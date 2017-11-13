// @flow
import React, { Component } from 'react';
import { Animated, Keyboard, KeyboardAvoidingView, View, Image, Text, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import HomePageForm from './Form';
import { gameEnter } from '../../actions/game';
import styles from './HomePage-styles';
import logo from '../../assets/img/pgssoftware-logo-white-300px.png';
import { hasLoginErrorSelector } from '../../selectors/userSelectors';

// import type { HomePageProps } from './HomePage-types';

type HomePageProps = {
  loginError: string,
  submitForm: Function,
}

class HomePage extends Component {
  props: HomePageProps;

  handleSubmit = (validFormData) => {
    const { submitForm } = this.props;

    return submitForm(validFormData);
  }

  render() {
    return (
      <View style={styles.container}>
        <Image source={logo} style={styles.logo} />

        <KeyboardAvoidingView
          style={styles.formContainer}
          behavior={'padding'}
        >
          <HomePageForm onSubmit={this.handleSubmit} />
        </KeyboardAvoidingView>
        {this.props.loginError &&
          <Text>Login error</Text>
        }
      </View>
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
