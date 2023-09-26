import { StyleSheet } from 'react-native'
import { widthPercentageToDP, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { colors } from 'react-native-swiper-flatlist/src/themes';
const STYLES = StyleSheet.create({
    vv: {
justifyContent: 'center', alignItems: 'center',
        marginTop: '10%',
        marginBottom: '5%',
        marginHorizontal: '3%'
    },

    txt: {
        
        color: '#424242',
        fontSize: wp(6),
        fontFamily: 'Laila-Bold',
        marginTop: '2%',
        marginBottom:'2%'
    },
    v1: {
        paddingVertical: '5%',
        paddingHorizontal: '5%',
        borderRadius: 8,
        marginTop: '5%',
        height: 80,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#C4B1AB',
        marginBottom: '3%'
    },

    txt1: {
        fontSize: widthPercentageToDP(5),
        fontFamily: 'Laila-Bold',
        color: '#C4B1AB',
        marginTop: '5%'
    },
    txt2: {
        fontSize: widthPercentageToDP(4),
        fontFamily: 'Laila-Bold',
        color: '#FFFFFF',
    
    },
    txt22: {
        fontSize: widthPercentageToDP(3.6),
        fontFamily: 'Laila-Medium',
        color: '#FFFFFF',
        marginTop: '2%'
    },
    
    txt3: {
        fontSize: widthPercentageToDP(4),
        fontFamily: 'Laila-Regular',
        color: 'black',
    },
    v2: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: '5%'
        // marginBottom:'2%',
        // marginTop:'2%'
    },
    btn1: {
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#FF144D',
        backgroundColor: '#FF144D1F',
        width: 119,
        height: 36,
        borderRadius: 50
    },
    
})

export default STYLES; 