import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomBack from '../components/CustomBack'
import CustomInput from '../components/CustomInput'
import CustomBtn from '../components/CustomBtn'
import NavigationNames from '../Navigations/NavigationNames'


const Password = ({navigation}) => {
  return (
    <View style={styles.container}>
      <CustomBack onPress={()=>navigation.navigate(NavigationNames.Verification)}/>
      <View style={styles.container1}>
        <CustomInput placeholder={'Password'}/>
        <CustomInput placeholder={'New Password'}/>
      </View>
      <View style={styles.container2}>
        <CustomBtn text={'Continue'} onPress={()=>navigation.navigate(NavigationNames.SignIn)}/>
      </View>
    </View>
  )
}

export default Password

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#000000',
    },
    container1:{
       marginTop:200
    },
    container2:{
        marginTop:170
    }
})