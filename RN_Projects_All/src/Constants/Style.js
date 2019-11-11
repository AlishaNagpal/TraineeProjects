import { StyleSheet } from 'react-native';
import Colors from './Colors'

export default Styles = StyleSheet.create({
    buttonContainer: {
        justifyContent: 'center',
        backgroundColor: Colors.powderBlue ,
        borderRadius: 20,
        borderWidth: 0.5,
        borderColor: 'lightgray',
        margin: 10,
        alignItems: 'center',
        shadowColor: Colors.veryLightGray,
        shadowOpacity: 0.5
    },
    buttonStyles: {
        fontWeight: 'bold',
        fontSize: 20,
        padding: 10,
        color: Colors.darkBlue
    },
    text: {
        fontSize: 22,
        color: 'powderblue',
        fontWeight: 'bold'
    },
    textInput: {
        height: 50,
        width: 200,
        backgroundColor: '#f1f1f1',
        fontSize: 16,
        fontWeight: '500',
        paddingLeft: 10,
        borderRadius: 10
    }
})
