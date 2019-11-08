import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, StatusBar, ScrollView } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import style from '../../utils/Colors'
import COLORS from '../../utils/style'

import Icon from 'react-native-vector-icons/Ionicons'
Icon.loadFont()

import MainScreen from '../UI8Nov/MainScreen'

const array = [
  {
    screen: 'UI8Nov',
    title: 'UI Screen 8 Nov >'
  }
]

class HomeScreen extends React.Component {

  static navigationOptions = ({ navigation }) => ({
    title: 'Home',
    headerRight: () => (
      <TouchableOpacity onPress={() => alert('These are my RN Projects!')} >
        <Icon name="ios-information-circle-outline" size={30} color="white" style={styles.iconPos} />
      </TouchableOpacity>
    )
  })

  callScreen = (screen) =>{
    this.props.navigation.navigate(screen)
  }

  makeButton = (screen,title) =>{
    return(
      <TouchableOpacity onPress={() => this.callScreen(screen)}>
            <View style={style.buttonContainer} >
              <Text style={style.buttonStyles} >
                {title} 
              </Text>
            </View>
          </TouchableOpacity>
    )
  }
  
  render() {
    return (
      <View style={styles.mainView}>
        <StatusBar barStyle="light-content" />
        <Text style={styles.info}>
          Click Any Button To View Different Projects!
        </Text>
        <ScrollView style={{ margin: 15 }} >
          
          <View>
            {this.makeButton(array[0]['screen'], array[0]['title'])}
          </View>

        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainView: {
    padding: 20,
    flex: 1,
  },
  info: {
    color: COLORS.darkBluishCyan,
    fontWeight: 'bold',
    fontSize: 22,
  },
  iconPos: {
    paddingRight: 20
  }
})


const AppNavigator = createStackNavigator({
  Home: { screen: HomeScreen },
  UI8Nov: { screen: MainScreen, navigationOptions: { header: null } },
},
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: ({ navigation }) => ({
      headerStyle: {
        backgroundColor: COLORS.darkBlue,
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 22,
      },
      headerBackTitle: null,
      headerRight: () => (
        <TouchableOpacity onPress={() => navigation.navigate('Home')} >
          <Icon name="md-home" size={30} color="white" style={styles.iconPos} />
        </TouchableOpacity>
      )

    })
  }
);

export default createAppContainer(AppNavigator);