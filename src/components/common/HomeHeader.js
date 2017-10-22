import React from 'react';
import {View, Text} from 'react-native';
import {DayAndDate} from './DayAndDate';
import {Theme} from './Theme';

const HomeHeader = ({name}=this.props) => {

  const {
    containerStyle,
    greetingText,
    nameText
  } = styles;
  console.log('home header')
  return(
    <View style={containerStyle}>
      <Text style={greetingText}>Hello</Text>
      <Text style={nameText}>{name}</Text>
      <DayAndDate/>
    </View>
  );
}


const styles = {
  containerStyle: {
    marginLeft: 40,
    paddingTop:20
  },
  nameText: {
    fontSize: 50,
    color: Theme.purple,
    fontWeight: 'bold'
  },
  greetingText: {
    fontSize: 50,
    color: Theme.purple,
    fontWeight: 'normal'
  }
}
export {HomeHeader};
