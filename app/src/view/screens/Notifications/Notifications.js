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


import Text_goback from '../../../assets/Custom/Text_goback';
import Head_Text from '../../../assets/Custom/Head_Text';

import CustomButton from '../../../assets/Custom/Custom_Button';
import { useIsFocused } from '@react-navigation/native';
import AsyncStorage from "@react-native-async-storage/async-storage";
import styles from './styles';
LogBox.ignoreAllLogs();
import N1 from './../../../assets/svg/n1.svg';
import N2 from './../../../assets/svg/n2.svg';
import N3 from './../../../assets/svg/n3.svg';
import N4 from './../../../assets/svg/n4.svg';
import N5 from './../../../assets/svg/n5.svg';
import N6 from './../../../assets/svg/n6.svg';
import { Item } from 'react-native-paper/lib/typescript/components/Drawer/Drawer';
const App = ({ navigation }) => {
    const isFocused = useIsFocused()

    useEffect(() => {

    }, [isFocused]);

    const [length, setlength] = useState([
        {
            id: 1,
            head: 'Supplement Reminder',
            des: 'Dont forget to take your daily supplements to ensure youre feeling your best.',
            img: N1,
            date: '03:00 pm'
        },
        {
            id: 2,
            head: 'Daily Log Reminder',
            des: 'Keeping a daily log can help you stay organized',
            img: N2,
            date: '03:00 pm'
        },
        {
            id: 3,
            head: 'Exercise Reminder',
            des: 'Its that time of day when you have the opportunity to boost your energy.',
            img: N3,
            date: '03:00 pm'
        },
        {
            id: 4,
            head: 'Yoga Reminder',
            des: 'Its time to reconnect with your inner peace and flexibility through yoga.',
            img: N4,
            date: '03:00 pm'
        },
        {
            id: 5,
            head: 'Meditation Reminder',
            des: 'Take a moment to nurture your inner peace and well-being. Your meditation practice awaits you.',
            img: N5,
            date: '03:00 pm'
        },
        {
            id: 6,
            head: 'Exercise Reminder',
            des: 'Its that time of day when you have the opportunity to boost your energy.',
            img: N6,
            date: '03:00 pm'
        },
        {
            id: 6,
            head: 'Test OPK Reminder',
            des: 'Dont forget to perform your (OPK) test today to track your fertile window accurately.',
            img: N2,
            date: '03:00 pm'
        }
    ]);

    return (
        <ScrollView style={styles.bg} contentContainerStyle={{ flexGrow: 1 }}>

            <View style={styles.mainv}>
                <Text_goback title='Notifications' />
                <View style={{ marginHorizontal: '5%' }}>
                    <FlatList
                        data={length}
                        
                        ItemSeparatorComponent={Divider}
                        renderItem={({ item, index }) => {
                            return <TouchableOpacity
                                style={[styles.box, {
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    marginVertical:'3%'
                                }]}
                                onPress={() => {

                                }}
                            >
                                <item.img />
                                <View>
                                    <Text style={[styles.txt1]}>
                                        {item.head}
                                    </Text>
                                    <Text style={[styles.txt]}>
                                        {item.des}
                                    </Text>
                                </View>
                                <View style={{position:'absolute',right:'2%',top:'10%'}}>
                                    <Text style={[styles.txt2]}>{item.date}</Text>
                                    </View>
                            </TouchableOpacity>
                        }}

                        numColumns={1}
                        keyExtractor={item => item.id}
                    />
                </View>
            </View>
        </ScrollView>
    )
}

export default App;