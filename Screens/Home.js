import { StyleSheet, Text, View, Image, ImageBackground, TextInput} from 'react-native'
import React from 'react'
import Top_Tab from '../Navigations/Top_Tab'

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <Image source={require('../assets/Akif.jpg')}
          style={styles.img}
        />
        <ImageBackground source={require('../assets/Polygon.png')}
          style={styles.img1}
        >
          <Image source={require('../assets/21.png')}
          style={styles.img2}
        />
        </ImageBackground>
        <Image source={require('../assets/Notification.png')}
          style={styles.img3}
        />
      </View>
      <View style={styles.container2}>
        <TextInput style={styles.input}>
          <Image source={require('../assets/Search1.png')}
            style={styles.img4}
          />
        </TextInput>
        <View style={styles.container3}>
          <Image source={require('../assets/Vector.png')}
            style={styles.img5}
          />
        </View>
      </View>
      <View style={styles.container2}>
        <Text style={styles.text}>
          Categories
        </Text>
        <Text style={styles.text1} >
          see more
        </Text>
      </View>
      <Top_Tab/>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'black'
    },
    img:{
      width:59,
      height:59,
      borderRadius:59,
      
    },
    img1:{
      width:45,
      height:30,
      justifyContent:'center',
      alignItems:'center'
    },
    img2:{
      width:30,
      height:25
    },
    img3:{
      width:20,
      height:23
    },
    container1:{
      flexDirection:'row',
      justifyContent:'space-between',
      margin:20
    },
    input:{
      width:291,
      height:50,
      borderWidth:1,
      borderColor:'#FFFFFF80',
      borderRadius:60,
      marginLeft:15,
      alignItems:'center'
    },
    img4:{
      width:20,
      height:20,
      marginLeft:35
     
    },
    img5:{
      width:20,
      height:20
    },
    container3:{
      width:47,
      height:47,
      borderRadius:47,
      backgroundColor:'#FEC606',
      justifyContent:'center',
      alignItems:'center',
      alignSelf:'flex-end',
      marginRight:10,
      
    },
    container2:{
      flexDirection:'row',
      justifyContent:'space-between',
      marginTop:20,
     
    },
    text:{
      fontSize:22,
      color:'white',
      marginLeft:10
    },
    text1:{
      fontSize:14,
      color:'#FEBE05',
      marginRight:10
    }
})