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
    v1: {
        marginHorizontal: '9%',
        marginTop: '3%'
    },
    txt: {
        color: '#303030',
        fontSize: wp(6.6),
        fontFamily: 'Laila-Bold',
        marginLeft: '10%'
    },
    txt1: {
        fontSize: wp(3),
        fontFamily: 'Laila-Medium',

    },
    txt2: {
        color: '#C4B1AB',
        fontSize: wp(4.5),
        fontFamily: 'Laila-SemiBold',

    },
    divid: {
        marginVertical: '5%',
        backgroundColor: '#00000012'
    }
})

export default STYLES; 