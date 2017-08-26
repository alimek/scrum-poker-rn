import React from 'react';
import { View, Text } from 'react-native';

var enhanceComponent = (Component) =>
  class Enhance extends React.Component {
    render() {
      console.log(this.props)
      return (
        <View>
          <Text style={{ fontSize: 30 }}>Im high-order component</Text>
          <Component
            {...this.state}
            {...this.props}
          />
        </View>
      );
    }
  };

export default enhanceComponent;
