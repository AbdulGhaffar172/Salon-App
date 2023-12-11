import { StyleSheet, Text, View, Image, TextInput, ScrollView, TouchableOpacity } from 'react-native'
import React,{useState} from 'react'
import {Calendar, LocaleConfig} from 'react-native-calendars';
import DatePicker from 'react-native-date-picker'
import PhoneInput from 'react-native-phone-input';

import CountryPicker  
    from 'react-native-country-picker-modal'; 
import CustomBack from '../components/CustomBack';
import CustomBtn from '../components/CustomBtn';
import NavigationNames from '../Navigations/NavigationNames';

const Sechedule = ({navigation}) => {
  const [selected, setSelected] = useState('');
  const [time, setTime] = useState(new Date())
  const [open, setOpen] = useState(false)

  // const [inputValue, setInputValue] = useState('');
   const [phoneNumber, setPhoneNumber] = useState('');
  //  const [phoneNumber, setPhoneNumber] = useState(''); 
    const [countryCode, setCountryCode] = useState(''); 
    const [selectedCountry, setSelectedCountry] = 
        useState(null); 
    const [countryPickerVisible, setCountryPickerVisible] =  
        useState(false); 
  
    const onSelectCountry = (country) => { 
        setCountryCode(country.cca2); 
        setSelectedCountry(country); 
        setCountryPickerVisible(false); 
    }; 
  
    const onSubmit = () => { 
      
        // Perform your desired action with 
        // the phone number and country code 
        Alert.alert('Form Submitted', 
            `Phone Number: ${phoneNumber} 
                    \nCountry Code: ${countryCode}`); 
    }; 
  
    const toggleCountryPicker = () => { 
        setCountryPickerVisible(!countryPickerVisible); 
    }; 

  const handleOnChangePhoneNumber = (number) => {
    setPhoneNumber(number);
  };

  const handleTextChange = (text) => {

    const formattedText = text.replace(/[^0-9]/g, ''); 
    const hours = formattedText.substring(0, 2);
    const minutes = formattedText.substring(2, 4);
    const seconds = formattedText.substring(4, 6);

    
    const formattedTime = `${hours}-${minutes}-${seconds}`;

    setInputValue(formattedTime);
  };

  return (
    <ScrollView style={styles.container}>
    <View style={styles.container1}>
      <CustomBack onPress={()=>navigation.navigate(NavigationNames.Home)}/>
      <Image source={require('../assets/Schedule.png')}
        style={styles.img}
      />
      </View>
    <View>
    <Calendar style={styles.Calendar}
      onDayPress={day => {
        setSelected(day.dateString);
      }}
      markedDates={{
        [selected]: {selected: true, disableTouchEvent: true, selectedDotColor: 'orange'}
      }}
    /></View>
    <Text>
      Select Time
    </Text>
    <TouchableOpacity style={styles.input}
    onPress={()=>{
      setOpen(true)
    }}
    >

    <Text style={{color:'black',}}>{time.toString().slice(16,-12)}</Text>
    {/* <Text style={{color:'black',}}>04  08   PM</Text> */}
    <Text style={{color:'black',marginBottom:5}}>__   __   ___</Text>

    
       {/* <TextInput
        style={styles.input}
        placeholder="__ __  __ __  __ __"
        placeholderTextColor={'black'}
        value={inputValue}
        onChangeText={handleTextChange}
        keyboardType="numeric"
        maxLength={8}>

      </TextInput> */}
      
    </TouchableOpacity>
    <DatePicker
        modal
        is24hourSource='locale'
        open={open}
        date={time}
        mode='time'
        onConfirm={(time) => {
          setOpen(false)
          setTime(time)
        }}
        onCancel={() => {
          setOpen(false)
        }}
      />
    <Text>
     Contact Details
    </Text>
    <View>
    <PhoneInput 
     style={styles.input}
     placeholder={'000 000 000'} 
                placeholderTextColor={'black'}
                value={phoneNumber} 
                onChangePhoneNumber={(number) => setPhoneNumber(number)} 
                onPressFlag={toggleCountryPicker} 
                // style={styles.phoneInput}
                
            /> 
             {countryPickerVisible && ( 
                <CountryPicker 
                    withFilter={true} 
                    withFlagButton={false} 
                    withCountryNameButton={false} 
                    onSelect={onSelectCountry} 
                    onClose={() => setCountryPickerVisible(false)} 
                    visible={countryPickerVisible} 
                    // containerButtonStyle={styles.countryPickerButton} 
                    // closeButtonImageStyle={styles.countryPickerCloseButton} 
                /> 
            )} 
    </View>
    <Text>
      Your Address
    </Text>
    <View>
      <TextInput style={styles.input} 
      placeholder='Enter Your Address'
      placeholderTextColor={'black'}>
        <Image source={require('../assets/Address.png')}
        style={styles.img1} />
      </TextInput>
    </View>
    <View style={{marginTop:20}}>
      <CustomBtn text={'Place Order'}/>
    </View>
    
    </ScrollView>
  )
}

export default Sechedule

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'black'
  },
  Calendar:{
    marginTop:40
    // backgroundColor:'black',
    
  },
  img:{
    width:80,
    height:80,
    tintColor:'#FFC306',
    alignSelf:'center',
    marginLeft:50,
    marginTop:20
  },
  container1:{
    flexDirection:'row',
    
  },
  input:{
    backgroundColor:'white',
    marginVertical:5,
    color:'black',
    width:340,
    height:50,
    borderRadius:15,
    paddingLeft:20,
    marginLeft:20,
    justifyContent:'flex-end',
    
  },
  img1:{
    width:20,
    height:22
  }
})