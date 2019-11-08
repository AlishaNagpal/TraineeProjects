import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import COLORS from '../../utils/Colors';

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
          <Text style={{color: COLORS.white, fontSize:16, fontWeight:'bold'}} >
            Marcus Hoang
          </Text>
          <Text style={{color: COLORS.veryLightGray, fontSize:12, fontWeight:'bold'}} >
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
    height: 40,
    width: 40,
    borderRadius: 20,
  },
  imageView: {
    backgroundColor: COLORS.darkGreenCyan,
    borderColor: COLORS.white,
    borderRadius: 25,
    borderWidth: 2,
    height: 50,
    width: 50,
    top: 40,
    left: 30,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textView: {
    flexDirection: 'column',
    marginTop:50,
    marginLeft: 40
  },
  cloudImage:{
    height:60, 
    width:120, 
    top:40,
    left:260, 
    position:'absolute'
  }
})
