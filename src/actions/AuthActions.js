import firebase from 'firebase';
import {Actions} from 'react-native-router-flux';

//action creators
export const emailChanged = (text) => {
  return {
    type: 'email_changed',
    payload: text
  }
}

export const nameChanged = (text) => {
  return {
    type: 'name_changed',
    payload: text
  }
}

export const passwordChanged = (text) => {
  return {
    type: 'password_changed',
    payload: text
  }
}

export const determineAuthPage = () => {
  return {
    type: 'determine_auth_page'
  }
}

export const checkAuth = () => {
  return(dispatch) => {
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        console.log('user is signed in');
        //console.log(user);
        dispatch({
          type: 'already_logged_in',
          payload: user
        })
        Actions.home();
      } else {
        console.log('no user signed in');
        dispatch({
          type: 'no_user_logged_in'
        })
      }
    });
  }
}

export const loginUser = ({email, password}) => {
  return(dispatch) => {
    dispatch({type: 'login_user_attempting'});
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(user => loginUserSuccess(dispatch, user))
      .catch(()=> loginUserFail(dispatch));
  }
}


export const logOutUser = () => {
  return(dispatch) => {
    firebase.auth().signOut()
      .then(()=> {
        Actions.login({ type: 'reset' });
        dispatch({
          type: 'logout_user'
        })
      })

  }
}


//helper functions
const loginUserFail = (dispatch) => {
  dispatch({
    type: 'login_user_fail'
  })
}

const loginUserSuccess = (dispatch, user) => {
  dispatch({
    type: 'login_user_success',
    payload: user
  })
  Actions.home();
}

export const createUser = ({firstName, email, password}) => {
  return(dispatch) => {
    dispatch({type: 'login_user_attempting'});
     firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(user => {
        console.log(user.uid)
        firebase.database().ref('/users/' + user.uid)
          .set({
            name: firstName,
            email: email,
            uid:user.uid,
            groups: ['Cancel', 'Work'],
            taskCount: {
              allTasks: 0,
              Work: 0
            }
          })
          loginUserSuccess(dispatch, user);
      })
      .catch(()=> loginUserFail(dispatch));
  }
}
