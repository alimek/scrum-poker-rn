// @todo add flow support

export const createTiming = (animated, property, toValue, duration = 300) =>
  animated.timing(property, {
    duration,
    toValue,
  });
