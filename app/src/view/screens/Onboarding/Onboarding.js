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




import CustomButton from '../../../assets/Custom/Custom_Button';
import { useIsFocused } from '@react-navigation/native';
import AsyncStorage from "@react-native-async-storage/async-storage";
import styles from './styles';
LogBox.ignoreAllLogs();

const App = ({ navigation }) => {
    const isFocused = useIsFocused()

    useEffect(() => {

    }, [isFocused]);



    return (
        <ScrollView style={styles.bg} contentContainerStyle={{ flexGrow: 1 }}>
            <StatusBar barStyle={'dark-content'} backgroundColor={'transparent'} translucent={true} />
            <View style={styles.mainv}>
                <Image source={appImages.bbg} style={{ width: '100%', height: 140 }} resizeMode='stretch' />
                <Image source={appImages.llg} style={{ width: 160, height: 160, marginTop: '12%', alignSelf: 'center' }} />
                <Text style={styles.txt}>Welcome to</Text>
                <Text style={styles.txt1}>The Smart Stork App</Text>
                <View style={{ alignSelf: 'center', position: 'absolute', bottom: '5%' }}>

                    <CustomButton
                        title="Get Started"
                        load={false}
                        // checkdisable={inn == '' && cm == '' ? true : false}
                        customClick={() => {

                            navigation.navigate('Tell_us_about_your_self')
                        }}
                    />



                    <Text onPress={()=>{navigation.navigate('Signin')}} style={styles.txt2}>Sign In</Text>
                </View>
            </View>
        </ScrollView>
    )
}

export default App;