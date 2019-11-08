import { StyleSheet } from 'react-native';
import COLORS from '../utils/Colors'

export default StyleSheet.create({
    buttonContainer: {
        justifyContent: 'center',
        backgroundColor: COLORS.powderBlue,
        borderRadius: 20,
        borderWidth: 0.5,
        borderColor: 'lightgray',
        margin: 10,
        alignItems: 'center',
        shadowColor: COLORS.veryLightGray,
        shadowOpacity:0.5
    },
    buttonStyles: {
        fontWeight: 'bold',
        fontSize: 20,
        padding: 10,
        color: COLORS.darkBlue
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
