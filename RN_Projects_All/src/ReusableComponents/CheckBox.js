import React, { Component } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Colors, vh, vw } from '../Constants';

export default class CheckBox extends Component {
  constructor(props) {
    super(props);
    this.state = {isCheck: false};
  }

  checkClicked = async () => {
    await this.setState(prevState => ({
        isCheck: !prevState.isCheck,
      })); // setState is async function.
    
    // Call function type prop with return values.
    this.props.clicked && this.props.clicked(this.props.value, this.state.isCheck);
  }

  render() {
    return (
      <TouchableOpacity onPress={this.checkClicked} style={this.props.style}>
        <View style={{
          height: vh(24),
          width: vh(24),
          borderWidth: vw(2),
          borderRadius: vh(8),
          borderColor: Colors.balanceText,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <View style={{
            height: 12,
            width: 12,
            backgroundColor: this.state.isCheck ? Colors.balanceText : Colors.white,
          }} />
        </View>
      </TouchableOpacity>
    )
  }
}
