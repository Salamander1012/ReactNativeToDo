import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import {Theme} from './Theme';


const NavButton = ({icon, onPress}=this.props) => {
  return(

    <View style={styles.containerStyle}>
    <TouchableOpacity onPress={onPress}>
      <Icon name={icon} size={25} color={Theme.purple}/>
    </TouchableOpacity>
    </View>

  );
}

styles = {
  containerStyle: {
    justifyContent: 'center',
    alignItems: 'center'
  }
}
export {NavButton};
