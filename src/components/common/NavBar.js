import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Theme} from './Theme';
import {NavButton} from '../common';
import {Actions} from 'react-native-router-flux';
import firebase from 'firebase';


class NavBar extends Component {

  renderLogoutButton(){
    if(this.props.renderLogout){
      return(
        <NavButton icon="menu" onPress={this.props.onLogout}/>
      );
    } else {
      return(
        <View></View>
      );
    }
  }



  renderBack(){
    if(this.props.renderBack){
      return(
        <NavButton icon="arrow-left" onPress={()=>this.onBack()}/>
      );
    } else {
      return(
        <View></View>
      );
    }
  }

  onBack(){
    this.props.onBack();
    Actions.pop();
  }
  render({renderLogout, renderBack, onLogout, onBack} = this.props) {
    return(

        <View style={styles.containerStyle}>
          <View style={styles.barContainer}>
            <View style={styles.barButton}>{this.renderBack()}</View>
            <View style={styles.barHeader}><Text style={styles.textStyle}>{this.props.children}</Text></View>
            <View style={styles.barButton}>{this.renderLogoutButton()}</View>
          </View>
        </View>
    );
  }
}

const styles = {
  containerStyle:{
    height: 64,
    backgroundColor: 'white',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  barContainer: {
    height: 44,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center'
  },
  barHeader: {
    flex:1,
    alignItems: 'center'
  },
  barButton: {
    marginLeft: 8,
    marginRight: 12
  },
  textStyle: {
    color:Theme.purple,
    fontSize: 18,
    fontWeight: 'normal'
  }
}

export {NavBar};
