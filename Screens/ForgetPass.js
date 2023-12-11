import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import CustomBack from '../components/CustomBack'
import CustomInput from '../components/CustomInput'
import CustomBtn from '../components/CustomBtn'
import NavigationNames from '../Navigations/NavigationNames'

const ForgetPass = ({navigation}) => {
  return (
    <View style={styles.container}>
      <CustomBack onPress={()=>navigation.navigate(NavigationNames.SignIn)}/>
      <View style={styles.container1}>
        <Image source={require('../assets/forgot.png')}
            style={styles.img}
        />
        <Text style={styles.text}>
        FORGET PASSWORD  
        </Text>
        <Text style={styles.text1}>
        Enter your email address associated

        </Text>
        <Text style={styles.text1}>
        
with your account we will send you a
        
        </Text>
        <Text style={styles.text1}>
       
         link to reset your password
        </Text>
        <View style={styles.container2}>
        <CustomInput placeholder={'Email address'}/>
        </View>
      </View>
        <View style={styles.container3}>
            <CustomBtn text={'Continue'} onPress={()=>navigation.navigate(NavigationNames.Verification)}/>
        </View>
    </View>
  )
}

export default ForgetPass

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#000000'
    },
    img:{
        width:94,
        height:94,
        marginVertical:50
    },
    container1:{
        justifyContent:'center',
        alignItems:'center'
    },
    text:{
        fontSize:25,
        color:'#FFFFFF',
        fontWeight:'bold'
    },
    text1:{
        fontSize:17,
        color:'#FFFCFCE5',
        
    }, 
    container2:{
        marginVertical:40
    },
    container3:{
        marginTop:50
    }
})