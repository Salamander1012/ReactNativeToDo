import React, {Component} from 'react';
import {View, Text, ActionSheetIOS, DatePickerIOS, TouchableOpacity, Keyboard} from 'react-native';
import {Input,InputButton, Button} from './common';
import Modal from 'react-native-modalbox';
import {Theme} from './common/Theme';
import {connect} from 'react-redux';
import {taskNameChanged, groupChanged, dateChanged, createTask} from '../actions';



class TaskForm extends Component {

  BUTTONS = this.props.user.groups;
  //BUTTONS.unshift("test");
  CANCEL_BUTTON_INDEX = 0;
  options = {
    options: this.BUTTONS,
    cancelButtonIndex: this.CANCEL_BUTTON_INDEX,
    title: 'Category'
  };

  state = {
    showDatePicker: false
  }

  onTaskNameChange(text){
    this.props.taskNameChanged(text);
  }

  onCategoryPress(){
    Keyboard.dismiss();
    ActionSheetIOS.showActionSheetWithOptions(this.options, (buttonIndex)=>{
      if(buttonIndex!=this.CANCEL_BUTTON_INDEX) {
          this.props.groupChanged(this.options.options[buttonIndex]);
      }
    });
  }

  onShowDatePicker(){
    Keyboard.dismiss();
    this.setState({showDatePicker:!this.state.showDatePicker})
  }

  renderDate(){
    if(this.props.date){
        var d = new Date(this.props.date);
        var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
        var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
        var day = days[d.getDay()];
        var month = months[d.getMonth()];
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
        var prettyString = day + ' ' + d.getDate()+ suffix+ ' ' + month;
        return prettyString;
    } else {
      return '';
    }
  }
  onDateChange(date) {
    this.props.dateChanged(date);
  };

  onCreateTask(){
    console.log(this.props.data);
    const {user, taskName, group, date} = this.props;
    this.props.createTask({user, taskName, group, date});
  }

  render() {
    return(
      <View style={{flex:1}}>
        <View>
            <Input
              placeholder="Task Name"
              onChangeText={(text)=>this.onTaskNameChange(text)}
              autoCapitalize = 'words'
              value={this.props.taskName}
            />
            <InputButton
              placeholder="Category"
              value={this.props.group}
              onPress = {()=>this.onCategoryPress()}
            />
            <InputButton
              placeholder="Date"
              value={this.renderDate()}
              onPress = {()=>this.onShowDatePicker()}
            />
            <View style={{alignItems:'center', marginTop:40}}>
              <Button
                onPress={()=>this.onCreateTask()}
                type='task'
              >
                CREATE TASK
              </Button>
            </View>
        </View>
        <View style={{flex:1}}>
          <Modal position={'bottom'} backdrop={false} isOpen={this.state.showDatePicker} style={{height:250, justifyContent:'space-around'}} >
              <View style={{flexDirection:'row', height:50, justifyContent:'space-around', alignItems:'center', borderTopWidth:0, borderColor:Theme.red}}>
                <TouchableOpacity onPress={()=>this.onShowDatePicker()}>
                  <Text style={{fontWeight: 'bold', fontSize:17, alignSelf:'center', color:Theme.red}}>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>this.onShowDatePicker()}>
                  <Text style={{fontWeight: 'bold', fontSize:17, alignSelf:'center', color:Theme.purple}}>Done</Text>
                </TouchableOpacity>
              </View>
              <DatePickerIOS mode='date' date={new Date(this.props.date) || new Date()} onDateChange={(date)=>this.onDateChange(date)} minimumDate={new Date()}/>
          </Modal>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return{
    taskName: state.newtask.taskName,
    group: state.newtask.group,
    date: state.newtask.date,
    user: state.home.data
  }
}

export default connect(mapStateToProps, {
  taskNameChanged,
  groupChanged,
  dateChanged,
  createTask
})(TaskForm);
