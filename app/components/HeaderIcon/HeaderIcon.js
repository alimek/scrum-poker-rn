import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import type { HeaderIcon } from './HeaderIcon-types';

export default ({ navigate, icon, destination, placement }: HeaderIcon) => (
  <Icon
    name={icon}
    onPress={() => navigate(destination)}
    size={26}
    style={placement === 'left'
      ? { paddingLeft: 15 }
      : { paddingRight: 20 }
    }
  />
);
