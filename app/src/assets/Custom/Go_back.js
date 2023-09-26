import { View, Text, TouchableOpacity, StyleSheet, ActivityIndicator,ImageBackground,StatusBar } from 'react-native';
import React from 'react';
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Back from './../svg/back.svg'
import { appImages } from '../utilities';
export default function Custom_Button(props) {
    const navigation = useNavigation()
    return (
        <View style={{ }}>
             <StatusBar barStyle={'dark-content'} backgroundColor={'transparent'} translucent={true} />
            <ImageBackground source={appImages.bg} style={{ width: '100%', height: 140 }} resizeMode='stretch' >
                <TouchableOpacity 
                    activeOpacity={0.7}
                    onPress={()=>{navigation.goBack()}}>
                        <Back width={20} height={20} style={{ marginTop: '14%', marginLeft: '5%' }} />
                    </TouchableOpacity>
                </ImageBackground>
        </View>
    );
}