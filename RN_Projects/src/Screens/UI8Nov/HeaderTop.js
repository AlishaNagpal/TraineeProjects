import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import {Colors, vw, vh} from '../../Constants'

export const HeaderTop = React.memo(function pureFunction() {
  return (
    <View>
      <View style={{flexDirection:"row"}} >
        <View style={styles.imageView} >
          <Image
            source={{ uri: 'https://previews.123rf.com/images/westend61/westend611802/westend61180230132/94949108-back-view-of-mature-man-standing-on-his-sailing-boat-looking-at-distance.jpg' }}
            style={styles.imageStyle}
          />
        </View>
        <View style={styles.textView}>
          <Text style={{color: Colors.white, fontSize:16, fontWeight:'bold'}} >
            Marcus Hoang
          </Text>
          <Text style={{color: Colors.veryLightGray, fontSize:12, fontWeight:'bold'}} >
            Level 3
          </Text>
        </View>
      </View>
      <Image 
        source = {require('../../Assets/Images/ic_cloud.png')}
        style={styles.cloudImage}
        />
    </View>
  );
})

const styles = StyleSheet.create({
  imageStyle: {
    height: vh(40),
    width: vw(40),
    borderRadius: 20,
  },
  imageView: {
    backgroundColor: Colors.darkGreenCyan,
    borderColor: Colors.white,
    borderRadius: vh(25),
    borderWidth: 2,
    height: vh(50),
    width: vw(50),
    top: vh(40),
    left: vw(30),
    alignItems: 'center',
    justifyContent: 'center'
  },
  textView: {
    flexDirection: 'column',
    marginTop:vh(50),
    marginLeft: vw(40)
  },
  cloudImage:{
    height:vh(60), 
    width:vw(120), 
    top:vh(40),
    left:vw(260), 
    position:'absolute'
  }
})
