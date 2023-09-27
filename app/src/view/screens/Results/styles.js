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
        color: '#767676',
        fontSize: wp(4.7),
        fontFamily: 'Laila-SemiBold',
        // alignSelf: 'center',
        marginLeft: '3%',

    },
    txt1: {
        color: '#4B4B4B',
        fontSize: wp(4.6),
        fontFamily: 'Laila-Medium',
        marginTop: '5%',
        marginLeft: '3%',

    },
    txt2: {
        color: '#FFFFFF',
        fontSize: wp(6),
        fontFamily: 'Laila-Medium',
        alignSelf: 'center',

    },
    v1: {
        backgroundColor: '#C4B1AB',
        borderRadius: 10,
        marginTop: '5%',
        height: 80,
        justifyContent: 'center'
    },
    txt3: {
        color: '#FFFFFF',
        fontSize: wp(3.8),
        fontFamily: 'Laila-Medium',
        alignSelf: 'center',

    },
    btn: {
        backgroundColor: '#B6BEA9',
        height: 35,
        width: 90,
        borderRadius: 10,
        justifyContent: 'center',
        alignSelf:'center',
        marginVertical:'5%'
    }
})

export default STYLES; 