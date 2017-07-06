// flow
import React, { PureComponent } from 'react';
import { View, Text, Animated, Easing, TouchableWithoutFeedback } from 'react-native';
import styles, { RADIUS } from './Button-styles';

export default class Ripple extends PureComponent {
  static defaultProps = {
    ...TouchableWithoutFeedback.defaultProps,
    rippleColor: 'rgb(0, 0, 0)',
    rippleOpacity: 0.30,
    rippleDuration: 400,
    rippleSize: 0,
    rippleContainerBorderRadius: 0,
    rippleCentered: false,
    rippleSequential: false,
    disabled: false,
  };

  constructor(props) {
    super(props);

    this.state = {
      width: 0,
      height: 0,
      ripples: [],
    };
  }

  render() {
    let { ripples } = this.state;
    let { onPress, onPressIn, onPressOut, onLongPress, onLayout } = this;
    let {
      delayLongPress,
      delayPressIn,
      delayPressOut,
      disabled,
      hitSlop,
      pressRetentionOffset,
      children,
      rippleContainerBorderRadius,
      onLayout: __ignored__,
      ...props
    } = this.props;

    let touchableProps = {
      delayLongPress,
      delayPressIn,
      delayPressOut,
      disabled,
      hitSlop,
      pressRetentionOffset,
      onPress,
      onPressIn,
      onPressOut,
      onLongPress: props.onLongPress? onLongPress : undefined,
      onLayout,
    };

    let containerStyle = {
      borderRadius: rippleContainerBorderRadius,
    };

    return (
      <TouchableWithoutFeedback {...touchableProps}>
        <Animated.View {...props} pointerEvents="box-only">
          <Text style={styles.text}>{children.toUpperCase()}</Text>

          <View style={[styles.container, containerStyle]}>
          </View>
        </Animated.View>
      </TouchableWithoutFeedback>
    );
  }
}
