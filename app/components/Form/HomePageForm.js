import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { View } from 'react-native';
import Input from '../Input/Input';
import RippleButton from '../Button/RippleButton';

import styles from './HomePageForm-styles';

const HomePageForm = ({
  containerStyle,
  onSubmit,
}: {
  containerStyle: Object,
  onSubmit: Function,
}) =>
  <View style={containerStyle}>
    <View style={styles.formInner}>
      <Field
        name={'gameId'}
        component={Input}
        placeholder={'Game Id'}
        validate={[
          val => (val ? undefined : 'gameId field is required'),
          val => (val && val.length >= 8 ? undefined : 'gameID must be at least 8 characters long'),
        ]}
      />
      <Field
        name={'userName'}
        component={Input}
        placeholder={'User Name'}
        validate={[
          val => (val ? undefined : 'User name field is required'),
          val => (val && val.length >= 8 ? undefined : 'User name must be at least 8 characters long'),
        ]}
      />
      <RippleButton
        onSubmit={onSubmit}
        style={styles.buttonContainer}
      >
        Enter
      </RippleButton>
    </View>
  </View>;

export default reduxForm({ form: 'HomePageForm' })(HomePageForm);
