import React, { useEffect, useRef, useState } from 'react'
import {
    SafeAreaView,
    StyleSheet,
    Dimensions,
    ScrollView,
    View, FlatList,
    Image,
    Text,
    TouchableOpacity,
    LogBox,
    Animated,
    ImageBackground,
    Pressable, StatusBar
} from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { appImages } from '../../../assets/utilities/index'
import {
    Button, Divider, TextInput,
} from 'react-native-paper';
import { heightPercentageToDP, widthPercentageToDP, widthPercentageToDP as wp } from 'react-native-responsive-screen';



import Back from '../../../assets/svg/back.svg'

import Blank_check from './../../../assets/svg/Blank_check.svg';
import Check from './../../../assets/svg/check.svg';


import CustomButton from '../../../assets/Custom/Custom_Button';
import { useIsFocused } from '@react-navigation/native';
import AsyncStorage from "@react-native-async-storage/async-storage";
import styles from './styles';
LogBox.ignoreAllLogs();

import Head_Text from '../../../assets/Custom/Head_Text';
const App = ({ navigation }) => {
    const isFocused = useIsFocused()
    const gett = async () => {
        setTimeout(() => {
            navigation.replace("Home")
            console.log('Home')
        }, 1000)
    }


    useEffect(() => {
        gett()
    }, [isFocused]);
  


    return (
        <ScrollView style={styles.bg} contentContainerStyle={{ flexGrow: 1 }}>
            <StatusBar barStyle={'dark-content'} backgroundColor={'transparent'} translucent={true} />
            <View style={styles.mainv}>
                <Image source={appImages.bg} style={{ width: '100%', height: 140 }} resizeMode='stretch' />
                <Head_Text title="Thank you for sharing" />
                <Text style={styles.txt}>Creating your account</Text>
                <ImageBackground source={appImages.ring}
                    style={{ width: '100%', marginTop: '12%', }}
                    resizeMode='stretch'>
                    <ImageBackground source={appImages.progress} style={{ width: 190, height: 190, alignSelf: 'center' }} resizeMode='stretch' >
                        <Text style={styles.txt1}>50%</Text>
                    </ImageBackground>
                    <View style={styles.v1}>
                        <View style={styles.v2}>
                            <Check />
                            <Text style={styles.txt2}>Analyzing your data</Text>
                        </View>

                        <View style={[styles.v2, { marginTop: '5%' }]}>
                            <Blank_check />
                            <Text style={styles.txt3}>Calculating your data</Text>
                        </View>

                        <View style={[styles.v2, { marginTop: '5%' }]}>
                            <Blank_check />
                            <Text style={styles.txt3}>Generating results</Text>
                        </View>
                    </View>
                </ImageBackground>



            </View>
        </ScrollView>
    )
}

export default App;