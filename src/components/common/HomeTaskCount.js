import React from 'react';
import {View, Text} from 'react-native';
import {FullSection, TaskCount, GroupGrid} from '../common';


const HomeTaskCount = ()=> {
  return(
    <View style={styles.containerStyle}>
      <FullSection>
        <TaskCount>Pending</TaskCount>
        <TaskCount>Complete</TaskCount>
      </FullSection>
    </View>
  );
}

const styles = {
  containerStyle:{
    marginTop: 25,
    //flex:1
  }
}

export {HomeTaskCount};
