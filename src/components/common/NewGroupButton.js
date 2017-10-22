import React, {Component} from 'react';
import {View, Text, Dimensions, TouchableOpacity} from 'react-native';
import {Theme} from './Theme';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import {Actions} from 'react-native-router-flux';

class NewGroupButton extends Component {

  constructor(props, state){
    super(props);
    this.state = {
        width: Dimensions.get("window").width
    }
    //console.log(this.state.width);
  }


  _handler = () => {
    this.setState({
      width: Dimensions.get("window").width
    });
  }
  componentWillMount() {
    Dimensions.addEventListener("change", this._handler);
  }

  componentWillUnmount() {
    // Important to stop updating state after unmount
    Dimensions.removeEventListener("change", this._handler);
  }



  

  render({onPress}=this.props) {
    return(
        <View>
        <View style={{

            width: this.state.width/2 -8,
            height:150,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'white',
            borderBottomWidth: 1,
            borderRightWidth: 1,
            borderColor: Theme.lineColor

        }}>
        <TouchableOpacity onPress={this.props.onPress}>
          <View style={styles.containerStyle}>
            <Icon name='plus' size={20} color={Theme.lightGrey}/>
            <View style={styles.textContainer}>
              <Text style={styles.titleStyle}>Create</Text>
              <Text style={styles.titleStyle}>Group</Text>
            </View>
          </View>
          </TouchableOpacity>
        </View>
        </View>

    );
  }
}



const styles = {
  box: {
    //margin: 8,
    width: Dimensions.get("window").width/2 -8,
    height:120,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderRightWidth: 1,
    borderColor: Theme.lineColor
  },
  containerStyle: {
    flex: 1,
    flexDirection: 'row',
    //padding: 30,
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
    margin: 10

  },
  textStyle:{
    color: Theme.lightGrey,
    fontSize: 12,
    //marginTop: 3
  },
  titleStyle:{
    color: Theme.lightGrey,
    fontSize: 16
  }
}

export {NewGroupButton};
