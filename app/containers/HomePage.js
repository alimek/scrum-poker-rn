import React from 'react';
import ReactNative from 'react-native';
import { Input } from '../components';

const background = require('../assets/img/team.jpg');
const logo = require('../assets/img/pgssoftware-logo-white-150px.png');

const {
  View,
  Text,
  Button,
  Image,
  StyleSheet,
} = ReactNative;

const HomePage = ({ navigation: { navigate } }) => (
  <View>
    <Image source={background} style={{ position: 'absolute' }} />
    <Image source={logo} />
    <Text>Planning poker - let's plan your sprint!</Text>
    <Input
      style={{height: 40, borderColor: 'gray', borderWidth: 1}}
    />
    <Button title="Go to GamePage" onPress={() => navigate('Game')} />
  </View>
);

HomePage.propTypes = {
  navigation: React.PropTypes.shape({
    navigate: React.PropTypes.func.isRequired,
  }).isRequired,
};

const styles = StyleSheet.create({
  redText: { color: 'red' }
});

export default HomePage;
