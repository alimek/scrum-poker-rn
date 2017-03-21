// @flow
import React from 'react';
import ReactNative from 'react-native';

const {
  View,
  Text,
} = ReactNative;

const GamePage = () => (
  <View>
    <Text>GamePage</Text>
  </View>
);

GamePage.navigationOptions = {
  title: 'Game Page',
};

export default GamePage;
