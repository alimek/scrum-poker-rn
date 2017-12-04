// @flow
import React, { Component } from 'react';
import { KeyboardAvoidingView, View, Image, Text } from 'react-native';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import HomePageForm from './Form';
import { gameEnter } from '../../actions/game';
import styles from './HomePage-styles';
import logo from '../../assets/img/pgssoftware-logo-white-300px.png';
import { hasLoginErrorSelector } from '../../selectors/userSelectors';
import { gameIdSelector } from '../../selectors/gameSelectors';

// import type { HomePageProps } from './HomePage-types';

type HomePageProps = {
  loginError: string,
  submitForm: Function,
  gameId: string,
};

class HomePage extends Component<HomePageProps> {
  handleSubmit = (validFormData) => {
    const { submitForm } = this.props;

    return submitForm(validFormData);
  };

  render() {
    return (
      <View style={styles.container}>
        <Image source={logo} style={styles.logo} />

        <KeyboardAvoidingView style={styles.formContainer} behavior="padding">
          <HomePageForm
            initialValues={{ gameId: this.props.gameId }}
            onSubmit={this.handleSubmit}
          />
          {this.props.loginError && <Text style={styles.errorContainer}>Login error</Text>}
        </KeyboardAvoidingView>
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  submitForm: formData => dispatch(gameEnter(formData)),
});

const selector = createSelector(hasLoginErrorSelector, gameIdSelector, (loginError, gameId) => ({
  loginError,
  gameId,
}));

export default connect(selector, mapDispatchToProps)(HomePage);
