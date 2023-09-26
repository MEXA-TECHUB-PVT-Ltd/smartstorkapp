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
        color: '#898989',
        fontSize: wp(4),
        fontFamily: 'Laila-Medium',
        alignSelf: 'center',
        marginTop: '2%'
    },
    txt1: {
        color: '#282828',
        fontSize: wp(10),
        fontFamily: 'Laila-Bold',
        alignSelf: 'center',
        marginTop: '35%'
    },
    txt2: {
        marginLeft: '3%',
        textDecorationLine: 'line-through',
        color: '#A8A8A8',
        fontSize: wp(4),
        fontFamily: 'Laila-Medium',
    },
    txt3: {
        marginLeft: '3%',
        color: '#464646',
        fontSize: wp(4),
        fontFamily: 'Laila-Medium',
    },
    v1: { marginHorizontal: '7%', marginTop: '30%', alignSelf: 'center' ,marginBottom:'20%'},
    v2: { flexDirection: 'row', alignItems: 'center' }
})

export default STYLES; 