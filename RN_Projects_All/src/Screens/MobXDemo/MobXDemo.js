import React, { Component } from 'react';
import { View, Text } from 'react-native';
import {ToDoList} from '../../Store';



export default class MobXDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <Text> {ToDoList.Tasks } </Text>
      </View>
    );
  }
}
