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


import Go_back from '../../../assets/Custom/Go_back';
import Head_Text from '../../../assets/Custom/Head_Text';

import CustomButton from '../../../assets/Custom/Custom_Button';
import { useIsFocused } from '@react-navigation/native';
import AsyncStorage from "@react-native-async-storage/async-storage";
import styles from './styles';
LogBox.ignoreAllLogs();
import Blank_check from './../../../assets/svg/Blank_check.svg';
import Check from './../../../assets/svg/check.svg';
const App = ({ navigation }) => {
    const isFocused = useIsFocused()
    const [check, setcheck] = useState(false)
    const [check1, setcheck1] = useState(false)
    const [check2, setcheck2] = useState(false)
    const [check3, setcheck3] = useState(false)
    useEffect(() => {

    }, [isFocused]);



    return (
        <ScrollView style={styles.bg} contentContainerStyle={{ flexGrow: 1 }}>

            <View style={styles.mainv}>
                <Go_back />
                <Head_Text title="Privacy first" />
                <View style={styles.v1}>
                    <View style={styles.v2}>
                        <TouchableOpacity onPress={() => { setcheck(!check) }}>
                            {check == true ?
                                <Check /> :
                                <Blank_check />}
                        </TouchableOpacity>
                        <Text style={styles.txt}>I agree to <Text style={styles.txt1}>Privacy Policy</Text> and <Text style={styles.txt1}>Terms of Use.</Text></Text>
                    </View>
                </View>


                <View style={styles.v3}>
                    <View style={styles.v2}>
                        <TouchableOpacity onPress={() => { setcheck1(!check1) }}>
                            {check1 == true ?
                                <Check /> :
                                <Blank_check />}
                        </TouchableOpacity>
                        <Text style={styles.txt}>
                            The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and all Agreements
                        </Text>
                    </View>
                </View>

                <View style={styles.v3}>
                    <View style={styles.v2}>
                        <TouchableOpacity onPress={() => { setcheck2(!check2) }}>
                            {check2 == true ?
                                <Check /> :
                                <Blank_check />}
                        </TouchableOpacity>
                        <Text style={styles.txt}>
                            We employ the use of cookies. By accessing you agreed to use cookies in agreement with the Privacy Policy.
                        </Text>
                    </View>
                </View>
                <View style={styles.v3}>
                    <View style={styles.v2}>
                        <TouchableOpacity onPress={() => { setcheck3(!check3) }}>
                            {check3 == true ?
                                <Check /> :
                                <Blank_check />}
                        </TouchableOpacity>
                        <Text style={styles.txt}>
                            These organizations may link to our home page, to publications or to other Website information so long as the link: (a) is not in any way deceptive; (b) does not falsely imply sponsorship, endorsement or approval of the linking party and its products and/or services; and (c) fits within the context of the linking party’s site. These organizations may link to our home page, to publications or to other Website information so long as the link: (a) is not in any way deceptive;
                        </Text>
                    </View>
                </View>
                <View style={{alignSelf:'center',marginTop:'15%',marginBottom:'5%'}}>
                <CustomButton
                        title="Next"
                        load={false}
                        // checkdisable={inn == '' && cm == '' ? true : false}
                        customClick={() => {
                            navigation.navigate('Thank_you')
                        }}
                    />
                    <Text onPress={()=>{
                        setcheck(true)
                        setcheck1(true)
                        setcheck2(true)
                        setcheck3(true)
                    }} style={styles.txt2}>Accept All</Text>
                    </View>
            </View>
        </ScrollView>
    )
}

export default App;