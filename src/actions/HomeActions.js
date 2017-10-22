import firebase from 'firebase';


var groups;

export const getUserData = () => {
  console.log('getUserData called');
  return(dispatch) => {
    const {currentUser} = firebase.auth();
    firebase.database().ref('/users/' + currentUser.uid).on('value', function(snapshot) {
      var data = snapshot.val();
      groups = data.groups;
      console.log('groups from getData: ' + groups);
      dispatch({
        type: 'get_user_data_success',
        payload: data
      });
      }, function (errorObject) {
          console.log("The read failed: " + errorObject.code);
        }
    );


  }
}




export const createGroup = (text, user, groups) => {
  return(dispatch) => {
    var s;
    if(text==''){
      console.log('nothing entered')
    } else {
      console.log(groups)
      s = groups.concat([capitalizeFirstLetter(text)]);
      console.log('new group: ')
      console.log(s)
      firebase.database().ref('/users/' + user.uid  + '/groups')
        .set(s);
      firebase.database().ref('/users/' + user.uid  + '/taskCount/'+ capitalizeFirstLetter(text))
        .set(0);
    }
  }
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
