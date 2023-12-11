import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import CustomBack from '../components/CustomBack'
import NavigationNames from '../Navigations/NavigationNames'
import CustomInput from '../components/CustomInput'
import CustomBtn from '../components/CustomBtn'

const SignUp = ({navigation}) => {
  return (
    <View style={styles.container}>
      <CustomBack onPress={()=>navigation.navigate(NavigationNames.Salon)}/>
      <Text style={styles.text}>SignUp</Text>
      <View style={styles.container1}>
        <CustomInput placeholder={'Full Name'}/>
        <CustomInput placeholder={'Email'}/>
        <CustomInput placeholder={'Password'}/>
        <CustomInput placeholder={'Confirm Password'}/>
      </View>
      <View style={styles.container4}>
      <CustomBtn text={'Sign Up'} onPress={()=> navigation.navigate(NavigationNames.Bottom_Tab)}/>
      </View>
        <View style={styles.container2}>
            <Image source={require('../assets/Line.png')}
                style={styles.line}
            />
            <Text> OR </Text>
            <Image source={require('../assets/Line.png')}
                style={styles.line}
            />
        </View>
        <View style={styles.input}>
                <Image source={require('../assets/Facebook.png')}
                    style={styles.img}
                />
                <Text style={styles.text1}>
                Sign Up with Facebook
                </Text>
        </View>
        <View style={styles.container3}>
            <Text style={styles.text2}>
            Do you Have Account? 
            </Text>
            <TouchableOpacity activeOpacity={0.6} onPress={()=>navigation.navigate(NavigationNames.SignIn)}>
            <Text style={styles.text3}>
             Sign In
            </Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default SignUp

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#000000',
        flex:1
    },
    text:{
        fontSize:30,
        color:'white',
        fontWeight:'bold',
        marginLeft:20,
        marginTop:20
    },
    container1:{
        justifyContent:'center',
        alignItems:'center',
        marginTop:40
    },
    line:{
        width:160,

    },
    container2:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        marginTop:30
    },
    input:{
        width:350,
        height:50,
        borderWidth:1,
        borderColor:'#FFFFFF',
        borderRadius:93,
        paddingHorizontal:20,
        marginVertical:10,
        alignSelf:'center',
        justifyContent:'center',
        flexDirection:'row',
        alignItems:'center',
        marginTop:30
    },
    img:{
        width:11.75,
        height:20.51
    },
    text1:{
        color:'white',
        fontSize:20,
        marginLeft:10
    },
    text2:{
        color:'#FFFFFF4D',
        fontSize:18
    },
    text3:{
        color:'#FFC105',
        fontSize:18
    },
    container3:{
        flexDirection:'row',
        marginTop:30,
        justifyContent:'center',
        alignItems:'center'
    },
    container4:{
        marginTop:60
    }
})