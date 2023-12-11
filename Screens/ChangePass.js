import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomBack from '../components/CustomBack'
import CustomInput from '../components/CustomInput'
import CustomBtn from '../components/CustomBtn'
import NavigationNames from '../Navigations/NavigationNames'

const ChangePass = ({navigation}) => {
  return (
    <View style={styles.container}>
      <CustomBack onPress={()=>navigation.navigate(NavigationNames.Setting)}/>
      <View style={styles.container1}>
        <CustomInput placeholder={'Old Password'}/>
        <CustomInput placeholder={'Password'}/>
        <CustomInput placeholder={'New Password'}/>
      </View>
      <View style={styles.container1}>
        <CustomBtn text={'Continue'} />
      </View>
    </View>
  )
}

export default ChangePass

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'black'
    },
    container1:
        {marginTop:100}
    
})