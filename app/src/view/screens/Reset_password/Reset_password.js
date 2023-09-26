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
    const [npass, setnpass] = useState("")
    const [cpass, setcpass] = useState("")
    const [check, setcheck] = useState(false)
    const [check1, setcheck1] = useState(false)
    useEffect(() => {

    }, [isFocused]);



    return (
        <ScrollView style={styles.bg} contentContainerStyle={{ flexGrow: 1 }}>
            <StatusBar barStyle={'dark-content'} backgroundColor={'transparent'} translucent={true} />
            <View style={styles.mainv}>
                <ImageBackground source={appImages.bg} style={{ width: '100%', height: 140 }} resizeMode='stretch' >
                    <TouchableOpacity 
                    activeOpacity={0.7}
                    onPress={()=>{navigation.goBack()}}>
                        <Back width={20} height={20} style={{ marginTop: '14%', marginLeft: '5%' }} />
                    </TouchableOpacity>
                </ImageBackground>
                <Text style={styles.txt}>Reset Password</Text>
                <Text style={styles.txt1}>Create a strong password</Text>
                <View style={styles.v1}>
                    <Text style={styles.txt4}>New Password</Text>
                    <View style={[styles.inputstyle, { marginVertical: '2%', justifyContent: 'space-between' }]}>
                        <View style={{ flexDirection: 'row' }}>
                            <MaterialCommunityIcons name="lock-outline" size={24} color={'#B6BEA9'} style={{ marginHorizontal: '3%', alignSelf: 'center' }} />
                            <TextInput

                                secureTextEntry={check === false ? true : false}
                                placeholder='Enter your password'
                                placeholderTextColor={'#262626'}

                                onChangeText={pass => setcpass(pass)}
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

                    <Text style={styles.txt4}>Confirm Password</Text>
                    <View style={[styles.inputstyle, { marginVertical: '2%', justifyContent: 'space-between' }]}>
                        <View style={{ flexDirection: 'row' }}>
                            <MaterialCommunityIcons name="lock-outline" size={24} color={'#B6BEA9'} style={{ marginHorizontal: '3%', alignSelf: 'center' }} />
                            <TextInput

                                secureTextEntry={check1 === false ? true : false}
                                placeholder='Enter your password'
                                placeholderTextColor={'#262626'}

                                onChangeText={pass => setcpass(pass)}
                            />
                        </View>
                        {
                            check1 === true ?
                                <TouchableOpacity onPress={() => { setcheck1(false) }} style={{ marginHorizontal: '3%', alignSelf: 'center' }} >
                                    <MaterialCommunityIcons name="eye-outline" size={24} color={'#B6BEA9'} />
                                </TouchableOpacity>

                                :
                                <TouchableOpacity onPress={() => { setcheck1(true) }} style={{ marginHorizontal: '3%', alignSelf: 'center' }} >
                                    <MaterialCommunityIcons name="eye-off-outline" size={24} color={'#B6BEA9'} />
                                </TouchableOpacity>
                        }
                    </View>
                </View>


                <View style={{ alignSelf: 'center', marginTop: '30%', marginBottom: '5%' }}>
                    <CustomButton
                        title="Reset"
                        load={false}
                        // checkdisable={inn == '' && cm == '' ? true : false}
                        customClick={() => {

                            navigation.navigate('')
                        }}
                    />


                </View>
            </View>
        </ScrollView>
    )
}

export default App;