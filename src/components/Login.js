import React, {Component} from 'react';
import {View, Text} from 'react-native';
import LoginForm from './LoginForm';
import {Spinner} from './common';
import {connect} from 'react-redux';
import {checkAuth} from '../actions';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import {Theme} from './common/Theme';

class Login extends Component {

  componentWillMount(){
    this.props.checkAuth()
  }

  renderPage(){
    if(this.props.loadAuth) {
      return(
        <View style={{flex: 1, justifyContent:'center', alignItems:'center'}}>
          <Icon name="paper-clip"size={70} color={Theme.lightGrey}/>
        </View>
      );
    } else {
      return(
        <LoginForm/>
      );
    }
  }

  render(){
    return(
      <View style={{flex:1}}>
        {this.renderPage()}
      </View>
    )
  }
}

const mapStateToProps = state => {
  return{
    loadAuth: state.auth.loadAuth
  }
}

export default connect(mapStateToProps, {checkAuth})(Login);
