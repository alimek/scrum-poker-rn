// @flow
import type { Children } from 'react';

export type ButtonProps = {
  style: Object,
  title: string,
  textStyle: ?Object,
  disabled: boolean,
  children: Children,
}

export type RippleButtonProps = {
  rippleColor: string,
  rippleOpacity: number,
  rippleDuration: number,
  rippleSize: number,
  rippleContainerBorderRadius: number,
  rippleCentered: bool,
  rippleSequential: bool,
  disabled: bool,
  children: Object,
  onPress: Function,
};
