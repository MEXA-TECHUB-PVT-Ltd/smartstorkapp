import React, { useState, useEffect, useRef } from 'react';
import {
    StyleSheet,
    Text,
    View, Image, ImageBackground,
    PermissionsAndroid, StatusBar, TextInput,
    TouchableOpacity, LogBox, ScrollView, ActivityIndicator, Modal, Alert, Pressable, FlatList
} from 'react-native';
import {
    Button,
    TouchableRipple,
    Appbar,
    Divider, ProgressBar, RadioButton, Checkbox
} from 'react-native-paper';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native'
import { appImages } from '../../../assets/utilities'
import styles from './styles';
import axios from 'axios';
LogBox.ignoreAllLogs();

import Blank_check from './../../../assets/svg/blank_check.svg';
import Check from './../../../assets/svg/check.svg';

import A1 from './../../../assets/svg/a1.svg';
import A2 from './../../../assets/svg/a2.svg';

import Head_Text from '../../../assets/Custom/Head_Text';

import { Picker, DatePicker } from 'react-native-wheel-pick';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useIsFocused } from '@react-navigation/native';
import AsyncStorage from "@react-native-async-storage/async-storage";
import DropDownPicker from 'react-native-dropdown-picker';

import { Calendar } from 'react-native-calendars';
const SignIn = () => {
    const navigation = useNavigation()
    const [barvalue, setbarvalue] = useState(0.1);
    const [check, setcheck] = useState('first');
    const [selectedDate, setSelectedDate] = useState('');
    const isFocused = useIsFocused()


    const [ch1, setch1] = useState(0);
    const [ch2, setch2] = useState(0);
    const [ch3, setch3] = useState(0);

    const [cycle_length, setcycle_length] = useState('');
    const [cycle_type, setcycle_type] = useState('');
    const [no_pregnant, setno_pregnant] = useState('');

    const [no_of_child, setno_of_child] = useState(0);

    const [trying, settrying] = useState(0);
    const [no_pregnancies, setno_pregnancies] = useState('');


    const [select_gender, setselect_gender] = useState('Select Gender');
    const [items, setItems] = useState([
        { label: 'Male', value: 'male' },
        { label: 'Female', value: 'female' }
    ]);
    const [open, setOpen] = useState(false);

    const [select_gender1, setselect_gender1] = useState('Select Gender');
    const [items1, setItems1] = useState([
        { label: 'Male', value: 'male' },
        { label: 'Female', value: 'female' }
    ]);
    const [open1, setOpen1] = useState(false);



    const weightsInKg = Array.from({ length: 400 }, (_, index) => `${(index + 1) * 0.5} kg`);






    const [length, setlength] = useState([
        {
            id: 1,
            head: 'Less than 28 days',
        },
        {
            id: 2,
            head: '28-29 Days',
        },
        {
            id: 3,
            head: 'Longer than 29 days',
        }
    ]);
    const [type, settype] = useState([
        {
            id: 1,
            head: 'Regular',
        },
        {
            id: 2,
            head: 'Irregular',
        }
    ]);
    const [pregnant, setpregnant] = useState([
        {
            id: 1,
            head: 'No',
        },
        {
            id: 2,
            head: 'Currently trying to conceive',
        },
        {
            id: 3,
            head: 'Yes',
        }
    ]);

    const onDayPress = (day) => {
        console.log('---', day)
        console.log('---', day.dateString)
        setSelectedDate(day.dateString);
    };



    const call1 = () => {
        setcheck('secound')
        setbarvalue(0.2)


        console.log('call1 data store in variables are')

    }
    const call2 = () => {
        setcheck('third')
        setbarvalue(0.3)

    }
    const call3 = () => {



        setcheck('fourth')
        setbarvalue(0.4)
    }
    const call4 = () => {

        setcheck('fifth')
        setbarvalue(0.5)
    }

    const call5 = () => {

        setcheck('sixth')
        setbarvalue(0.6)
    }
    const call6 = () => {

        setcheck('seventh')
        setbarvalue(0.7)
    }
    const call7 = () => {

        setcheck('eight')
        setbarvalue(0.8)
    }
    const call8 = () => {

        setcheck('nine')
        setbarvalue(0.9)
    }
    const call9 = () => {

        setcheck('ten')
        setbarvalue(1)
    }
    return (
        <View style={{ flex: 1 }}>
            <StatusBar barStyle={'dark-content'} backgroundColor={'transparent'} translucent={true} />

            <ScrollView style={styles.myBackground}>

                <View style={{ marginBottom: '40%' }}>

                    <ImageBackground source={appImages.bg} style={styles.v11} resizeMode='stretch' >
                        <MaterialIcons name={'navigate-before'} size={36} color={'#212121'} onPress={() => { navigation.goBack() }} />
                        <ProgressBar progress={barvalue} color={'#424242'}
                            style={styles.p}
                        />
                        <Text>          </Text>
                    </ImageBackground>







                    {check == 'first' ?

                        < View style={{ marginHorizontal: '7%' }}>

                            <Head_Text title="Tell Us About Yourself" />
                            <View style={{ marginTop: '15%', flexDirection: 'row', justifyContent: 'space-between' }}>
                                <View>
                                    <Text style={styles.txt4}>First Name</Text>
                                    <View style={[styles.inputstyle, { marginVertical: '2%' }]}>
                                        <TextInput
                                            placeholder='First Name'
                                            placeholderTextColor={'#262626'}
                                            onChangeText={email => setemail(email)}
                                        />
                                    </View>
                                </View>
                                <View>
                                    <Text style={styles.txt4}>Last name</Text>
                                    <View style={[styles.inputstyle, { marginVertical: '2%' }]}>
                                        <TextInput
                                            placeholder='Last name'
                                            placeholderTextColor={'#262626'}
                                            onChangeText={email => setemail(email)}
                                        />
                                    </View>
                                </View>
                            </View>



                            <View style={{ marginTop: '5%' }}>
                                <Text style={styles.txt4}>Email Address</Text>
                                <View style={[styles.inputstyle1, { marginVertical: '2%' }]}>
                                    <TextInput
                                        placeholder='Enter your email'
                                        placeholderTextColor={'#262626'}
                                        onChangeText={email => setemail(email)}
                                    />
                                </View>
                            </View>


                            <View style={{ marginTop: '5%' }}>
                                <Text style={styles.txt4}>Date of birth</Text>
                                <View style={[styles.inputstyle1, { marginVertical: '2%' }]}>
                                    <TextInput
                                        placeholder='Date of birth'
                                        placeholderTextColor={'#262626'}
                                        onChangeText={email => setemail(email)}
                                    />
                                </View>
                            </View>



                            <View style={{ marginTop: '5%' }}>
                                <Text style={styles.txt4}>Hour of birth </Text>
                                <View style={[styles.inputstyle1, { marginVertical: '2%' }]}>
                                    <TextInput
                                        placeholder='Hour of birth'
                                        placeholderTextColor={'#262626'}
                                        onChangeText={email => setemail(email)}
                                    />
                                </View>
                            </View>

                        </View>





                        :





                        check == 'secound' ?
                            < View style={{ marginHorizontal: '7%' }}>

                                <Head_Text title=" Where do you live?" />
                                <Text style={[styles.txt4, { marginTop: '10%' }]}>City</Text>
                                <View style={[styles.v1, { marginVertical: '2%' }]}>
                                    <Text>Select City</Text>
                                    <MaterialIcons name={'expand-more'} size={24} color={'gray'} onPress={() => { navigation.goBack() }} />
                                </View>


                                <Text style={[styles.txt4, { marginTop: '10%' }]}>Country</Text>
                                <View style={[styles.v1, { marginVertical: '2%' }]}>
                                    <Text>Select Country</Text>
                                    <MaterialIcons name={'expand-more'} size={24} color={'gray'} onPress={() => { navigation.goBack() }} />
                                </View>
                            </View>





                            :







                            check == 'third' ?

                                < View style={{ marginHorizontal: '7%' }}>

                                    <Head_Text title="When did your last period start?" />
                                    <View style={{ marginTop: '10%' }}>
                                        <Calendar
                                            onDayPress={onDayPress}

                                            markedDates={{ [selectedDate]: { selected: true } }}
                                            theme={{
                                                arrowColor: '#C4B1AB',
                                                backgroundColor: '#ffffff',
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
                                </View>





                                :



                                check == 'fourth' ?
                                    <View style={{ marginHorizontal: '7%' }}>

                                        <Head_Text title="Your period usually lasts?" />
                                        <Picker
                                            style={{ backgroundColor: 'white', width: '100%', height: 320 }}
                                            // selectedValue='item4'
                                            pickerData={
                                                ['01 Days', '02 Days', '03 Days', '04 Days', '05 Days', '06 Days', '07 Days', '08 Days', '09 Days', '10 Days',
                                                    '11 Days', '12 Days', '13 Days', '14 Days', '15 Days', '16 Days', '17 Days', '18 Days', '19 Days', '20 Days',
                                                    '21 Days', '22 Days', '23 Days', '24 Days', '25 Days', '26 Days', '27 Days', '28 Days', '29 Days', '30 Days']
                                            }
                                            onValueChange={value => { console.log(value) }}
                                            textSize={20}

                                            //   selectTextColor='green'
                                            //   isShowSelectBackground={false} // Default is true
                                            selectBackgroundColor='#8080801A' // support HEXA color Style (#rrggbbaa)
                                            //   // (Please always set 'aa' value for transparent)

                                            //   isShowSelectLine={false} // Default is true
                                            //   selectLineColor='black'
                                            selectLineSize={1} // Default is 4
                                        />
                                    </View>








                                    :






                                    check == 'fifth' ?
                                        < View style={{ marginHorizontal: '7%' }}>

                                            <Head_Text title="Your usual cycle length" />
                                            <FlatList
                                                data={length}
                                                style={{ marginTop: '20%' }}
                                                renderItem={({ item, index }) => {
                                                    return <TouchableOpacity
                                                        style={[styles.box, {
                                                            backgroundColor: ch1 == index ? '#C4B1AB33' : '#F5F5F5',
                                                            borderWidth: 1,
                                                            borderColor: ch1 == index ? '#C4B1AB' : '#F5F5F5'
                                                        }]}
                                                        onPress={() => {
                                                            setch1(index)
                                                            if (index == 0)
                                                                setcycle_length('Less than 28 days')
                                                            if (index == 1)
                                                                setcycle_length('28-29 Days')
                                                            if (index == 2)
                                                                setcycle_length('Longer than 29 days')
                                                        }}
                                                    >
                                                        {ch1 == index ?
                                                            <Check /> :
                                                            <Blank_check />
                                                        }
                                                        <Text style={[styles.txt11]}>
                                                            {item.head}
                                                        </Text>

                                                    </TouchableOpacity>
                                                }}

                                                numColumns={1}
                                                keyExtractor={item => item.id}
                                            />
                                        </View>




                                        :







                                        check == 'sixth' ?
                                            < View style={{ marginHorizontal: '7%' }}>

                                                <Head_Text title="What is your period cycle type?" />
                                                <FlatList
                                                    data={type}
                                                    style={{ marginTop: '20%' }}
                                                    renderItem={({ item, index }) => {
                                                        return <TouchableOpacity
                                                            style={[styles.box, {
                                                                backgroundColor: ch2 == index ? '#C4B1AB33' : '#F5F5F5',
                                                                borderWidth: 1,
                                                                borderColor: ch2 == index ? '#C4B1AB' : '#F5F5F5'
                                                            }]}
                                                            onPress={() => {
                                                                setch2(index)
                                                                if (index == 0)
                                                                    setcycle_type('Regular')
                                                                if (index == 1)
                                                                    setcycle_type('Irregular')

                                                            }}
                                                        >
                                                            {ch2 == index ?
                                                                <Check /> :
                                                                <Blank_check />
                                                            }
                                                            <Text style={[styles.txt11]}>
                                                                {item.head}
                                                            </Text>

                                                        </TouchableOpacity>
                                                    }}

                                                    numColumns={1}
                                                    keyExtractor={item => item.id}
                                                />
                                            </View>



                                            :


                                            check == 'seventh' ?
                                                <View style={{ marginHorizontal: '7%' }}>

                                                    <Head_Text title="Have you ever been pregnant?" />
                                                    <FlatList
                                                        data={pregnant}
                                                        style={{ marginTop: '20%' }}
                                                        renderItem={({ item, index }) => {
                                                            return <TouchableOpacity
                                                                style={[styles.box, {
                                                                    backgroundColor: ch3 == index ? '#C4B1AB33' : '#F5F5F5',
                                                                    borderWidth: 1,
                                                                    borderColor: ch3 == index ? '#C4B1AB' : '#F5F5F5'
                                                                }]}
                                                                onPress={() => {
                                                                    setch3(index)
                                                                    if (index == 0)
                                                                        setno_pregnant('No')
                                                                    if (index == 1)
                                                                        setno_pregnant('Currently trying to conceive')
                                                                    if (index == 2)
                                                                        setno_pregnant('yes')

                                                                }}
                                                            >
                                                                {ch2 == index ?
                                                                    <Check /> :
                                                                    <Blank_check />
                                                                }
                                                                <Text style={[styles.txt11]}>
                                                                    {item.head}
                                                                </Text>

                                                            </TouchableOpacity>
                                                        }}

                                                        numColumns={1}
                                                        keyExtractor={item => item.id}
                                                    />
                                                </View>
                                                :



                                                check == 'eight' ?
                                                    <View style={{ marginHorizontal: '7%', marginBottom: '10%' }}>

                                                        <Head_Text title="Previous pregnancy history" />
                                                        <View style={{ marginTop: 30 }}>
                                                            <Text style={styles.txt4}>No. of Child</Text>
                                                            <View style={[styles.inputstyle1, { marginVertical: '2%', justifyContent: 'space-between', alignItems: 'center' }]}>
                                                                <Text style={styles.txt3}>{no_of_child}</Text>
                                                                <View style={{ marginRight: '5%' }}>
                                                                    <TouchableOpacity activeOpacity={0.7} onPress={() => {
                                                                        setno_of_child(no_of_child + 1)
                                                                    }}>
                                                                        <A1 />
                                                                    </TouchableOpacity>

                                                                    <TouchableOpacity activeOpacity={0.7} onPress={() => {
                                                                        if (no_of_child != 0)
                                                                            setno_of_child(no_of_child - 1)
                                                                    }}>
                                                                        <A2 style={{ marginTop: '20%' }} />
                                                                    </TouchableOpacity>
                                                                </View>

                                                            </View>



                                                            <Text style={styles.txt4}>No. of pregnancies </Text>
                                                            <View style={[styles.inputstyle1, { marginVertical: '2%' }]}>
                                                                <TextInput
                                                                    placeholder=''
                                                                    placeholderTextColor={'#262626'}
                                                                    onChangeText={txt => setno_pregnancies(txt)}
                                                                />
                                                            </View>

                                                            <Text style={styles.txt4}>Child 1 Gender</Text>
                                                            <DropDownPicker
                                                                open={open}
                                                                style={{ backgroundColor: '#ffff', color: 'black', borderColor: 'lightgray', marginBottom: open == false ? 20 : '25%', marginTop: '3%' }}
                                                                containerStyle={{
                                                                    borderColor: 'lightgray',
                                                                }}
                                                                labelStyle={{ borderColor: 'lightgray', color: 'black' }}
                                                                value={select_gender}
                                                                items={items}
                                                                disableBorderRadius={false}
                                                                placeholder={'Select Gender'}
                                                                placeholderStyle={{ fontFamily: 'Laila-Medium', }}
                                                                setOpen={setOpen}
                                                                setValue={setselect_gender}
                                                                dropDownDirection={'BOTTOM'}
                                                                dropDownContainerStyle={{
                                                                    borderColor: 'lightgray',
                                                                    marginTop: '3%',

                                                                }}
                                                                // bottomOffset={10}
                                                                onChangeValue={(value) => {
                                                                    setselect_gender(value)
                                                                }
                                                                }
                                                                setItems={setItems}
                                                            />

                                                            <Text style={styles.txt4}>Child 2 Gender</Text>
                                                            <DropDownPicker
                                                                open={open1}
                                                                style={{ backgroundColor: '#ffff', color: 'black', borderColor: 'lightgray', marginBottom: open == false ? 0 : '25%', marginTop: '3%' }}
                                                                containerStyle={{
                                                                    borderColor: 'lightgray',
                                                                }}
                                                                labelStyle={{ borderColor: 'lightgray', color: 'black' }}
                                                                value={select_gender1}
                                                                items={items1}
                                                                disableBorderRadius={false}
                                                                placeholder={'Select Gender'}
                                                                placeholderStyle={{ fontFamily: 'Laila-Medium', }}
                                                                setOpen={setOpen1}
                                                                setValue={setselect_gender1}
                                                                dropDownDirection={'BOTTOM'}
                                                                dropDownContainerStyle={{
                                                                    borderColor: 'lightgray',
                                                                    marginTop: '3%',

                                                                }}
                                                                // bottomOffset={10}
                                                                onChangeValue={(value) => {
                                                                    setselect_gender1(value)
                                                                }
                                                                }
                                                                setItems={setItems1}
                                                            />
                                                        </View>
                                                    </View>




                                                    :






                                                    check == 'nine' ?
                                                        <View style={{ marginHorizontal: '7%', marginBottom: '10%' }}>

                                                            <Head_Text title="How long have you been trying" />
                                                            <View style={{ marginTop: 30 }}>
                                                                <Text style={styles.txt4}>No. of months trying to conceive </Text>
                                                                <View style={[styles.inputstyle1, { marginVertical: '2%', justifyContent: 'space-between', alignItems: 'center' }]}>
                                                                    <Text style={styles.txt3}>{trying}</Text>
                                                                    <View style={{ marginRight: '5%' }}>
                                                                        <TouchableOpacity activeOpacity={0.7} onPress={() => {
                                                                            settrying(trying + 1)
                                                                        }}>
                                                                            <A1 />
                                                                        </TouchableOpacity>

                                                                        <TouchableOpacity activeOpacity={0.7} onPress={() => {
                                                                            if (trying != 0)
                                                                                settrying(trying - 1)
                                                                        }}>
                                                                            <A2 style={{ marginTop: '20%' }} />
                                                                        </TouchableOpacity>
                                                                    </View>

                                                                </View>
                                                            </View>
                                                        </View>

                                                        :



                                                        check == 'ten' ?
                                                        <View style={{ marginHorizontal: '7%', marginBottom: '10%' }}>

                                                        <Head_Text title="Your current weight" />
                                                            <Picker
                                                                style={{ backgroundColor: 'white', width: '100%', height: 320 ,marginTop:'15%'}}
                                                                pickerData={weightsInKg}
                                                                onValueChange={value => console.log(value)}
                                                                textSize={20}
                                                                selectBackgroundColor='#8080801A'
                                                                selectLineSize={1}
                                                            
                                                            />
                                                            </View>
                                                            : null}

                </View>
            </ScrollView >


















            {/* -------------------------------------buttons------------------------------------------------------- */}
            <View style={styles.vbtnlast}>
                <View style={{ marginTop: '5%' }}>
                    {
                        check == 'first' ?

                            <TouchableOpacity activeOpacity={0.7} style={[styles.btnl, {
                                backgroundColor: '#B6BEA9'
                            }]}
                                // disabled={
                                //     name == '' || dob == '' || selectedLanguage == '' || looking == '' || gender == '' ?
                                //         true : false
                                // }

                                onPress={() => { call1() }}>
                                <Text style={styles.txt1}>
                                    Next
                                </Text>
                            </TouchableOpacity>

                            : check == 'secound' ?

                                <TouchableOpacity
                                    // disabled={selectedHobbies.length > 0 ? false : true}
                                    activeOpacity={0.7}
                                    style={[styles.btnl, {
                                        backgroundColor: '#B6BEA9'
                                    }]}
                                    onPress={() => { call2() }}>
                                    <Text style={styles.txt1}>
                                        Next
                                    </Text>
                                </TouchableOpacity>

                                : check == 'third' ?

                                    <TouchableOpacity
                                        // disabled={city == '' || countryname == '' || bio == '' ?
                                        //     true : false}
                                        activeOpacity={0.7}
                                        style={[styles.btnl, {
                                            backgroundColor: '#B6BEA9'
                                        }]}
                                        onPress={() => { call3() }}>
                                        <Text style={styles.txt1}>
                                            Next
                                        </Text>
                                    </TouchableOpacity>
                                    : check == 'fourth' ?
                                        <View>
                                            <TouchableOpacity activeOpacity={0.7} style={[styles.btnl, {
                                                backgroundColor: '#B6BEA9'
                                            }]}
                                                onPress={() => {
                                                    call4()

                                                }}>
                                                <Text style={styles.txt1}>
                                                    Next
                                                </Text>
                                            </TouchableOpacity>

                                        </View>
                                        : check == 'fifth' ?
                                            <View>
                                                <TouchableOpacity activeOpacity={0.7} style={[styles.btnl, {
                                                    backgroundColor: '#B6BEA9'
                                                }]}
                                                    onPress={() => {
                                                        call5()

                                                    }}>
                                                    <Text style={styles.txt1}>
                                                        Next
                                                    </Text>
                                                </TouchableOpacity>

                                            </View>
                                            : check == 'sixth' ?
                                                <View style={{ flexDirection: 'row' }}>
                                                    <TouchableOpacity activeOpacity={0.7} style={[styles.btn2, {
                                                        backgroundColor: '#FFFFFF'
                                                    }]}
                                                        onPress={() => {
                                                            call6()

                                                        }}>
                                                        <Text style={[styles.txt1, { color: '#B6BEA9' }]}>
                                                            Skip
                                                        </Text>
                                                    </TouchableOpacity>
                                                    <TouchableOpacity activeOpacity={0.7} style={[styles.btn3, {
                                                        backgroundColor: '#B6BEA9'
                                                    }]}
                                                        onPress={() => {
                                                            call6()

                                                        }}>
                                                        <Text style={styles.txt1}>
                                                            Next
                                                        </Text>
                                                    </TouchableOpacity>

                                                </View>



                                                : check == 'seventh' ?
                                                    <View style={{ flexDirection: 'row' }}>
                                                        <TouchableOpacity activeOpacity={0.7} style={[styles.btn2, {
                                                            backgroundColor: '#FFFFFF'
                                                        }]}
                                                            onPress={() => {
                                                                call7()

                                                            }}>
                                                            <Text style={[styles.txt1, { color: '#B6BEA9' }]}>
                                                                Skip
                                                            </Text>
                                                        </TouchableOpacity>
                                                        <TouchableOpacity activeOpacity={0.7} style={[styles.btn3, {
                                                            backgroundColor: '#B6BEA9'
                                                        }]}
                                                            onPress={() => {
                                                                call7()

                                                            }}>
                                                            <Text style={styles.txt1}>
                                                                Next
                                                            </Text>
                                                        </TouchableOpacity>

                                                    </View>
                                                    : check == 'eight' ?
                                                        <View>
                                                            <TouchableOpacity activeOpacity={0.7} style={[styles.btnl, {
                                                                backgroundColor: '#B6BEA9'
                                                            }]}
                                                                onPress={() => {
                                                                    call8()

                                                                }}>
                                                                <Text style={styles.txt1}>
                                                                    Next
                                                                </Text>
                                                            </TouchableOpacity>

                                                        </View>

                                                        : check == 'nine' ?
                                                            <View>
                                                                <TouchableOpacity activeOpacity={0.7} style={[styles.btnl, {
                                                                    backgroundColor: '#B6BEA9'
                                                                }]}
                                                                    onPress={() => {
                                                                        call9()

                                                                    }}>
                                                                    <Text style={styles.txt1}>
                                                                        Next
                                                                    </Text>
                                                                </TouchableOpacity>

                                                            </View> 
                                                            
                                                            
                                                            : check == 'ten' ?
                                                            <View>
                                                                <TouchableOpacity activeOpacity={0.7} style={[styles.btnl, {
                                                                    backgroundColor: '#B6BEA9'
                                                                }]}
                                                                    onPress={() => {
                                                                     navigation.navigate('')

                                                                    }}>
                                                                    <Text style={styles.txt1}>
                                                                        Next
                                                                    </Text>
                                                                </TouchableOpacity>

                                                            </View> : null}
                </View>
            </View>


        </View >
    );
};

export default SignIn



// import React, { useState } from 'react';
// import { View, Text, StyleSheet } from 'react-native';
// import { Picker, DatePicker } from 'react-native-wheel-pick';

// const App = () => {

//     return (
//         <View style={styles.container}>
//             <Text style={styles.label}>Select a number of days:</Text>
//             <Picker
//                 style={{ backgroundColor: 'white', width: '100%', height: 215 }}
//                 // selectedValue='item4'
//                 pickerData={
//                     ['01 Days', '02 Days', '03 Days', '04 Days', '05 Days', '06 Days', '07 Days','08 Days','09 Days','10 Days',
//                     '11 Days','12 Days','13 Days','14 Days','15 Days','16 Days','17 Days','18 Days','19 Days','20 Days',
//                     '21 Days','22 Days','23 Days','24 Days','25 Days','26 Days','27 Days','28 Days','29 Days','30 Days']
//                 }
//                 onValueChange={value => { console.log(value) }}
//                 textSize={20}

//             //   selectTextColor='green'
//             //   isShowSelectBackground={false} // Default is true
//             //   selectBackgroundColor='#8080801A' // support HEXA color Style (#rrggbbaa)
//             //   // (Please always set 'aa' value for transparent)

//             //   isShowSelectLine={false} // Default is true
//             //   selectLineColor='black'
//             //   selectLineSize={6} // Default is 4
//             />

//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     label: {
//         fontSize: 18,
//         marginBottom: 10,
//     },
//     selectedDay: {
//         fontSize: 18,
//         marginTop: 20,
//     },
// });

// export default App;


// import React from 'react';
// import { View } from 'react-native';
// import { Picker } from 'react-native-wheel-pick';

// const App = () => {
//   // Create an array of weights in kilograms with 200 options
//   const weightsInKg = Array.from({ length: 400 }, (_, index) => `${(index + 1) * 0.5} kg`);

//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Picker
//         style={{ backgroundColor: 'white', width: '100%', height: 320 }}
//         pickerData={weightsInKg}
//         onValueChange={value => console.log(value)}
//         textSize={20}
//         selectBackgroundColor='#8080801A'
//         selectLineSize={1}
//       />
//     </View>
//   );
// };

// export default App;
