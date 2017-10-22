import React from 'react';
import {Scene, Router, Actions} from 'react-native-router-flux';
import {Text, TouchableOpacity} from 'react-native';
import Home from './components/Home';
import TaskList from './components/TaskList';
import TaskCreate from './components/TaskCreate';
import Login from './components/Login';
import {BackButton} from './components/common';



const RouterComponent = ()=> {

  return(
    <Router sceneStyle={{paddingTop:0}}>

        <Scene
          key="login"
          component={Login}
          title=""

          hideNavBar= {true}
          initial
        />

        <Scene
          key="home"
          component={Home}
          hideNavBar= {true}

        />
        <Scene
          key="taskList"
          component={TaskList}
          hideNavBar= {true}
        />
        <Scene
          key="newTask"
          component={TaskCreate}
          hideNavBar= {true}
        />

    </Router>
  );
}

export default RouterComponent;
