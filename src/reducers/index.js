import {combineReducers} from 'redux';
import AuthReducer from './AuthReducer';
import HomeReducer from './HomeReducers';
import NewTaskReducer from './NewTaskReducers';


export default combineReducers({
  auth: AuthReducer,
  home: HomeReducer,
  newtask: NewTaskReducer
});
