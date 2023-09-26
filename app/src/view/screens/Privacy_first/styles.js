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
    v1: { marginLeft: '7%',marginRight:'10%', marginTop: '10%' },
    v2: { flexDirection: 'row'},
    txt: {
        color: '#535353',
        fontSize: wp(3.5),
        fontFamily: 'Laila-Medium',
        // alignSelf: 'center',
        marginLeft: '3%'
    },
    txt1: {
        color: '#B6BEA9',
        fontSize: wp(3.5),
        fontFamily: 'Laila-Medium',
        // alignSelf: 'center',
        marginLeft: '3%'
    },
    v3: {marginLeft: '7%',marginRight:'10%', marginTop: '3%'},
    txt2: {
        color: '#C4B1AB',
        fontSize: wp(5.5),
        fontFamily: 'Laila-Medium',
        alignSelf: 'center',
        marginTop: '1%'
    },
})

export default STYLES; 