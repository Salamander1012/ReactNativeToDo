import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Theme} from './Theme';

class TaskCount extends Component{
  render() {
    return(
      <View style={styles.containerStyle}>
        <Text style={styles.numberStyle}>52</Text>
        <View style={styles.textContainer}>
          <Text style={styles.textStyle}>{this.props.children}</Text>
          <Text style={styles.textStyle}>Tasks</Text>
        </View>
      </View>
    );
  }
}

const styles = {
  containerStyle: {
    flex: 1,
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  numberStyle: {
    padding:5,
    color: Theme.purple,
    fontSize: 18,
    fontWeight: 'bold'
  },
  textContainer:{
    padding: 5,

  },
  textStyle:{
    color: Theme.purple
  }
}

export {TaskCount};
