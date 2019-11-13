import React, { Component } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet, TextInput, Alert, ImageBackground } from 'react-native';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
console.disableYellowBox = true
import Icons from 'react-native-vector-icons/Ionicons'
Icons.loadFont()
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
MaterialCommunityIcons.loadFont()
import AsyncStorage from '@react-native-community/async-storage';


//Custom Imports 
import { vw, vh, Styles, Colors } from '../../Constants';
import { CheckBox } from '../../ReusableComponents'

export default class ToDoListContainer extends Component {

    static navigationOptions = ({ navigation }) => ({
        headerLeft: (
            <TouchableOpacity onPress={() => navigation.navigate('Home')} >
                <Icons name="ios-arrow-back" size={vh(30)} color="white" style={styles.iconPos} />
            </TouchableOpacity>
        ),

        headerRight: (
            <TouchableOpacity onPress={navigation.getParam('allDelete')} >
                <MaterialCommunityIcons name="database-check" size={vh(30)} color="white" style={styles.iconPos2} />
            </TouchableOpacity>
        )
    })

    constructor(props) {
        super(props);
        this.state = {
            ListData: [],
            task: '',
            isCompleted: false,
        };
    }
    componentDidMount() {
        this.props.navigation.setParams({ allDelete: this.allDelete });
        AsyncStorage.getItem("ObjectData", (err, result) => {
            if (result) {
                let data = JSON.parse(result)
                this.setState({
                    ListData: data.slice(),
                })
            }
        })
    }

    allDelete = () => {
        Alert.alert("Clear all Data?", null,
            [
                {
                    text: 'OK',
                    onPress: () => {
                        AsyncStorage.clear()
                        this.setState({
                            ListData: []
                        })
                    }
                }
            ]
        )
    }

    renderData = (rowData) => {
        let { item, index } = rowData
       
        return (
            <View style={[Styles.container, styles.container]}>
                <View style={{ flexDirection: 'column' }} >
                    <Text style={Styles.text} > {item.task} </Text>
                    <Text style={Styles.text} > {item.id} </Text>
                    {/* <Text style={Styles.text} > {item.isCompleted.toString()} </Text> */}
                </View>
                <View style={styles.viewStyle} >
                    <TouchableOpacity onPress={() => this.handleDelete(item.id)} >
                        <Text>
                            <MaterialCommunityIcons name='delete-empty' size={30} color={Colors.white} />
                        </Text>
                    </TouchableOpacity>
                    <CheckBox
                        isCheck={item.isCompleted}
                        id={item.id}
                        clicked={(id, isCheck) => this.toggleCheckBox(id, isCheck)} />
                </View>
            </View>
        )
    }

    submit = () => {
       
        let payload = {
            id: Math.random().toString(),
            task: this.state.task,
            isCompleted: false,
        }
        let copyData = this.state.ListData
        copyData.push(payload)
        AsyncStorage.setItem("ObjectData", JSON.stringify(this.state.ListData))
        this.setState({
            ListData: copyData,
            task: '',
            id: '',
        })
        this.input.blur()
    }

    addingData = () => {
        if (this.state.task !== '') {
            this.submit()
        } else {
            Alert.alert("Please enter data!")
        }
    }

    handleDelete = (id) => {
        let emptyArray = this.state.ListData;
        let indexToDelete = emptyArray.findIndex(item => item.id === id)
        if (indexToDelete != -1) {
            emptyArray.splice(indexToDelete, 1)
            console.log(emptyArray[1])
            this.setState({
                ListData: emptyArray
            })
        }

        AsyncStorage.getItem("ObjectData", (err, result) => {
            if (result) {
                let data = JSON.parse(result)
                const restOfData = data.filter(function (e) {
                    return e.id !== id
                })
                AsyncStorage.setItem("ObjectData", JSON.stringify(restOfData))
            }
        })
    }

    toggleCheckBox = (id, isCheck) => {
        AsyncStorage.getItem("ObjectData", (err, result) => {
            if (result) {
                let data = JSON.parse(result)
                let index = data.findIndex((e) => e.id === id)
                if (index != -1) {
                    data[index].isCompleted = !isCheck;
                }
                this.setState({ ListData: data })
                data.filter(function (e) {
                    if (e.id === id) {
                        e.isCompleted = true
                    }
                })
                AsyncStorage.setItem("ObjectData", JSON.stringify(data))
            }
        })
    }


    render() {
        return (
            <KeyboardAwareScrollView>
                <ImageBackground
                    source={require('../../Assets/Images/todo.jpg')}
                    style={{ height: vh(708), width: vw(375) }}
                >
                    <View>
                        <FlatList
                            ref={ref => this.flatList = ref}
                            onContentSizeChange={() => this.flatList.scrollToEnd({ animated: true })}
                            onLayout={() => this.flatList.scrollToEnd({ animated: true })}
                            style={styles.flatList}
                            data={this.state.ListData}
                            keyExtractor={(item, index) => Math.random().toString()}
                            renderItem={this.renderData}
                        />

                        <View style={styles.showingData} >
                            <TextInput
                                style={styles.textInput}
                                defaultValue={this.state.task}
                                numberOfLines={1}
                                onChangeText={(val) => this.setState({ task: val })}
                                clearButtonMode='while-editing'
                                placeholder="Enter Your New To Do Task"
                                onSubmitEditing={this.addingData}
                                ref={ref => this.input = ref}
                                returnKeyType={'done'}
                            />
                            <TouchableOpacity onPress={this.addingData}
                                style={styles.buttonStyles}>
                                <Text> <Icons name='ios-add-circle' size={30} color={Colors.white} /> </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ImageBackground>
            </KeyboardAwareScrollView>
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
        backgroundColor: Colors.darkBlue,
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
        borderColor: Colors.darkBlue,
        borderWidth: vw(0.7),
        width: vw(270),
        paddingLeft: vw(20),
        fontSize: vh(20)
    },
    iconPos: {
        paddingLeft: vw(20)
    },
    iconPos2: {
        paddingRight: vw(20)
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingRight: vw(15),
        backgroundColor: '#FDC8D3',
    },
    viewStyle: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    }
})