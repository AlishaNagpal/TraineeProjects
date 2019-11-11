import React, { Component } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet, TextInput, Alert } from 'react-native';
import { observer } from 'mobx-react';

import ToDoList from '../../Store/ToDoList';
import { vw, vh, Styles, Colors } from '../../Constants';

import Icons from 'react-native-vector-icons/Ionicons'
Icons.loadFont()



@observer
export default class MobXDemo extends Component {

  submit = () => {
    ToDoList.add(ToDoList.item)
    ToDoList.item = ''
    this.input.blur()
  }

  addingData = () => {
    if (ToDoList.item !== '') {
      this.submit()
    } else {
      Alert.alert("Please enter data!")
    }
  }

  render() {
    return (
      <View>

        <FlatList
          ref={ref => this.flatList = ref}
          onContentSizeChange={() => this.flatList.scrollToEnd({ animated: true })}
          // onLayout={() => this.flatList.scrollToEnd({ animated: true })}
          style={styles.flatList}
          data={ToDoList.Tasks.slice()}
          keyExtractor={(item, index) => Math.random().toString()}
          renderItem={({ item }) => (
            <View style={Styles.container}>
              <Text style={Styles.text} > {item} </Text>
            </View>
          )} />

        <View style={styles.showingData} >
          <TextInput
            numberOfLines={1}
            onChangeText={(text) => ToDoList.item = text}
            clearButtonMode='while-editing'
            placeholder="Enter Your New To Do Task"
            value={ToDoList.item}
            onSubmitEditing={() => this.submit()}
            style={styles.textInput}
            ref={ref => this.input = ref}
          />

          <TouchableOpacity onPress={() => this.addingData()}
            style={styles.buttonStyles}>
            <Text> <Icons name='ios-add-circle' size={30} color={Colors.white} /> </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  flatList: {
    margin: vh(20),
    height: vh(600)
  },
  showingData: {
    flexDirection: 'row'
  },
  buttonStyles: {
    justifyContent: 'center',
    backgroundColor: '#b0e0e6',
    borderRadius: vh(20),
    borderWidth: vw(0.5),
    borderColor: 'lightgray',
    marginLeft: vw(20),
    alignItems: 'center',
    padding: vh(15)
  },
  textInput: {
    marginLeft: vw(20),
    borderRadius: vh(20),
    borderColor: 'lightgray',
    borderWidth: vw(0.7),
    width: vw(270),
    paddingLeft: vw(20),
    fontSize: vh(20)
  }
})