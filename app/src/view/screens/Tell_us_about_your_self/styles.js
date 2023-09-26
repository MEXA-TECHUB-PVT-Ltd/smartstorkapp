import { StyleSheet } from 'react-native'

import { widthPercentageToDP as wp, heightPercentageToDP as hp, widthPercentageToDP } from 'react-native-responsive-screen';
const STYLES = StyleSheet.create({

    myBackground: {
        backgroundColor: 'white',
        flex: 1
    },
    vbtnlast: {
        position: 'absolute',
        marginTop: 0,
        bottom: '0%',
        width: '100%',
        height: 90,
        backgroundColor: 'transparent',
        alignItems: 'center',
    },
    button: {
        // flexDirection: 'row',
        backgroundColor: 'transparent',
        borderRadius: 25,
        width: 320,
        marginBottom: '5%'
    },

    v11: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 140
    },
    p: {
        borderRadius: 20,
        width: 260,
        height: 5,
    },
    btnl: {

        width: 280,
        justifyContent: 'center',
        alignSelf: 'center',
        padding: '3%',
        borderRadius: 10,
        alignItems: 'center',
        marginVertical: 5,
    },
    txt: {
        color: 'black',
        fontSize: wp(5.7),
        fontFamily: 'Laila-SemiBold',
        alignSelf: 'center',
        textAlign: 'center',
        marginTop: '5%'
    },
    txt1: {
        fontSize: widthPercentageToDP(5),
        fontFamily: 'Laila-Medium',
        color: 'white'
    },
    txt4: {
        color: '#C4B1AB',
        fontSize: wp(4.6),
        fontFamily: 'Laila-SemiBold',
        marginTop: '2%',
        marginBottom: '2%'
    },
    inputstyle: {

        borderTopLeftRadius: 10,
        flexDirection: 'row',
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        height: 55,
        backgroundColor: '#ffff',
        paddingLeft: '4%',
        borderWidth: 1,
        width: 140,
        borderColor: '#E6E6E6'
    },
    inputstyle1: {

        borderTopLeftRadius: 10,
        flexDirection: 'row',
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        height: 55,
        backgroundColor: '#ffff',
        paddingLeft: '4%',
        borderWidth: 1,
        borderColor: '#E6E6E6'
    },
    v1: {
        justifyContent: 'space-between',
        borderTopLeftRadius: 10,
        flexDirection: 'row',
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        height: 55,
        backgroundColor: '#0000000A',
        paddingHorizontal: '4%',
        paddingVertical: '5%',
        // borderWidth: 1,
        // borderColor: '#E6E6E6'
    },



    box: {
        backgroundColor: '#F4F6FA',
        borderRadius: 10,
        flexDirection: 'row',
        width: '100%',
        height: 55,
        marginTop: '6%',
        padding: '5%',
        alignItems: 'center'
    },
    txt11: {
        fontSize: wp(4),
        fontFamily: 'Laila-SemiBold',
        color: '#191919',
        marginLeft: '7%'
    },
    txt2: {
        fontSize: wp(3),
        fontFamily: 'Laila-SemiBold',
        marginTop: '2%',
        color: '#0C0C0C'
    },
    txt3: {
        fontSize: wp(3.6),
        fontFamily: 'Laila-SemiBold',
        marginLeft:'2%',
        color: '#0C0C0C'
    },
    btn2: {

        width: 140,
        justifyContent: 'center',

        padding: '2.5%',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#B6BEA9',
        alignItems: 'center',

    },
    btn3: {
        borderWidth: 1,
        borderColor: '#B6BEA9',
        width: 140,
        justifyContent: 'center',
        padding: '2.5%',
        borderRadius: 10,
        alignItems: 'center',
        marginLeft: '7%'
    },
})

export default STYLES; 