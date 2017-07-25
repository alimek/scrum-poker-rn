// @flow
import React from 'react';
import ReactNative from 'react-native';

const {
  View,
  Text,
} = ReactNative;

const GamePage = () => (
  <View>
    <Text>Successfully logged in, welcome to Game page</Text>
  </View>
);

GamePage.navigationOptions = {
  title: 'Game Page',
};

export default GamePage;
