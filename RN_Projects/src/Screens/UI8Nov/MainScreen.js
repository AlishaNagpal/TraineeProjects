import React, { PureComponent } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import COLORS from '../../Constants/Colors';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import Ionicons from 'react-native-vector-icons/Ionicons'
Ionicons.loadFont()

import { HeaderTop } from './HeaderTop'
import { MidView } from './MidView'

class MainScreen extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={styles.mainView} >
                <View style={styles.header}>
                    <HeaderTop />
                </View>
                <View style={{ flex: 4 }}>
                    <View style={styles.openedTab} >
                        <MidView />
                    </View>
                </View>

                <View style={{ flex: 0.7 }}>
                    <View style={styles.lowerTab1} >
                        <View style={styles.tabView}>
                            <Text style={{ fontSize: 16, fontWeight: '500' }} >
                                Health and Beauty
                            </Text>
                            <Text style={{ fontSize: 15, fontWeight: '400' }} >
                                5,000,000 VND
                            </Text>
                        </View>
                    </View>
                </View>

                <View style={{ flex: 0.7 }}>
                    <View style={styles.lowerTab2} >

                        <View style={styles.tabView}>
                            <Text style={{ fontSize: 16, fontWeight: '600', color: COLORS.white }} >
                                Course and Training
                            </Text>
                            <Text style={{ fontSize: 15, fontWeight: '400', color: COLORS.white }} >
                                2,000,000 VND
                            </Text>
                        </View>

                    </View>
                </View>

                <View style={{ flex: 0.7 }}>
                    <View style={styles.lowerTab3} >
                        <View style={styles.tabView}>
                            <Text style={{ fontSize: 16, fontWeight: '600' }} >
                                Buisness Trip Cost
                            </Text>
                        </View>
                    </View>
                </View>

                {/* <View style={{ flex: 1, backgroundColor:'white' }}>
                   
                </View> */}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        backgroundColor: COLORS.darkGreenCyan
    },
    header: {
        flex: 1,
        backgroundColor: COLORS.darkGreenCyan
    },
    openedTab: {
        backgroundColor: COLORS.paleOrange,
        borderRadius: 20,
        height: '110%'
    },
    lowerTab1: {
        height: '130%',
        borderRadius: 20,
        backgroundColor: COLORS.softRed,
    },
    lowerTab2: {
        height: '130%',
        borderRadius: 20,
        backgroundColor: COLORS.veryDarkBlue
    },
    lowerTab3: {
        height: '130%',
        borderRadius: 20,
        backgroundColor: COLORS.grayishOrange
    },
    tabView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 20,
        alignItems: 'center'
    }
})


export default createBottomTabNavigator(
    {
        Home: MainScreen,
        mid: MidView,
        top: HeaderTop,
    },
    {
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, horizontal, tintColor }) => {
                const { routeName } = navigation.state;
                let IconComponent = Ionicons;
                let iconName;
                if (routeName === 'Home') {
                    iconName = 'ios-home';
                } else if (routeName === 'mid' || routeName === 'top') {
                    iconName = `ios-options`;
                }

                // You can return any component that you like here!
                return <IconComponent name={iconName} size={30} color={tintColor}
                style={{marginTop:5}} />;
            },
        }),
        tabBarOptions: {
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
        },
    }
);