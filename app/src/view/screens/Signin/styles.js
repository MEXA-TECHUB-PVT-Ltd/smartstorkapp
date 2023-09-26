import { StyleSheet } from 'react-native'
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
const STYLES = StyleSheet.create({
    bg: {
      flex:1,
    },
    mainv: {
        flex: 1,
        backgroundColor: 'white'
    },

    txt: {
        color: '#303030',
        fontSize: wp(5.5),
        fontFamily: 'Laila-Bold',
        alignSelf: 'center',
        marginTop: '6%'
    },
    txt1: {
        color: '#898989',
        fontSize: wp(4.6),
        fontFamily: 'Laila-Medium',
        marginTop:'2%',
        alignSelf: 'center',
    },
    txt2: {
        color: '#C4B1AB',
        fontSize: wp(3.4),
        fontFamily: 'Laila-Medium',
        alignSelf: 'center',
        marginTop: '1%'
    },
    txt3: {
        color: '#4E4E4E',
        fontSize: wp(3.4),
        fontFamily: 'Laila-Medium',
        alignSelf: 'center',
        marginTop: '1%'
    },
    txt4: {
        color: '#C4B1AB',
        fontSize: wp(4.6),
        fontFamily: 'Laila-SemiBold',
        marginTop: '2%',
        marginBottom:'2%'
    },
    txt5: {
        color: '#C4B1AB',
        fontSize: wp(4.3),
        fontFamily: 'Laila-Medium',
        alignSelf:'flex-end',
        marginRight:'6%'
        // marginTop: '1%',
        // marginBottom:'2%'
    },
    button: {
        // flexDirection: 'row',
        backgroundColor: '#B6BEA9',
        borderRadius: 10,
        width: 300,
        marginBottom: '3%',
    },
    v1:{
        marginHorizontal:'7%',
        marginTop:'10%'
    },
    inputstyle: {

        borderTopLeftRadius: 10,
        flexDirection: 'row',
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        height: 55,
        backgroundColor: '#ffff',
        borderWidth: 1,
        borderColor: '#E6E6E6'
    },
})

export default STYLES; 