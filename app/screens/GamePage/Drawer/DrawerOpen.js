import React, { Component } from 'react';
import { View, TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import styles from './GameDrawer-styles';
import type { Navigation } from '../../../types/navigation';

class DrawerOpen extends Component {

  state = {
    isOpen: false,
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ isOpen: !!nextProps.navigation.state.index });
  }

  props: Navigation;

  toggleDrawer = () => {
    const action = this.state.isOpen ? 'DrawerClose' : 'DrawerOpen';
    return this.props.navigation.navigate(action);
  }

  render() {
    return (
      <View style={styles.DrawerOpen}>
        <TouchableWithoutFeedback
          onPress={this.toggleDrawer}
        >
          <Icon name="list" size={30} color="#000" />
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

export default DrawerOpen;
