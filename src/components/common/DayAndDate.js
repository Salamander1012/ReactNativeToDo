import React from 'react';
import {View, Text} from 'react-native';
import {Theme} from './Theme';

const DayAndDate = () => {

  var d = new Date();
  var dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  var monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  var suffix = '';
  if((d.getDate()-1)%10==0) {
      suffix = 'st';
  } else if ((d.getDate()-2)%10==0) {
      suffix = 'nd';
  } else if ((d.getDate()-3)%10==0) {
      suffix = 'rd';
  } else {
    suffix = 'th';
  }
  
  const {
    dateContainer,
    dayOfTheWeek,
    dateText
  } = styles;

  return(
    <View style={dateContainer}>
      <Text style={dayOfTheWeek}>{dayNames[d.getDay()]}</Text>
      <Text style={dateText}>, {d.getDate()}{suffix} {monthNames[d.getMonth()]}</Text>
    </View>
  );
}

const styles = {
  dateContainer: {
    flexDirection: 'row',
    marginTop: 5
  },
  dayOfTheWeek: {
    fontWeight: 'bold',
    //marginRight: 20,
    color: Theme.lightGrey
  },
  dateText: {
    fontWeight: 'normal',
    color: Theme.lightGrey
  }
}
export {DayAndDate};
