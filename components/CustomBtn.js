import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const CustomBtn = ({text,onPress}) => {
  return (
    <TouchableOpacity activeOpacity={0.6} style={styles.container}
    onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  )
}

export default CustomBtn

const styles = StyleSheet.create({
    container:{
        width:350,
        height:50,
        backgroundColor:'#FFC306',
        borderRadius:93,
        alignSelf:'center',
        marginVertical:5,
        justifyContent:'center',
        alignItems:'center'
    },
    text:{
        fontSize:25,
       
        color:'white',
        fontWeight:'bold'
    }
})