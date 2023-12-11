import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'

const CustomInput = ({placeholder}) => {
  return (
    <View>
      <TextInput placeholder={placeholder} placeholderTextColor={"#FFFFFF4D"}
        style={styles.input}
      />
    </View>
  )
}

export default CustomInput

const styles = StyleSheet.create({
    input:{
        width:350,
        height:50,
        borderWidth:1,
        borderColor:'#FFFFFF80',
        borderRadius:93,
        paddingHorizontal:20,
        marginVertical:10,
        alignSelf:'center'
    }
})