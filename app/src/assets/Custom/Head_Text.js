import { View, Text, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';
import React from 'react';
import { Button } from 'react-native-paper';
import { widthPercentageToDP as wp} from 'react-native-responsive-screen';

export default function Head_Text(props) {
    return (
        <Text style={styles.txt}>{props.title}</Text>
    );
}
const styles = StyleSheet.create({
  
    txt: {
        color: 'black',
        fontSize: wp(5.5),
        fontFamily: 'Laila-SemiBold',
        alignSelf: 'center',
        textAlign: 'center',
        marginTop: '5%'
    },
});