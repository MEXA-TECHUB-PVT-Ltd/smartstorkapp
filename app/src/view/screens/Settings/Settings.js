import React, { useEffect, useRef, useState } from 'react'
import {
    SafeAreaView,
    StyleSheet,
    Dimensions, Linking,
    ScrollView, TextInput, Modal, Pressable,
    View, Image, Text, TouchableOpacity, LogBox, Animated, ImageBackground
} from 'react-native'
import RBSheet from "react-native-raw-bottom-sheet";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
const { height, width } = Dimensions.get('screen')
import { appImages } from '../../../assets/utilities/index'
import {
    Button, Divider, Switch,
} from 'react-native-paper';

import AsyncStorage from "@react-native-async-storage/async-storage";

import styles from './styles';


import { widthPercentageToDP } from 'react-native-responsive-screen';
import { FlatList } from 'react-native';
LogBox.ignoreAllLogs();
const data = [
    {
        id: 1,
        status: false,
        head: 'Balanced Recommendations',
    },
    {
        id: 2,
        status: false,
        head: 'Recently Active',
    },

];

const data2 = [
    {
        id: 1,
        status: false,
        head: 'On Wifi And Mobile Data',
    },
    {
        id: 2,
        status: false,
        head: 'On Wifi Only',
    },

];
const App = ({ navigation }) => {



    const call = (id) => {
        if (id == 0) {
            optionsc1()
        }
        if (id == 1) {
            navigation.navigate('')
        }
    }


    const [categories, setcategories] = useState([

        {
            id: 1,
            head: 'Update Profile',
        },
        {
            id: 2,
            head: 'Update Password',
        },
    ]);
    // ++++++++++++++++++++++++++++++++++++++++++++++++++++++
    const call1 = (id) => {
        if (id == 0) {
            navigation.navigate('')
        }
        if (id == 1) {
            navigation.navigate('')
        }
    }
    const [categories1, setcategories1] = useState([

        {
            id: 1,
            head: 'Period prediction ',
        },
        {
            id: 2,
            head: 'Ovulation and fertility prediction ',
        },
    ]);
    // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    const call2 = (id) => {
        if (id == 0) {
            navigation.navigate('')
        }
        if (id == 1) {
            navigation.navigate('')
        }
        if (id == 2) {
            navigation.navigate('')
        }
        if (id == 3) {
            navigation.navigate('')
        }
        if (id == 4) {
            navigation.navigate('')
        }
        if (id == 5) {
            navigation.navigate('')
        }
    }
    const [categories2, setcategories2] = useState([

        {
            id: 1,
            head: 'Medicine reminder',
        },
        {
            id: 2,
            head: 'Yoga reminder',
        },
        {
            id: 3,
            head: 'Meditation reminder',
        },
        {
            id: 4,
            head: 'Daily log reminder',
        },
        {
            id: 5,
            head: 'Exercise reminder',
        },
        {
            id: 6,
            head: 'Test OPK Reminder',
        },
    ]);
    // +++++++++++++++++++++++++Others+++++++++++++++++++++++++++++++++++
    const call3 = (id) => {
        if (id == 0) {
            navigation.navigate('')
        }
        if (id == 1) {
            navigation.navigate('')
        }
        if (id == 2) {
            navigation.navigate('')
        }
        if (id == 3) {
            navigation.navigate('')
        }
        if (id == 4) {
            navigation.navigate('')
        }
    }
    const [categories3, setcategories3] = useState([

        {
            id: 1,
            head: 'Upgrade to premium',
        },
        {
            id: 2,
            head: 'Share with friends',
        },
        {
            id: 3,
            head: 'Privacy policy',
        },
        {
            id: 4,
            head: 'Rate app',
        },
        {
            id: 5,
            head: 'Logout',
        }
    ]);

    useEffect(() => {

    }, []);



    return (
        <ImageBackground source={appImages.background} style={{ flex: 1 }} >

            <ScrollView>

                <View style={styles.vv}>
                    <Text style={styles.txt}>Settings</Text>
                </View>
                <View style={{ marginHorizontal: '5%' }}>




                    <TouchableOpacity
                        activeOpacity={0.7}
                        onPress={() => { }}
                        style={styles.v1}>
                        <View>
                            <Text style={styles.txt2}>
                                Isabell Aurora
                            </Text>
                            <Text style={styles.txt22}>
                                IsabellAurora123@gmail.com
                            </Text>

                        </View>
                        <MaterialIcons name='navigate-next' color={'white'} size={25} />

                    </TouchableOpacity>




                    {/* ----------------------------------------------------------------------- */}
                    <Text style={styles.txt1}>Profile Settings</Text>
                    <View style={{ marginTop: '0%', marginLeft: '2%', marginBottom: '0%' }}>
                        <FlatList
                            ItemSeparatorComponent={Divider}
                            style={{}}
                            data={categories}
                            showsHorizontalScrollIndicator={false}
                            renderItem={({ item, index }) => {
                                return <TouchableOpacity
                                    activeOpacity={0.7}
                                    onPress={() => { call(index) }}
                                    style={[styles.v2, { marginBottom: '4%' }]}>
                                    <Text style={styles.txt3}>{item.head}</Text>
                                    <MaterialIcons name='navigate-next' color={'black'} size={25} />
                                </TouchableOpacity>
                            }}

                            numColumns={1}
                            keyExtractor={item => item.id}
                        />
                    </View>









                    {/* +++++++++++++++++++++++++++++Cycle____________________________ */}
                    <Text style={styles.txt1}>My Cycle</Text>
                    <View style={{ marginTop: '0%', marginLeft: '2%', marginBottom: '0%' }}>
                        <FlatList
                            ItemSeparatorComponent={Divider}
                            style={{}}
                            data={categories1}
                            showsHorizontalScrollIndicator={false}
                            renderItem={({ item, index }) => {
                                return <TouchableOpacity
                                    activeOpacity={0.7}
                                    onPress={() => { call1(index) }}
                                    style={[styles.v2, { marginBottom: '4%' }]}>
                                    <Text style={styles.txt3}>{item.head}</Text>
                                    <MaterialIcons name='navigate-next' color={'black'} size={25} />
                                </TouchableOpacity>
                            }}

                            numColumns={1}
                            keyExtractor={item => item.id}
                        />
                    </View>

                    {/* +++++++++++++++++++++++++++++++reminder______________________________ */}
                    <Text style={styles.txt1}>Reminders</Text>
                    <View style={{ marginTop: '0%', marginLeft: '2%', marginBottom: '0%' }}>
                        <FlatList
                            ItemSeparatorComponent={Divider}
                            style={{}}
                            data={categories2}
                            showsHorizontalScrollIndicator={false}
                            renderItem={({ item, index }) => {
                                return <TouchableOpacity
                                    activeOpacity={0.7}
                                    onPress={() => { call2(index) }}
                                    style={[styles.v2, { marginBottom: '4%' }]}>
                                    <Text style={styles.txt3}>{item.head}</Text>
                                    <MaterialIcons name='navigate-next' color={'black'} size={25} />
                                </TouchableOpacity>
                            }}

                            numColumns={1}
                            keyExtractor={item => item.id}
                        />
                    </View>


                    {/* +++++++++++++++++++++++++++++++other______________________________ */}
                    <Text style={styles.txt1}>Others</Text>
                    <View style={{ marginTop: '0%', marginLeft: '2%', marginBottom: '0%' }}>
                        <FlatList
                            ItemSeparatorComponent={Divider}
                            style={{}}
                            data={categories3}
                            showsHorizontalScrollIndicator={false}
                            renderItem={({ item, index }) => {
                                return <TouchableOpacity
                                    activeOpacity={0.7}
                                    onPress={() => { call3(index) }}
                                    style={[styles.v2, { marginBottom: '4%' }]}>
                                    <Text style={styles.txt3}>{item.head}</Text>
                                    <MaterialIcons name='navigate-next' color={'black'} size={25} />
                                </TouchableOpacity>
                            }}

                            numColumns={1}
                            keyExtractor={item => item.id}
                        />
                    </View>


                </View>



            </ScrollView >
        </ImageBackground>

    )
}

export default App;
