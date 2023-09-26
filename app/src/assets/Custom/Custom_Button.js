import { View, Text, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';
import React from 'react';
import { Button } from 'react-native-paper';
import { widthPercentageToDP } from 'react-native-responsive-screen';

export default function Custom_Button(props) {
    return (

        <Button
            disabled={props.checkdisable}
            mode="contained"
            onPress={props.customClick}
            style={styles.button}
            contentStyle={{
                padding: '1%',
                justifyContent: 'center',
                alignItems: 'center'
            }}
            loading={props.load}
            labelStyle={{
                fontSize: widthPercentageToDP(5),
                paddingTop: '1%',
                fontFamily: 'Laila-Medium',
                color: '#FFFFFF',
                alignSelf: 'center'
            }}
        >
            {props.title}
        </Button>
    );
}
const styles = StyleSheet.create({
    button: {
        // flexDirection: 'row',
        backgroundColor: '#B6BEA9',
        borderRadius: 10,
        width: 300,
        marginBottom: '3%',
    },
    text: {
        color: 'white',
        alignSelf: 'center',
        fontSize: widthPercentageToDP(4),
        fontFamily: 'Montserrat-Medium',
    },
});