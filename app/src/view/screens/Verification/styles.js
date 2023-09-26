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
        color: '#303030',
        fontSize: wp(5.5),
        fontFamily: 'Laila-Bold',
        alignSelf: 'center',
        marginTop: '10%'
    },
    txt1: {
        color: '#898989',
        fontSize: wp(4.2),
        marginHorizontal: '9%',
        textAlign: 'center',
        fontFamily: 'Laila-Medium',
        marginTop: '2%',
        alignSelf: 'center',
    },
   
  
    button: {
        // flexDirection: 'row',
        backgroundColor: '#B6BEA9',
        borderRadius: 10,
        width: 300,
        marginBottom: '3%',
    },
    // ------------------------verification styling-------------------------------
    root: { flex: 1, padding: 0, marginBottom: '10%', marginRight: '8%',marginTop:'20%' },
    title: { textAlign: 'center', fontSize: 30 },
    codeFieldRoot: { marginTop: 10, marginLeft: '5%' },
    cell: {
        width: 45,
        height: 45,
        lineHeight: 38,
        fontSize: 20,
        fontFamily:'Laila-Medium',
        borderWidth: 1,
        borderColor: '#F5F5F5',
        backgroundColor:'#F5F5F5',
        color: 'black',
        textAlign: 'center',
        marginHorizontal: 20,
        borderRadius: 10,
        paddingTop:'2%'
    },
    focusCell: {
        borderColor: '#B6BEA9',
        backgroundColor:'white',
        fontFamily:'Laila-Medium',
        paddingTop:'2%'
    },
    textWS: {
        color: 'gray',
        textAlign: 'center',
        fontSize: 14
    },
    textWL: {
        color: 'gray',
        textAlign: 'center',
        fontSize: 15
    },
})

export default STYLES; 