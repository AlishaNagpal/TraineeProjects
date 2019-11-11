import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import ToDoList from '../../Store/ToDoList';
import { observer } from 'mobx-react';


@observer
export default class MobXDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <TouchableOpacity onPress = {()=> {ToDoList.add()}} > 
            <Text> {ToDoList.Tasks } </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
