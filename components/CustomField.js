import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const CustomField = ({title, img, onPress}) => {
  return (
        <TouchableOpacity style={styles.container} activeOpacity={0.6} onPress={onPress}>
            <Image source={img}
                style={styles.img}
            />
            <Text>
                {title}
            </Text>
        </TouchableOpacity>
  )
}

export default CustomField

const styles = StyleSheet.create({
    img:{
        width:20,
        height:22,
        marginHorizontal:10
    },
    container:{
        flexDirection:'row',
        alignItems:'center',
        marginVertical:10,
        marginLeft:10
    }
})