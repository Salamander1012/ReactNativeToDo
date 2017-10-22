import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {NavBar} from './common';
import TaskForm from './TaskForm';
import {connect} from 'react-redux';
import {clearFields} from '../actions';

class TaskCreate extends Component {

  onBack(){
    this.props.clearFields();
  }

  render() {
    return(
      <View style={{flex:1}}>
        <NavBar
          renderBack={true}
          onBack = {()=>this.onBack()}
        >
          Create New Task
        </NavBar>
        <TaskForm/>
      </View>
    );
  }
}

export default connect(null, {clearFields})(TaskCreate);
