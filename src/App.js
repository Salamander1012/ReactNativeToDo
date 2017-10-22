import React, {Component} from 'react';
import {View, Text} from 'react-native';
import Router from './Router';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import firebase from 'firebase';

class App extends Component {

  componentWillMount() {
    const config = {
    apiKey: 'AIzaSyCAze8jLXXXkx26iR88lF8QJ6_j0WCYDyE',
    authDomain: 'todo-f52ee.firebaseapp.com',
    databaseURL: 'https://todo-f52ee.firebaseio.com',
    projectId: 'todo-f52ee',
    storageBucket: 'todo-f52ee.appspot.com',
    messagingSenderId: '491541677403'
  };
  firebase.initializeApp(config);
  }

  render() {

    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    
    return(
      <Provider store={store}>
        <Router/>
      </Provider>
    );
  }
}

export default App;
