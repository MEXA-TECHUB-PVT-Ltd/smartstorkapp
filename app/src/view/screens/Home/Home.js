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

import { Calendar } from 'react-native-calendars';
import ProgressCircle from 'react-native-progress-circle'
import Back from '../../../assets/svg/back.svg'
import Notification from './../../../assets/svg/notification.svg';
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
    const [selectedDate, setSelectedDate] = useState('');
    const onDayPress = (day) => {
        console.log('---', day)
        console.log('---', day.dateString)
        setSelectedDate(day.dateString);
    };


    useEffect(() => {

    }, [isFocused]);



    return (
        <ScrollView style={styles.bg} contentContainerStyle={{ flexGrow: 1 }}>
            <StatusBar barStyle={'dark-content'} backgroundColor={'transparent'} translucent={true} />
            <View style={styles.mainv}>
                <ImageBackground source={appImages.bg} style={styles.v} resizeMode='stretch' >
                    <View style={styles.v1}>
                        <Text style={styles.txt}>Hello  <Text style={{ fontFamily: 'Laila-Bold', }}>Isabell,</Text></Text>
                        <Text style={styles.txt1}>Good Morning!</Text>
                    </View>
                    <TouchableOpacity
                        activeOpacity={0.7}
                        onPress={() => { navigation.navigate('Notifications') }}>
                        <Notification style={{ marginHorizontal: '4%', }} />
                    </TouchableOpacity>
                </ImageBackground>


                <View style={styles.cv}>
                    <Calendar
                        onDayPress={onDayPress}
                        style={{ borderRadius: 20 }}
                        markedDates={{ [selectedDate]: { selected: true } }}
                        theme={{
                            arrowColor: '#C4B1AB',
                            backgroundColor: 'pink',
                            calendarBackground: '#ffffff',
                            textSectionTitleColor: '#4E4E4E',
                            selectedDayBackgroundColor: '#C4B1AB',
                            selectedDayTextColor: '#FFFFFF',
                            todayTextColor: '#C4B1AB',
                            dayTextColor: '#2d4150',

                            // textDisabledColor: 'pink'
                            // arrowStyle: {
                            //     // Specify the custom icons/images for next and previous arrows
                            //     prev: customNextArrow, // Import your custom previous arrow icon/image
                            //     next: customNextArrow, // Import your custom next arrow icon/image
                            //   },
                        }}
                    />
                </View>




                <View style={styles.v2}>
                    <TouchableOpacity
                        activeOpacity={0.7}
                        onPress={()=>{navigation.navigate('Your_log')}}
                        style={styles.btn}>
                        <Text style={styles.btntxt}>+ log</Text>
                    </TouchableOpacity>
                    <Text style={styles.txt2}>25 sep, 2023</Text>
                    <TouchableOpacity
                        activeOpacity={0.7}
                        onPress={() => { navigation.navigate('Results') }}
                        style={styles.btn}>
                        <Text style={styles.btntxt}>Results</Text>
                    </TouchableOpacity>
                </View>


                <View style={[styles.bv, { padding: '4%' }]}>
                    <Text style={styles.txt3}>Current Cycle Day</Text>
                    <Text style={styles.txt4}>CD 14</Text>
                </View>


                <Text style={styles.txt5}>Peak Fertility</Text>

                <View style={[styles.bv, { padding: '3%' }]}>
                    <View>
                        <Text style={styles.txt3}>Ovulation Day</Text>
                        <Text style={[styles.txt3, { marginTop: '3%' }]}>Next NCD</Text>
                    </View>
                    <View>
                        <Text style={[styles.txt4, { color: '#0094FF' }]}>CD 15</Text>
                        <Text style={[styles.txt4, { color: '#FFB444', marginTop: '3%' }]}>CD 17</Text>
                    </View>
                </View>

                <Text style={[styles.txt2, { alignSelf: 'center', marginTop: '2%' }]}>Next period</Text>
                <View style={[styles.bv, { padding: '4%' }]}>
                    <Text style={styles.txt3}>Next period due in</Text>
                    <ProgressCircle
                        percent={50}
                        radius={20}
                        borderWidth={3}
                        color="#B6BEA9"
                        shadowColor="lightgray"
                        bgColor="#fff"
                    >
                        <Text style={{ fontSize: 12, color: 'black', fontFamily: 'Laila-Medium', }}>14</Text>
                    </ProgressCircle>
                </View>
            </View>
        </ScrollView>
    )
}

export default App;