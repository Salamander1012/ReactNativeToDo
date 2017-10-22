import React from 'react';
import { TextInput, View, Text} from 'react-native';
import {Theme} from './Theme';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

const LoginInput = ({label, value, onChangeText, placeholder, secureTextEntry, icon}) => {

  //const {inputStyle, labelStyle, containerStyle}=styles;

  return(
    <View style={styles.containerStyle}>
      <View style={styles.row}>
        <View style={styles.icon}>
          <Icon name={icon} size={20} color={Theme.lightGrey}/>
        </View>
        <View style={styles.input}>
          <TextInput
            style={{
              height: 50,
              color: Theme.purple
            }}
            autoCorrect={false}
            autoCapitalize='none'
            secureTextEntry={secureTextEntry}
            placeholder={placeholder}
            autoCorrect={false}
            //style={styles.inputStyle}
            value={value}
            onChangeText={onChangeText}
            placeholderTextColor={Theme.lightGrey}
          />
        </View>
      </View>
    </View>
  );
}

const styles = {
  containerStyle: {
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 10,
    alignItems: 'center'
  },
  row: {
    flexDirection: 'row',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: Theme.lineColor

  },
  icon: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  input: {
    justifyContent: 'center',
    flex: 5
  }
}
/*
<View style={styles.labelStyle}>

</View>


<View>
<TextInput
  autoCorrect={false}
  secureTextEntry={secureTextEntry}
  placeholder={placeholder}
  autoCorrect={false}
  style={styles.inputStyle}
  value={value}
  onChangeText={onChangeText}
  placeholderTextColor={Theme.purple}
/>
</View>


const styles = {
  inputStyle: {
    color: Theme.purple,
    paddingRight: 5,
    fontSize: 18,
    lineHeight:23,
    flex:6
  },
  labelStyle: {
    paddingLeft:10,
    flex: 1,
    flexDirection: 'row',
    height: 50
  },
  containerStyle: {
    height: 50,
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderColor: Theme.purple

  }
*/


export {LoginInput};
