import React, {Component} from 'react';
import {View, Text, TouchableOpacity, ListView} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {connect} from 'react-redux';
import {NavBar, FloatingButton} from './common';

class TaskList extends Component {
  componentWillMount(){
    this.createDataSource();
  }

  componentWillReceiveProps(nextProps){
    this.createDataSource();
  }

  createDataSource(){
    const ds = new ListView.DataSource({
      rowHasChanged:(r1, r2)=> r1 !== r2
    });
    this.dataSource = ds.cloneWithRows(this.props.data[this.props.list])
  }

  render() {
    console.log(this.props.data[this.props.list]);
    return(
      <View style={{flex:1}}>
        <View style={{flex:1}}>
          <NavBar
            renderLogout={false}
            renderBack={true}
            onBack={()=>console.log('back')}
          >
            {this.props.list}
          </NavBar>
        </View>
        <ListView>

        </ListView>
        <FloatingButton/>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return{
    data: state.home.data
  }
}

export default connect(mapStateToProps, {
})(TaskList);
