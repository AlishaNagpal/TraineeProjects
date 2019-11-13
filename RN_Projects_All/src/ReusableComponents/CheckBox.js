import React, { Component } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Colors, vh, vw } from '../Constants';

export default class CheckBox extends Component {
  checkClicked = async () => {
    this.props.clicked(this.props.id,this.props.isCheck );
  }

  render() {
    return (
      <TouchableOpacity onPress={this.checkClicked} style={this.props.style}>
        <View style={{
          height: vh(24),
          width: vh(24),
          borderWidth: vw(2),
          borderRadius: vh(8),
          borderColor: Colors.softRed2,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <View style={{
            height: vh(12),
            width: vh(12),
            backgroundColor: this.props.isCheck ? Colors.softRed2 : Colors.white,
          }} />
        </View>
      </TouchableOpacity>
    )
  }
}
