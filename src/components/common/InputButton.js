import React from 'react';
import {View, Text, TextInput, TouchableOpacity, ActionSheetIOS} from 'react-native';
import {Theme} from './Theme';
import Icon from 'react-native-vector-icons/SimpleLineIcons';





const InputButton = ({value, onChangeText, placeholder, onPress}) => {


  return(
    <TouchableOpacity onPress={onPress}>
    <View style={styles.containerStyle}>

      <View style={styles.row}>
        <View style={styles.input}>
          <TextInput
            style={{
              height: 50,
              color: 'black'
            }}
            autoCorrect={false}
            autoCapitalize='none'
            placeholder={placeholder}
            autoCorrect={false}
            //style={styles.inputStyle}
            value={value}
            onChangeText={onChangeText}
            placeholderTextColor={Theme.lightGrey}
            editable={false}
          />
        </View>
      </View>
    </View>
    </TouchableOpacity>
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


export {InputButton};
