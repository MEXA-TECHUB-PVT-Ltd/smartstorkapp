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



import Back from '../../../assets/svg/back.svg'




import CustomButton from '../../../assets/Custom/Custom_Button';
import { useIsFocused } from '@react-navigation/native';
import AsyncStorage from "@react-native-async-storage/async-storage";
import styles from './styles';
LogBox.ignoreAllLogs();

const App = ({ navigation }) => {
    const isFocused = useIsFocused()
    const [email, setemail] = useState("")
    const [pass, setpass] = useState("")
    const [check, setcheck] = useState(false)

    useEffect(() => {

    }, [isFocused]);



    return (
        <ScrollView style={styles.bg} contentContainerStyle={{ flexGrow: 1 }}>
            <StatusBar barStyle={'dark-content'} backgroundColor={'transparent'} translucent={true} />
            <View style={styles.mainv}>
                <Image source={appImages.bg} style={{ width: '100%', height: 140 }} resizeMode='stretch' />
                <Image source={appImages.llg} style={{ width: 100, height: 100, marginTop: '3%', alignSelf: 'center' }} />
                <Text style={styles.txt}>Sign In</Text>
                <Text style={styles.txt1}>Sign In to your account</Text>
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
                    <Text style={styles.txt4}>Password</Text>
                    <View style={[styles.inputstyle, { marginVertical: '2%', justifyContent: 'space-between' }]}>
                        <View style={{ flexDirection: 'row' }}>
                            <MaterialCommunityIcons name="lock-outline" size={24} color={'#B6BEA9'} style={{ marginHorizontal: '3%', alignSelf: 'center' }} />
                            <TextInput

                                secureTextEntry={check === false ? true : false}
                                placeholder='Enter your password'
                                placeholderTextColor={'#262626'}

                                onChangeText={pass => setpass(pass)}
                            />
                        </View>
                        {
                            check === true ?
                                <TouchableOpacity onPress={() => { setcheck(false) }} style={{ marginHorizontal: '3%', alignSelf: 'center' }} >
                                    <MaterialCommunityIcons name="eye-outline" size={24} color={'#B6BEA9'} />
                                </TouchableOpacity>

                                :
                                <TouchableOpacity onPress={() => { setcheck(true) }} style={{ marginHorizontal: '3%', alignSelf: 'center' }} >
                                    <MaterialCommunityIcons name="eye-off-outline" size={24} color={'#B6BEA9'} />
                                </TouchableOpacity>
                        }
                    </View>
                </View>

                <Text style={styles.txt5} onPress={() => {
                    navigation.navigate('Forget_Password')
                }}>Forgot Password?</Text>


                <View style={{ alignSelf: 'center', marginTop: '20%', marginBottom: '5%' }}>
                    <CustomButton
                        title="Sign In"
                        load={false}
                        // checkdisable={inn == '' && cm == '' ? true : false}
                        customClick={() => {

                            navigation.navigate('')
                        }}
                    />
                    <Text style={styles.txt2} onPress={() => { navigation.navigate('Tell_us_about_your_self') }}>
                        <Text style={styles.txt3}>
                            Don’t have an account? </Text>
                        Create account
                    </Text>
                </View>
            </View>
        </ScrollView>
    )
}

export default App;