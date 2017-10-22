import React, {Component} from 'react';
import {View, Text, Keyboard} from 'react-native';
import {LoginInput, Button, Spinner, AuthSmallButton} from './common';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import {Theme} from './common/Theme';
import {connect} from 'react-redux';
import {
  emailChanged,
  passwordChanged,
  loginUser,
  checkAuth,
  determineAuthPage,
  nameChanged,
  createUser
} from '../actions';
import firebase from 'firebase';

class LoginForm extends Component{

  componentWillMount() {

  }


  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onNameChange(text) {
    this.props.nameChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  onLoginPress(){
    const {email, password} = this.props;
    this.props.loginUser({email, password});
  }

  onCreateUserPress(){
    const {firstName, email, password} = this.props;
    this.props.createUser({firstName, email, password});
  }

  renderCreateForm() {
      if(this.props.createAccount) {
        return(
          <LoginInput
            value={this.props.firstName}
            onChangeText = {this.onNameChange.bind(this)}
            placeholder="First name"
            icon="user"
          />
        );
      }
  }

  renderOptionsBar(){
    if(this.props.createAccount) {
      return(
        <View style={{flexDirection:'row', justifyContent: 'center'}}>
          <View style={{marginTop: 10, marginRight: 20}}>
            <AuthSmallButton onPress={()=> {return(this.props.determineAuthPage())}}>
              Already have an account? Login
            </AuthSmallButton>
          </View>
        </View>
      );
    } else {
      return(
        <View style={{flexDirection:'row', justifyContent: 'space-between'}}>
          <View style={{ marginTop: 10, marginLeft: 20}}>
            <AuthSmallButton>
              Forgot password?
            </AuthSmallButton>
          </View>

          <View style={{marginTop: 10, marginRight: 20}}>
            <AuthSmallButton onPress={()=> {return(this.props.determineAuthPage())}}>
              New here? Signup
            </AuthSmallButton>
          </View>
        </View>
      );
    }
  }
  renderButton() {
    if(this.props.loading) {
      return(
        <View style={{alignSelf:'center', marginTop: 10, flexDirection: 'row'}}>
          <Spinner/>
        </View>
      );
    } else if(this.props.createAccount) {
        return(
          <View style={{alignSelf:'center', marginTop: 5, flexDirection: 'row'}}>
            <Button
              onPress={this.onCreateUserPress.bind(this)}
              type='auth'
            >
              CREATE ACCOUNT
            </Button>
          </View>
        );
    } else {
      return(
        <View style={{alignSelf:'center', marginTop: 5, flexDirection: 'row'}}>
          <Button
            onPress={this.onLoginPress.bind(this)}
            type='auth'
          >
            LOGIN
          </Button>
        </View>
      );
    }
  }

  render() {
    return(
      <View style={{justifyContent: 'center', flex:1}}>
          <View style={{alignSelf:'center', marginBottom: 30, alignItems: 'center'}}>
            <Icon name="paper-clip"size={70} color={Theme.purple}/>
            <Text style={{fontSize: 24, color: Theme.purple, fontFamily:'Futura-Medium'}}>
              Todo List App
            </Text>
          </View>
          {this.renderCreateForm()}
          <LoginInput
            value={this.props.email}
            onChangeText = {this.onEmailChange.bind(this)}
            placeholder="Email address"
            icon="envelope"
          />
          <LoginInput
            value={this.props.password}
            onChangeText = {this.onPasswordChange.bind(this)}
            placeholder="Password"
            icon="lock"
            secureTextEntry={!this.props.createAccount}//makes password visible when creating an account but hidden when logging in
          />

          {this.renderOptionsBar()}

          <View style={{marginTop: 10, alignSelf: 'center'}}>
            <Text style={{color: 'red'}}>
              {this.props.error}
            </Text>
          </View>

          {this.renderButton()}
      </View>
    );
  }
}

const mapStateToProps = state => {
  return{
    email: state.auth.email,
    password: state.auth.password,
    error: state.auth.error,
    loading: state.auth.loading,
    user: state.auth.user,
    createAccount: state.auth.createAccount,
    firstName: state.auth.firstName
  }
}

export default connect(mapStateToProps, {
  emailChanged,
  passwordChanged,
  loginUser,
  determineAuthPage,
  nameChanged,
  createUser
})(LoginForm);
