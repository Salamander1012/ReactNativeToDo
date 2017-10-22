import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Theme} from '../common/Theme';

const AuthSmallButton = ({children, onPress}=this.props) => {
  return(
    <TouchableOpacity onPress={onPress}>
      <Text style={{color: Theme.lightGrey}}>
        {children}
      </Text>
    </TouchableOpacity>
  );
}

export {AuthSmallButton};
