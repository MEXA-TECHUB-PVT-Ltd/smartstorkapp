import { StyleSheet } from 'react-native'
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
const STYLES = StyleSheet.create({
    bg: {
        flex: 1,
        backgroundColor: 'white',
    },
    mainv: {
        flex: 1,
        backgroundColor: 'white',
        marginBottom: '5%'
    },
    v: { width: '100%', height: 140, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
    v1: {

        marginHorizontal: '7%',
        marginTop: '5%'
    },
    txt: {
        color: '#424242',
        fontSize: wp(5.5),
        fontFamily: 'Laila-Medium',

    },
    txt1: {
        color: '#424242',
        fontSize: wp(4),
        fontFamily: 'Laila-Medium',

    },
    cv: {
        marginTop: '10%',
        marginHorizontal: '5%',
        borderWidth: 1,
        borderColor: '#C4B1AB',
        borderRadius: 10,

    },
    v2: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: '5%',
        marginHorizontal: '5%',
        alignItems: 'center'
    },
    btn: {
        backgroundColor: '#B6BEA9',
        justifyContent: 'center',
        alignItems: 'center',
        width: 90, height: 40,
        borderRadius: 10
    },
    btntxt: {
        color: '#FFFFFF',
        fontSize: wp(4),
        fontFamily: 'Laila-Regular',
    },
    txt2: {
        color: '#424242',
        fontSize: wp(4.5),
        fontFamily: 'Laila-Bold',
    },
    bv: {

        borderTopLeftRadius: 10,
        flexDirection: 'row',
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,

        marginTop: '5%',
        backgroundColor: '#ffff',
        borderWidth: 1,
        borderColor: '#E6E6E6',
        marginVertical: '2%', justifyContent: 'space-between',
        marginHorizontal: '5%',
        alignItems: 'center',
        paddingHorizontal: '5%'
    },
    txt3: {
        color: '#757575',
        fontSize: wp(4),
        fontFamily: 'Laila-Regular',
    },
    txt4: {
        color: '#008535',
        fontSize: wp(4.5),
        fontFamily: 'Laila-Bold',
    },
    txt5: {
        color: '#008535',
        fontSize: wp(4.5),
        alignSelf: 'center',
        marginVertical: '2%',
        fontFamily: 'Laila-Bold',
    },
})

export default STYLES; 