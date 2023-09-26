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
        fontFamily: 'Laila-Medium',
        alignSelf: 'center',
        marginTop: '6%'
    },
    txt1: {
        color: '#B6BEA9',
        fontSize: wp(6.8),
        fontFamily: 'Laila-SemiBold',
        alignSelf: 'center',
    },
    txt2: {
        color: '#C4B1AB',
        fontSize: wp(5.5),
        fontFamily: 'Laila-Medium',
        alignSelf: 'center',
        marginTop: '1%'
    },
    
   
})

export default STYLES; 