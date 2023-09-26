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
import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
} from 'react-native-confirmation-code-field';


import Back from '../../../assets/svg/back.svg'




import CustomButton from '../../../assets/Custom/Custom_Button';
import { useIsFocused } from '@react-navigation/native';
import AsyncStorage from "@react-native-async-storage/async-storage";
import styles from './styles';
LogBox.ignoreAllLogs();
const CELL_COUNT = 4;
const App = ({ navigation }) => {
    const isFocused = useIsFocused()
    
    const [value, setValue] = useState('');
    const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
    });

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
                <Text style={styles.txt}>Verification</Text>
                <Text style={styles.txt1}>Enter the code that you received on your email address</Text>
                <View style={styles.root}>
                <CodeField
                    ref={ref}
                    {...props}

                    value={value}
                    onChangeText={setValue}
                    cellCount={CELL_COUNT}
                    rootStyle={styles.codeFieldRoot}
                    keyboardType="number-pad"
                    textContentType="oneTimeCode"
                    renderCell={({ index, symbol, isFocused }) => (
                        <Text
                            key={index}
                            style={[styles.cell, isFocused && styles.focusCell]}
                            onLayout={getCellOnLayoutHandler(index)}>
                            {symbol || (isFocused ? <Cursor /> : null)}
                        </Text>
                    )}
                />
            </View>
  


                <View style={{ alignSelf: 'center', marginTop: '20%', marginBottom: '5%' }}>
                <CustomButton
                        title="Verify"
                        load={false}
                        // checkdisable={inn == '' && cm == '' ? true : false}
                        customClick={() => {

                            navigation.navigate('Reset_password')
                        }}
                    />
                   
                </View>
            </View>
        </ScrollView>
    )
}

export default App;