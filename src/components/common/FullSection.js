import React from 'react';
import {View, Text} from 'react-native';
import {Theme} from './Theme';

const FullSection = ({children}) => {
  return(
    <View style={styles.containerStyle}>
      {children}
    </View>
  );
}

const styles = {
  containerStyle: {
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderColor: Theme.lineColor,
    flexDirection: 'row'
  }
}

export {FullSection};
