import React, {Component} from 'react';
import {View, Text,  ScrollView, Dimensions, FlatList, ListView} from 'react-native';
import {GridItem, NewGroupButton} from '../common';

class GroupGrid extends Component{


  onLayout(){
    //console.log('layoutchange');
  }



  renderGroups(groups, taskCount){
    var groupsList = groups.map(function(name, index){
      if(index!=0){
          return(<GridItem icon="doc" key={index} list={name} taskCount={taskCount}>{name}</GridItem>)
      }
    })
    return(
      <View style={styles.container}>
        <NewGroupButton onPress={this.props.onCreateGroup}/>
        <GridItem icon="notebook" list='All Tasks' taskCount={taskCount}>All Tasks</GridItem>
        {groupsList}
      </View>
    )
  }

  render({groups, onCreateGroup, taskCount}=this.props) {
    //this.renderGroups();
    return(
      <View style={{flex:1}} onLayout={this.onLayout()}>

          {this.renderGroups(this.props.groups, this.props.taskCount)}

      </View>
    );
  }
}

const styles = {
  container: {
    flex:1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 8
  }
}

export {GroupGrid};
