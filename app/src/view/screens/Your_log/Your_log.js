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
import Blank_check from './../../../assets/svg/Blank_check.svg';
import Check from './../../../assets/svg/check.svg';
import { appImages } from '../../../assets/utilities/index'
import {
    Button, Divider,
} from 'react-native-paper';
import { heightPercentageToDP, widthPercentageToDP, widthPercentageToDP as wp } from 'react-native-responsive-screen';


import B1 from './../../../assets/svg/b1.svg';
import B2 from './../../../assets/svg/b2.svg';
import B3 from './../../../assets/svg/b3.svg';



import Go_back from '../../../assets/Custom/Go_back';

import CustomButton from '../../../assets/Custom/Custom_Button';
import { useIsFocused } from '@react-navigation/native';
import AsyncStorage from "@react-native-async-storage/async-storage";
import styles from './styles';
LogBox.ignoreAllLogs();

const App = ({ navigation }) => {
    const isFocused = useIsFocused()

    const [check, setcheck] = useState(0)
    const [check1, setcheck1] = useState(0)
    const [ch, setch] = useState(false)
    const [ch1, setch1] = useState(false)
    const [ch2, setch2] = useState(false)
    const [ch3, setch3] = useState(false)
    const [ch4, setch4] = useState(false)
    const [ch5, setch5] = useState(false)
    const [ch6, setch6] = useState(false)
    const [ch7, setch7] = useState(false)
    const [ch8, setch8] = useState(false)
    const [type, settype] = useState([
        {
            id: 1,
            head: 'Light',
            img: B1
        },
        {
            id: 2,
            head: 'Medium',
            img: B2
        },
        {
            id: 3,
            head: 'Heavy',
            img: B3
        }
    ]);
    const [mucus, setmucus] = useState([
        {
            id: 1,
            head: 'None',
        },
        {
            id: 2,
            head: 'Dry',
        },
        {
            id: 3,
            head: 'Sticky',
        },
        {
            id: 2,
            head: 'Wet',
        },
        {
            id: 3,
            head: 'EWCM',
        }
    ]);
    useEffect(() => {

    }, [isFocused]);



    return (
        <ScrollView style={styles.bg} contentContainerStyle={{ flexGrow: 1 }}>
            {/* <StatusBar barStyle={'dark-content'} backgroundColor={'transparent'} translucent={true} /> */}
            <View style={styles.mainv}>
                <Go_back />
                <Text style={styles.txt}>Your Log</Text>
                <View style={styles.v1}>
                    <Text style={styles.txt2}>Menstrual Flow</Text>

                    <FlatList
                        data={type}
                        style={{ marginTop: '5%' }}
                        renderItem={({ item, index }) => {
                            return <TouchableOpacity
                                style={[styles.box, {
                                    backgroundColor: check == index ? '#B6BEA930' : '#FFFFFF',
                                    borderWidth: 1,
                                    borderColor: '#B6BEA9',
                                    flexDirection: 'row',
                                    borderRadius: 20,
                                    width: 90,
                                    alignItems: 'center',
                                    height: 40,
                                    // justifyContent:'space-between',
                                    marginRight: '4%'
                                }]}
                                onPress={() => {
                                    setcheck(index)


                                }}
                            >
                                <item.img width={20} height={20} style={{ marginLeft: '5%' }} />
                                <Text style={[styles.txt1, { color: check == index ? '#656565' : '#2C2C2C' }]}>
                                    {item.head}
                                </Text>

                            </TouchableOpacity>
                        }}

                        numColumns={3}
                        keyExtractor={item => item.id}
                    />


                </View>


                <Divider style={styles.divid} />
                <View style={{ marginHorizontal: '10%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Text style={[styles.txt2,]}>Sex</Text>
                    <TouchableOpacity onPress={() => { setch(!ch) }}>
                        {ch == true ?
                            <Check />
                            : <Blank_check />}
                    </TouchableOpacity>
                </View>



                <Divider style={styles.divid} />
                <View style={{ marginHorizontal: '10%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Text style={[styles.txt2,]}>Protected Sex</Text>
                    <TouchableOpacity onPress={() => { setch1(!ch1) }}>
                        {ch1 == true ?
                            <Check />
                            : <Blank_check />}
                    </TouchableOpacity>
                </View>



                <Divider style={styles.divid} />
                <View style={{ marginHorizontal: '10%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Text style={[styles.txt2,]}>Orgasm </Text>
                    <TouchableOpacity onPress={() => { setch2(!ch2) }}>
                        {ch2 == true ?
                            <Check />
                            : <Blank_check />}
                    </TouchableOpacity>
                </View>



                <Divider style={styles.divid} />
                <View style={{ marginHorizontal: '10%' }}>
                    <Text style={[styles.txt2,]}>Mucus </Text>
                    <FlatList
                        data={mucus}
                        style={{ marginTop: '0%' }}
                        renderItem={({ item, index }) => {
                            return <TouchableOpacity
                                style={[styles.box, {
                                    backgroundColor: check1 == index ? '#B6BEA930' : '#FFFFFF',
                                    borderWidth: 1,
                                    borderColor: '#B6BEA9',
                                    flexDirection: 'row',
                                    borderRadius: 20,
                                    paddingHorizontal: '5%',
                                    paddingVertical: '3%',
                                    alignItems: 'center',
                                    marginTop: '3%',
                                    marginRight: '4%'
                                }]}
                                onPress={() => {
                                    setcheck1(index)


                                }}
                            >
                                <Text style={[styles.txt1, { color: check1 == index ? '#656565' : '#2C2C2C' }]}>
                                    {item.head}
                                </Text>

                            </TouchableOpacity>
                        }}

                        numColumns={3}
                        keyExtractor={item => item.id}
                    />
                </View>

                <Divider style={styles.divid} />
                <View style={{ marginHorizontal: '10%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Text style={[styles.txt2,]}>Ovulation pain </Text>
                    <TouchableOpacity onPress={() => { setch3(!ch3) }}>
                        {ch3 == true ?
                            <Check />
                            : <Blank_check />}
                    </TouchableOpacity>
                </View>


                <Divider style={styles.divid} />
                <View style={{ marginHorizontal: '10%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Text style={[styles.txt2,]}>Cramping  </Text>
                    <TouchableOpacity onPress={() => { setch4(!ch4) }}>
                        {ch4 == true ?
                            <Check />
                            : <Blank_check />}
                    </TouchableOpacity>
                </View>



                <Divider style={styles.divid} />
                <View style={{ marginHorizontal: '10%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Text style={[styles.txt2,]}>Exercise Today </Text>
                    <TouchableOpacity onPress={() => { setch5(!ch5) }}>
                        {ch5 == true ?
                            <Check />
                            : <Blank_check />}
                    </TouchableOpacity>
                </View>


                <Divider style={styles.divid} />
                <View style={{ marginHorizontal: '10%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Text style={[styles.txt2,]}>Meditation/Yoga </Text>
                    <TouchableOpacity onPress={() => { setch6(!ch6) }}>
                        {ch6 == true ?
                            <Check />
                            : <Blank_check />}
                    </TouchableOpacity>
                </View>



                <Divider style={styles.divid} />
                <View style={{ marginHorizontal: '10%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Text style={[styles.txt2,]}>08 Hours Sleep </Text>
                    <TouchableOpacity onPress={() => { setch7(!ch7) }}>
                        {ch7 == true ?
                            <Check />
                            : <Blank_check />}
                    </TouchableOpacity>
                </View>

                <Divider style={styles.divid} />
                <View style={{ marginHorizontal: '10%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Text style={[styles.txt2,]}>OPK test</Text>
                    <TouchableOpacity onPress={() => { setch8(!ch8) }}>
                        {ch8 == true ?
                            <Check />
                            : <Blank_check />}
                    </TouchableOpacity>
                </View>



                <View style={{ alignSelf: 'center', marginTop: '20%', marginBottom: '5%' }}>
                    <CustomButton
                        title="Next"
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