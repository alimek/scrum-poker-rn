// @flow
import React, { Component } from 'react';
import { TextInput, View, Animated, Text } from 'react-native';

import { createTiming } from '../../utils/animations';
import styles from './Input-styles';
import type { InputProps } from './Input-types';

/**
 * to be wrapped with redux-form Field component
*/
class Input extends Component {
  componentWillReceiveProps(nextProps: InputProps) {
    const { active } = nextProps.meta;
    const { value } = nextProps.input;

    return active || value ? this.onInputFocus(active) : this.onInputBlur(active);
  }

  onInputFocus(active: Boolean) {
    Animated.parallel([
      createTiming(Animated, this.textAnimation, 1),
      createTiming(Animated, this.borderAnimation, active ? 100 : 0, active ? 600 : 300),
    ]).start();
  }

  onInputBlur(active: Boolean) {
    Animated.parallel([
      createTiming(Animated, this.textAnimation, 0),
      createTiming(Animated, this.borderAnimation, active ? 100 : 0, active ? 600 : 300),
    ]).start();
  }

  props: InputProps;

  textAnimation = new Animated.Value(0);

  borderAnimation = new Animated.Value(0);

  textAnimation: Object;

  borderAnimation: Object;

  render() {
    const {
      meta,
      input,
      placeholder,
      ...inputProps
    } = this.props;

    const placeholderAnimation = [
      styles.placeholder,
      {
        transform: [
          {
            translateY: this.textAnimation.interpolate({
              inputRange: [0, 1],
              outputRange: [10, -10],
            }),
          },
          {
            translateX: this.textAnimation.interpolate({
              inputRange: [0, 1],
              outputRange: [5, -12],
            }),
          },
          {
            scale: this.textAnimation.interpolate({
              inputRange: [0, 1],
              outputRange: [1, 0.6],
            }),
          },
        ],
      },
    ];

    const borderAnimation = [
      styles.borderInactive,
      {
        width: this.borderAnimation.interpolate({
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

        {meta.touched && meta.error &&
          <Text style={styles.textError}>{meta.error}</Text>
        }

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
