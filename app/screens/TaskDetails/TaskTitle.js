// @flow
import React from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import taskDetailsSelector from './TaskDetailsSelector';

// The only way to have header title based on store
const Title = ({ name }: string) => (
  <Text>{name}</Text>
);

export default connect(taskDetailsSelector)(Title);
