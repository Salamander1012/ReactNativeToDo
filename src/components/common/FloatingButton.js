import React, {Component} from 'react';
import {View, Text, TouchableOpacity, TouchableWithoutFeedback} from 'react-native';
import {Theme} from './Theme';
import {Actions} from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/SimpleLineIcons';


//<Icon name="pencil" size={35} color="white"/>

class FloatingButton extends Component {
  render() {
    return(
      <View style={{height:4, flexDirection:'column', justifyContent:'flex-end', alignItems:'flex-end'}}>
        <TouchableOpacity onPress={()=>Actions.newTask()}>
          <View style={stylesTwo.bottom}></View>
          <View style={stylesTwo.top}></View>
          <View style={stylesTwo.addButton}>
            <Icon name="pencil" size={30} color="white"/>
          </View>

        </TouchableOpacity>
      </View>


    );
  }
}

const buttonDimensions= {
  width: 70,
  height: 70
};
const stylesTwo = {
  addButton: {
    backgroundColor:Theme.red,
    height:80,
    width:80,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:80,
    //position:'absolute',
    //bottom: 0,
    //right:0,
    height: buttonDimensions.height,
    width: buttonDimensions.width
  },
  bottom: {
    position: 'absolute',
    bottom:0,
    right:0,
    backgroundColor: Theme.red,
    height: buttonDimensions.height/2,
    width:buttonDimensions.width
  },
  top: {
    position: 'absolute',
    bottom:0,
    right:0,
    backgroundColor: Theme.red,
    height: buttonDimensions.height,
    width:buttonDimensions.width/2
  }
}

const styles={
  addButton: {
    backgroundColor: Theme.red,
    borderColor: Theme.red,
    borderWidth: 1,
    height: buttonDimensions.height,
    width: buttonDimensions.width,
    borderRadius: (buttonDimensions.height)/2,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 0,
    right:0,
  },
  bottom: {
    backgroundColor: Theme.red,
    borderColor: Theme.red,
    borderWidth: 1,
    height: buttonDimensions.height/2,
    width: buttonDimensions.width,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 0,
    right:0,
  },
  top: {
    backgroundColor: Theme.red,
    borderColor: Theme.red,
    borderWidth: 1,
    height: buttonDimensions.height,
    width: buttonDimensions.width/2,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 0,
    right:0,
  }
}
export {FloatingButton};
