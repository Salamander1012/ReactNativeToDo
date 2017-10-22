import firebase from 'firebase';
import {Actions} from 'react-native-router-flux';

export const taskNameChanged = (text) => {
  return {
    type: 'task_name_changed',
    payload: text
  }
}

export const groupChanged = (text) => {
  return {
    type: 'group_changed',
    payload: text
  }
}

export const dateChanged = (date) => {
  return {
    type: 'date_changed',
    payload: date
  }
}

export const clearFields = () => {
  return {
    type: 'clear_fields'
  }
}

export const createTask = ({user, taskName, group, date}) => {
  return(dispatch) => {
    dispatch({type: 'task_create_attempting'});
    var taskID = generateUUID();
    var timeStamp = generateTimeStamp(date);
    var allTaskCount = user.taskCount.allTasks;

    console.log(user.name + ' created a task')
    firebase.database().ref('/users/' + user.uid + '/All Tasks/'+taskID)
      .set({
        taskName: taskName,
        group: group,
        date: date,
        timeStamp: timeStamp
      })
    firebase.database().ref('/users/' + user.uid + '/taskCount/allTasks')
      .transaction(function(allTasks) {
        return (allTasks || 0) + 1;
      });
    if(group){
      firebase.database().ref('/users/' + user.uid + '/'+group+'/'+taskID)
        .set({
          taskName: taskName,
          date: date,
          timeStamp: timeStamp
        })
        firebase.database().ref('/users/' + user.uid + '/taskCount/'+group)
          .transaction(function(groupCount) {
            return (groupCount || 0) + 1;
          });

    }

    Actions.pop();
  }
}

function generateUUID() {
    var d = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = (d + Math.random()*16)%16 | 0;
        d = Math.floor(d/16);
        return (c=='x' ? r : (r&0x3|0x8)).toString(16);
    });
    return uuid;
};

function generateTimeStamp(date) {
  if(date){
    var d = new Date(date);
    var year = d.getFullYear().toString();
    var month;
    var day;
    if(d.getMonth()<10) {
      month = '0' + d.getMonth().toString();
    } else {
      month = d.getMonth().toString();
    }
    if(d.getDate()<10) {
      day = '0' + d.getDate().toString();
    } else {
      day = d.getDate().toString();
    }
    var prettyString = year+month+day;
    return(parseInt(prettyString));
  } else {
    return 0;
  }


};
