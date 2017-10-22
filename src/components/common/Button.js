import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Theme} from './Theme';

class Button extends Component {

  selectContainerStyle(){
      if (this.props.type=='auth'){
        return styles.authContainerStyle
      } else if (this.props.type=='task') {
        return styles.taskContainerStyle
      } else if (this.props.type=='purple') {
        return styles.purpleContainerStyle
      }
  }

  selectTextStyle(){
      if (this.props.type=='auth'){
        return styles.authTextStyle
      } else if (this.props.type=='task') {
        return styles.taskTextStyle
      }
  }

  render({children, onPress, type}=this.props) {
    return(
      <TouchableOpacity
        onPress={onPress}
      >
        <View style={this.selectContainerStyle()}>
          <Text style={this.selectTextStyle()}>{children}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = {
    authContainerStyle: {
      backgroundColor:  'white',
      padding: 15,
      borderColor: Theme.purple,
      borderRadius: 50,
      borderWidth: 1,
      minWidth: 100,
      justifyContent: 'center',
      alignItems: 'center',
      margin: 0
    },
    taskContainerStyle: {
      backgroundColor:  Theme.red,
      padding: 15,
      borderColor: Theme.red,
      borderRadius: 50,
      borderWidth: 1,
      minWidth: 100,
      justifyContent: 'center',
      alignItems: 'center',
      margin: 0
    },
    purpleContainerStyle: {
      backgroundColor:  Theme.purple,
      padding: 15,
      borderColor: Theme.purple,
      borderRadius: 50,
      borderWidth: 1,
      minWidth: 100,
      justifyContent: 'center',
      alignItems: 'center',
      margin: 0
    },
    authTextStyle: {
      fontSize: 13,
      color: Theme.purple,
      fontWeight: 'bold'
    },
    taskTextStyle: {
      fontSize: 13,
      color: 'white',
      fontWeight: 'bold'
    }
}
export {Button};
