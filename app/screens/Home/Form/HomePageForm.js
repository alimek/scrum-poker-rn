import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { View } from 'react-native';
import { Button, Input } from '../../../components';
import { required } from '../../../utils/form';

const HomePageForm = ({
  onSubmit,
  handleSubmit,
  invalid,
}: {
  onSubmit: Function,
  // redux form built in methods
  handleSubmit: Function,
  invalid: Boolean,
}) => (
  <View>
    <Field name="gameId" component={Input} placeholder="Game ID" validate={[required]} />
    <Field name="userName" component={Input} placeholder="User Name" validate={[required]} />
    <Button raised title="ENTER" onPress={handleSubmit(onSubmit)} disabled={invalid} />
  </View>
);

export default reduxForm({ form: 'homepage' })(HomePageForm);
