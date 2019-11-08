import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import COLORS from '../../Constants/Colors';


export const MidView = React.memo(function pureFunction() {

    balanceComponent = (key, value) => {
        return (
            <View style={{ flexDirection: 'column', paddingRight: 20 }} >
                <Text style={styles.componentText} >
                    {key}
                </Text>
                <Text style={styles.componentText2} >
                    {value}
                </Text>

            </View>
        )
    }

    relativeComponent = (image1, image2, text) => {
        return (
            <View style={{ flexDirection: 'column', top: 70, paddingLeft: 30 }}>
                <Image
                    source={image1}
                    style={{ height: 30, width: 30, alignSelf: 'center', borderRadius: 20 }}
                />
                <Image
                    source={image2}
                    style={{ height: 15, width: 15, position: 'absolute', top: 20, left: 38 }}
                />
                <Text style={{ top: 10, color: COLORS.grayishBlue, fontSize: 12 }} >
                    {text}
                </Text>
            </View>
        )
    }

    addData = (date) => {
        return (
            <View style={styles.addDataView} >
                <View style={{ flexDirection: 'column' }} >
                    <Text style={{fontSize:14}} >
                        Add Relative
                    </Text>
                    <Text style={{fontSize:12, color: COLORS.darkGray}} >
                        {date}
                    </Text>
                </View>
                <Text style={{fontSize:14, color: COLORS.red}} >
                    4,000,000 VND
                </Text>
            </View>
        )
    }

    return (
        <View style={{ flexDirection: 'column' }} >
            <View style={{ flexDirection: 'row' }} >
                <Text style={styles.headerText} >
                    Health Insurance
                </Text>
                <TouchableOpacity style={styles.buttonStyle} >
                    <Text style={styles.buttonTextStyle} >
                        Card Details >
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', top: 50 }} >
                {this.balanceComponent('Balance', '2,000,000VND')}
                {this.balanceComponent('Balance Used', '4,320,000VND')}
            </View>
            <Text style={[styles.componentText, { top: 70 }]} >
                Relatives
                </Text>
            <View style={{ flexDirection: 'row' }} >
                {this.relativeComponent(require('../../Assets/Images/wife.jpeg'), require('../../Assets/Images/ic_accept.png'), 'Wife')}
                {this.relativeComponent(require('../../Assets/Images/child.jpg'), require('../../Assets/Images/ic_accept.png'), 'Child')}
                {this.relativeComponent(require('../../Assets/Images/ic-more.png'), null, 'add')}
                {this.relativeComponent(require('../../Assets/Images/ic-more.png'), null, 'add')}
                <View style={styles.cylindricalView} />
                {this.relativeComponent(require('../../Assets/Images/ic-transfer.png'), null, 'Benefits Transfer')}
            </View>

            <View style={styles.seeAllStyle} >
                <Text style={[styles.componentText, { top: 10 }]} > History</Text>
                <TouchableOpacity>
                    <Text style={styles.seeAllButton} >
                        See all
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={{top:70}}>
            {this.addData('13/06/2019')}
            {this.addData('11/06/2019')}
            </View>
        </View>
    )
})

const styles = StyleSheet.create({
    headerText: {
        color: COLORS.darkBlueText,
        fontSize: 22,
        fontWeight: 'bold',
        top: 30,
        left: 20
    },
    buttonStyle: {
        backgroundColor: COLORS.darkGreenCyan,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        top: 30,
        left: 80,
        padding: 5
    },
    buttonTextStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        color: COLORS.white,
        fontSize: 14,
        fontWeight: 'bold',
    },
    componentText: {
        color: COLORS.balanceText,
        fontSize: 12,
        fontWeight: 'bold',
        paddingBottom: 10,
        paddingLeft: 20
    },
    componentText2: {
        color: COLORS.darkGreenCyan,
        fontSize: 20,
        fontWeight: 'bold',
        paddingLeft: 20
    },
    cylindricalView: {
        height: 80,
        width: 2,
        backgroundColor: COLORS.darkGray,
        top: 55,
        left: 20
    },
    seeAllStyle: {
        flexDirection: 'row',
        top: 70,
        justifyContent: 'space-between',
        paddingRight: 20,
        alignItems: 'center'
    },
    seeAllButton: {
        color: COLORS.black,
        textDecorationLine: 'underline'
    },
    addDataView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 20,
        marginRight: 20,
        marginBottom:20,
        top:20
    }
})
