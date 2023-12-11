import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const CustomServices = ({img, name,onPress }) => {
  return (
    <TouchableOpacity activeOpacity={0.6} onPress={onPress} >
      <ImageBackground source={img}
      style={styles.img}>
        <TouchableOpacity activeOpacity={0.6}  style={styles.container}>
            <Image source={require('../assets/Bookmark.png')}
                style={styles.img1}
            />
        </TouchableOpacity>
        <View style={styles.container1}>
            <Text style={styles.text}>
                {name}
            </Text>
            <View style={styles.container2}>
                <Image source={require('../assets/Location.png')}
                    style={styles.img2}
                />
                <Text style={styles.text1}>
                    Shai Road Ryk
                </Text>
            </View>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  )
}

export default CustomServices

const styles = StyleSheet.create({
    img:{
        width:210,
        height:303,
        margin:10
    },
    img1:{
        width:20,
        height:40,
        marginTop:3
    },
    container:{
        width:30,
        height:30,
        borderRadius:30,
        backgroundColor:'#5A5863',
        // justifyContent:'center',
        alignItems:'center',
        alignSelf:'flex-end',
        marginRight:10,
        marginTop:10
    },
    img2:{
        width:20,
        height:50,
        bottom:35
    },
    container1:{
        backgroundColor:'#0000004A',
        top:200,
        width:210,
        height:63
    },
    text:{
        fontSize:15,
        color:'white',
        marginVertical:10,
        marginHorizontal:10,
        fontWeight:'bold'
    },
    text1:{
        fontSize:10,
        color:'white'
    },
    container2:{
        flexDirection:'row',
        marginLeft:5
    }
})