import React from 'react';
import ReactNative from 'react-native';

const {
  View,
  Text,
  Button,
} = ReactNative;

const HomePage = ({ navigation: { navigate }}) => (
  <View>
    <Text>HomePage</Text>
    <Button title="Go to GamePage" onPress={() => navigate('Game')} />
  </View>
);

HomePage.propTypes = {
  navigation: React.PropTypes.shape({
    navigate: React.PropTypes.func.isRequired,
  }).isRequired,
};

HomePage.navigationOptions = {
  title: 'Home Page',
};

export default HomePage;
