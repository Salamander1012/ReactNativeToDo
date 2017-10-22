import {Actions} from 'react-native-router-flux';

const INITIAL_STATE = {
  email: '',
  password: '',
  user: null,
  error:'',
  loading: false,
  createAccount: false,
  loadAuth: true,
  firstName: ''
}

export default (state = INITIAL_STATE, action) => {

  //console.log(action);
  switch (action.type) {
    case 'determine_auth_page':
      return {...state, ...INITIAL_STATE, createAccount:!state.createAccount, loadAuth:false};
    case 'email_changed':
      return {...state, email:action.payload};
    case 'name_changed':
      return {...state, firstName:action.payload};
    case 'password_changed':
      return {...state, password:action.payload};
    case 'login_user_attempting':
      return {...state,
        loading: true,
        error: ''
      };
    case 'login_user_success':
      //console.log('login user action recieved')
      return {...state, ...INITIAL_STATE,
        user:action.payload
      };
    case 'login_user_fail':
      return {...state,
        error:'Authentication Failed.',
        password:'',
        loading: false
      };
    case 'logout_user':
      //console.log('logout user action recieved')
      return {...state, ...INITIAL_STATE};
    case 'already_logged_in':
      //console.log('already logged in action recieved')
      return {...state, ...INITIAL_STATE,
        user:action.payload
      };
    case 'no_user_logged_in':
      //console.log('no user logged in action recieved')
      return {...state, ...INITIAL_STATE,
        loadAuth:false
      };
    default:
      return state;

  }
}
