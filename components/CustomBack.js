import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const CustomBack = ({onPress}) => {
  return (
    <TouchableOpacity activeOpacity={0.6} style={styles.container}
    onPress={onPress}>
      <Image source={require('../assets/Back.png')}
        style={styles.img}
      />
    </TouchableOpacity>
  )
}

export default CustomBack

const styles = StyleSheet.create({
    img:{
        width:11.98,
        height:15.37
    },
    container:{
        width:35,
        height:35,
        borderRadius:35,
        borderColor:'#F5F5F580',
        borderWidth:1,
        margin:30,
        justifyContent:'center',
        alignItems:'center'
    }
})