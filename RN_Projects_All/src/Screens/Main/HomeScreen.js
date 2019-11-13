import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, StatusBar, ScrollView } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Icon from 'react-native-vector-icons/Ionicons'
Icon.loadFont()

//Custom Imports 
import { vw, vh, Styles, Colors } from '../../Constants';

import MainScreen from '../UI8Nov/MainScreen'
import MobXDemo from '../MobXDemo/MobXDemo'
import MainAPIScreen from '../APIWithMobX/MainAPIScreen';
import showingSelected from '../APIWithMobX/showingSelected';
import ToDoListContainer from '../ToDoList/ToDoListContainer'
import SplashToDoList from '../ToDoList/SplashToDoList'

const array = [
  {
    screen: 'UI8Nov',
    title: 'UI Screen 8 Nov >'
  },
  {
    screen: 'mobX',
    title: 'To Do List >'
  },
  {
    screen: 'APIHit',
    title: 'APIHit MobX >'
  },
  {
    screen: 'ToDoSplash',
    title: 'ToDoList Part2 >'
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

  callScreen = (screen) => {
    this.props.navigation.navigate(screen)
  }

  makeButton = (screen, title) => {
    return (
      <TouchableOpacity onPress={() => this.callScreen(screen)}>
        <View style={Styles.buttonContainer} >
          <Text style={Styles.buttonStyles} >
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
        <ScrollView style={{ margin: vh(15) }} >

          <View>
            {this.makeButton(array[0]['screen'], array[0]['title'])}
            {this.makeButton(array[1]['screen'], array[1]['title'])}
            {this.makeButton(array[2]['screen'], array[2]['title'])}
            {this.makeButton(array[3]['screen'], array[3]['title'])}
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
    color: Colors.darkBluishCyan ,
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
  mobX: { screen: MobXDemo, navigationOptions: { title: 'TO DO LIST' } },
  APIHit: { screen: MainAPIScreen, navigationOptions: { title: 'API Data' } },
  selected: {screen: showingSelected, navigationOptions: { title: 'Selected Items' } },
  ToDo:{screen: ToDoListContainer, navigationOptions:{title: 'Your To Do List' }},
  ToDoSplash: {screen: SplashToDoList, navigationOptions: { header: null }},
},
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: ({ navigation }) => ({
      headerStyle: {
        backgroundColor: Colors.darkBlue,
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