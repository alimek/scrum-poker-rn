import React from 'react';
import { Button } from 'react-native-elements';
import { BRAND_PRIMARY } from '../../styles/common';

const ButtonPrimary = props => (
  <Button
    {...props}
    backgroundColor={BRAND_PRIMARY}
    containerViewStyle={{ marginLeft: 0, marginRight: 0 }}
  />
);

export default ButtonPrimary;
