// @flow
import React, { Component } from 'react';
import { TextInput, View, Animated } from 'react-native';

import { createTiming } from '../../utils/animations';
import styles, { PLACEHOLDER_ACTIVE, PLACEHOLDER_INACTIVE } from './Input-styles';

/**
 * to be wrapped with redux-form Field component
*/
class Input extends Component {
  constructor(props) {
    super(props);

    this.placeholderPosition = new Animated.Value(35);
    this.placeholderSize = new Animated.Value(PLACEHOLDER_INACTIVE);
    this.borderWidth = new Animated.Value(0);
  }

  componentWillReceiveProps(nextProps) {
    const { active } = nextProps.meta;
    const { value } = nextProps.input;

    return active || value ? this.onInputFocus(active) : this.onInputBlur(active);
  }

  onInputFocus(active: Boolean) {
    Animated.parallel([
      createTiming(Animated, this.placeholderPosition, 10),
      createTiming(Animated, this.placeholderSize, PLACEHOLDER_ACTIVE),
      createTiming(Animated, this.borderWidth, active ? 100 : 0, active ? 600 : 300),
    ]).start();
  }

  onInputBlur(active: Boolean) {
    Animated.parallel([
      createTiming(Animated, this.placeholderPosition, 35),
      createTiming(Animated, this.placeholderSize, PLACEHOLDER_INACTIVE),
      createTiming(Animated, this.borderWidth, active ? 100 : 0, active ? 600 : 300),
    ]).start();
  }

  placeholderPosition: Object;

  borderWidth: Object;

  placeholderSize: Object;

  render() {
    const {
      meta,
      input,
      placeholder,
      ...inputProps,
    } = this.props;

    const placeholderAnimation = [
      styles.placeholder,
      {
        top: this.placeholderPosition,
        fontSize: this.placeholderSize,
      },
    ];

    const borderAnimation = [
      styles.borderInactive,
      {
        width: this.borderWidth.interpolate({
          inputRange: [0, 100],
          outputRange: ['100%', '0%'],
        }),
      },
    ];

    return (
      <View style={styles.inputContainer}>
        <Animated.Text style={placeholderAnimation}>
          {placeholder.toUpperCase()}
        </Animated.Text>

        <TextInput
          style={styles.text}
          onChangeText={input.onChange}
          onBlur={input.onBlur}
          onFocus={input.onFocus}
          value={input.value}
          underlineColorAndroid={'transparent'}
          {...inputProps}
        />

        <View style={styles.floatingBorderContainer}>
          <Animated.View style={styles.borderActive} />
          <Animated.View style={borderAnimation} />
        </View>
      </View>
    );
  }
}

export default Input;
