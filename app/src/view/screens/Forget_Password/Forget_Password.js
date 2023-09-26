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
    Pressable, StatusBar, TextInput
} from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { appImages } from '../../../assets/utilities/index'
import {
    Button, Divider,
} from 'react-native-paper';
import { heightPercentageToDP, widthPercentageToDP, widthPercentageToDP as wp } from 'react-native-responsive-screen';







import Go_back from '../../../assets/Custom/Go_back';

import CustomButton from '../../../assets/Custom/Custom_Button';
import { useIsFocused } from '@react-navigation/native';
import AsyncStorage from "@react-native-async-storage/async-storage";
import styles from './styles';
LogBox.ignoreAllLogs();

const App = ({ navigation }) => {
    const isFocused = useIsFocused()
    const [email, setemail] = useState("")

    const [check, setcheck] = useState(false)

    useEffect(() => {

    }, [isFocused]);



    return (
        <ScrollView style={styles.bg} contentContainerStyle={{ flexGrow: 1 }}>
            {/* <StatusBar barStyle={'dark-content'} backgroundColor={'transparent'} translucent={true} /> */}
            <View style={styles.mainv}>
              <Go_back/>
                <Text style={styles.txt}>Forgot Password</Text>
                <Text style={styles.txt1}>Enter your email address below for the verification code</Text>
                <View style={styles.v1}>
                    <Text style={styles.txt4}>Email Address</Text>
                    <View style={[styles.inputstyle, { marginVertical: '2%' }]}>
                        <MaterialCommunityIcons name="email-outline" size={24} color={'#B6BEA9'} style={{ marginHorizontal: '3%', alignSelf: 'center' }} />
                        <TextInput
                            placeholder='Enter your email'
                            placeholderTextColor={'#262626'}
                            onChangeText={email => setemail(email)}
                        />
                    </View>

                </View>


                <View style={{ alignSelf: 'center', marginTop: '40%', marginBottom: '5%' }}>
                <CustomButton
                        title="Send Code"
                        load={false}
                        // checkdisable={inn == '' && cm == '' ? true : false}
                        customClick={() => {

                            navigation.navigate('Verification')
                        }}
                    />
                   

                </View>
            </View>
        </ScrollView>
    )
}

export default App;