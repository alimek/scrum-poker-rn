// flow
import React, { PureComponent } from 'react';
import { View, Text, Animated, Easing, TouchableWithoutFeedback } from 'react-native';
import styles, { RADIUS } from './Button-styles';

export default class Ripple extends PureComponent {
  static defaultProps = {
    ...TouchableWithoutFeedback.defaultProps,
    rippleColor: 'rgb(0, 0, 0)',
    rippleOpacity: 0.30,
    rippleDuration: 1200,
    rippleSize: 0,
    rippleContainerBorderRadius: 0,
    rippleCentered: false,
    rippleSequential: false,
    disabled: false,
  };

  static propTypes = {
    ...Animated.View.propTypes,
    ...TouchableWithoutFeedback.propTypes,
  };

  constructor(props) {
    super(props);
    this.onLayout = this.onLayout.bind(this);
    this.onPress = this.onPress.bind(this);
    this.onPressIn = this.onPressIn.bind(this);
    this.onPressOut = this.onPressOut.bind(this);
    this.onLongPress = this.onLongPress.bind(this);
    this.renderRipple = this.renderRipple.bind(this);
    this.unique = 0;
    this.mounted = false;

    this.state = {
      width: 0,
      height: 0,
      ripples: [],
    };
  }

  componentDidMount() {
    this.mounted = true;
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  onLayout(event) {
    const { width, height } = event.nativeEvent.layout;
    const { onLayout } = this.props;

    if (typeof onLayout === 'function') {
      onLayout(event);
    }

    this.setState({ width, height });
  }

  onPress(event) {
    const { ripples } = this.state;
    const { onPress, rippleSequential } = this.props;

    if (!rippleSequential || !ripples.length) {
      if (typeof onPress === 'function') {
        requestAnimationFrame(() => onPress(event));
      }

      this.startRipple(event);
    }
  }

  onLongPress(event) {
    const { onLongPress } = this.props;

    if (typeof onLongPress === 'function') {
      requestAnimationFrame(() => onLongPress(event));
    }

    this.startRipple(event);
  }

  onPressIn(event) {
    const { onPressIn } = this.props;

    if (typeof onPressIn === 'function') {
      onPressIn(event);
    }
  }

  onPressOut(event) {
    const { onPressOut } = this.props;

    if (typeof onPressOut === 'function') {
      onPressOut(event);
    }
  }

  props: {
    rippleColor: string,
    rippleOpacity: number,
    rippleDuration: number,
    rippleSize: number,
    rippleContainerBorderRadius: number,
    rippleCentered: bool,
    rippleSequential: bool,
    disabled: bool,
    children: Object,
    onLayout: Function,
    onPress: Function,
    onPressIn: Function,
    onPressOut: Function,
    onLongPress: Function,
  }

  startRipple(event) {
    const { rippleDuration, rippleCentered, rippleSize } = this.props;
    const { width, height } = this.state;

    const w2 = 0.5 * width;
    const h2 = 0.5 * height;

    const { locationX, locationY } = rippleCentered
      ? { locationX: w2, locationY: h2 }
      : event.nativeEvent;

    const offsetX = Math.abs(w2 - locationX);
    const offsetY = Math.abs(h2 - locationY);

    const R = rippleSize > 0
      ? 0.5 * rippleSize
      : Math.sqrt((w2 + offsetX) ** 2) + ((h2 + offsetY) ** 2);

    const ripple = {
      unique: this.unique += 1,
      progress: new Animated.Value(0),
      locationX,
      locationY,
      R,
    };

    Animated
      .timing(ripple.progress, {
        toValue: 1,
        easing: Easing.out(Easing.ease),
        duration: rippleDuration,
        useNativeDriver: true,
      })
      .start(() => {
        if (this.mounted) {
          this.setState(({ ripples }) => ({ ripples: ripples.slice(1) }));
        }
      });

    this.setState(({ ripples }) => ({ ripples: ripples.concat(ripple) }));
  }

  renderRipple({ unique, progress, locationX, locationY, R }) {
    const { rippleColor, rippleOpacity } = this.props;

    const rippleStyle = {
      top: locationY - RADIUS,
      left: locationX - RADIUS,
      backgroundColor: rippleColor,

      transform: [{
        scale: progress.interpolate({
          inputRange: [0, 1],
          outputRange: [0.5 / RADIUS, R / RADIUS],
        }),
      }],

      opacity: progress.interpolate({
        inputRange: [0, 1],
        outputRange: [rippleOpacity, 0],
      }),
    };

    return (
      <Animated.View style={[styles.ripple, rippleStyle]} key={unique} />
    );
  }

  render() {
    const { ripples } = this.state;
    const { onPress, onPressIn, onPressOut, onLongPress, onLayout } = this;
    const {
      disabled,
      children,
      rippleContainerBorderRadius,
      ...props
    } = this.props;

    const touchableProps = {
      disabled,
      onPress,
      onPressIn,
      onPressOut,
      onLongPress,
      onLayout,
    };

    const containerStyle = {
      borderRadius: rippleContainerBorderRadius,
    };

    return (
      <TouchableWithoutFeedback {...touchableProps}>
        <Animated.View {...props} pointerEvents="box-only">
          <Text style={styles.text}>{children.toUpperCase()}</Text>
          <View style={[styles.container, containerStyle]}>
            {ripples.map(this.renderRipple)}
          </View>
        </Animated.View>
      </TouchableWithoutFeedback>
    );
  }
}
