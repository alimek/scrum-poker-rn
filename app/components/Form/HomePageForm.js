import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { View } from 'react-native';
import { Input, RippleButton } from '../';

import styles from './HomePageForm-styles';

const HomePageForm = ({
  containerStyle,
  onSubmit,
  handleSubmit,
}: {
  containerStyle: Object,
  onSubmit: Function,
  handleSubmit: Function, // redux form built in method
}) =>
  <View style={containerStyle}>
    <View style={styles.formInner}>
      <Field
        name={'gameId'}
        component={Input}
        placeholder={'Game Id'}
        validate={[
          val => (val ? undefined : 'gameId field is required'),
          val => (val && val.length === 24 ? undefined : 'gameID is made up of 24 characters'),
        ]}
      />
      <Field
        name={'userName'}
        component={Input}
        placeholder={'User Name'}
        validate={[
          val => (val ? undefined : 'User name field is required'),
          val => (val && val.length >= 3 ? undefined : 'User name must be at least 3 characters long'),
        ]}
      />
      <RippleButton onPress={handleSubmit(onSubmit)}>Enter</RippleButton>
    </View>
  </View>;

export default reduxForm({ form: 'HomePageForm' })(HomePageForm);
