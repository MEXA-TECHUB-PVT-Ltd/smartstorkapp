import { StyleSheet } from 'react-native'
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
const STYLES = StyleSheet.create({
    bg: {
        flex: 1,
    },
    mainv: {
        flex: 1,
        backgroundColor: 'white'
    },
    txt: {
        color: '#888888',
        fontSize: wp(3.2),
        fontFamily: 'Laila-Medium',
        // alignSelf: 'center',
        marginLeft: '3%',
        width:260
    },
    txt1: {
        color: '#424242',
        fontSize: wp(4),
        fontFamily: 'Laila-SemiBold',
        // alignSelf: 'center',
        marginLeft: '3%'
    },
    txt2: {
        color: '#424242',
        fontSize: wp(2.8),
        fontFamily: 'Laila-SemiBold',
      
    },
})

export default STYLES; 