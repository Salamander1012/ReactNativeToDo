import React, {Component} from 'react';
import { View, Text, ScrollView,  TouchableOpacity, TouchableWithoutFeedback, AlertIOS, ListView} from 'react-native';
import {HomeHeader, HomeTaskCount, FloatingButton, NavBar, Spinner, GroupGrid, Input} from './common';
import {connect} from 'react-redux';
import {logOutUser, getUserData, createGroup} from '../actions';
import firebase from 'firebase';
import {Actions} from 'react-native-router-flux';
import Modal from 'react-native-modalbox';


class Home extends Component {

  state={
    modalIsOpen: false,
    text: ''
  }
  componentWillMount(){
    this.props.getUserData();

  }

  onLogoutPress(){
    this.props.logOutUser()
  }

  onModalOpen(){
    console.log('modal opened')
  }

  openCreateGroupForm(){
    console.log('create group form opened');
    AlertIOS.prompt(
      'Enter Group Name',
      '',
      [
        {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
        {text: 'OK', onPress: name => this.props.createGroup(name, this.props.user, this.props.data.groups)},
      ],
      'plain-text'
    );
  }

  renderPage() {
    if(this.props.loading) {
      return(
        <View style={{flex: 1, justifyContent:'center', alignItems:'center'}}>
          <Spinner/>
        </View>
      );
    } else {
      return(
        <View style={styles.containerStyle}>
            <NavBar
              renderLogout={true}
              onLogout={()=>{return(this.onLogoutPress())}}
              renderBack={false}
            >

            </NavBar>
            <HomeHeader name={this.props.data.name}/>
            <HomeTaskCount/>
            <ScrollView>
            <GroupGrid groups={this.props.data.groups} taskCount={this.props.data.taskCount} onCreateGroup={()=>this.openCreateGroupForm()}/>
            </ScrollView>
            <FloatingButton/>
            <Modal isOpen={this.state.modalIsOpen}>
              <Text>akjhask</Text>
            </Modal>
        </View>
      );
    }
  }

  render(){
    console.log(this.props.data.taskCount);
    return(
      <View style={{flex:1}}>
        {this.renderPage()}
      </View>
    );
  }
}

const styles = {
  containerStyle: {
    backgroundColor: 'white',
    flex:1
  }
}

const mapStateToProps = state => {
  return{
    user: state.auth.user,
    data: state.home.data,
    loading: state.home.loading
  }
}

export default connect(mapStateToProps, {logOutUser, getUserData, createGroup})(Home);
