import { StyleSheet, Text, View, ImageBackground, Image} from 'react-native'
import React from 'react'
import CustomBtn from '../components/CustomBtn'
import NavigationNames from '../Navigations/NavigationNames'

const Salon = ({navigation}) => {
  return (
    <View>
      <View>
        <ImageBackground source={require('../assets/Img.png')}
        style={styles.img}>
            <ImageBackground source={require('../assets/Polygon.png')}
                style={styles.Img}
            >
            <Image source={require('../assets/21.png')}
                style={styles.Img1}
            />
            </ImageBackground>
            <View style={styles.container1}>
            <Text style={styles.text}>
            Become the best version 
              
            </Text>
            <Text style={styles.text}>
            
              of yourself
            </Text>
            </View>
        </ImageBackground>
      </View>
      <View style={styles.container}>
        <CustomBtn text={"Sign In"} onPress={()=>navigation.navigate(NavigationNames.SignIn)}/>
        <CustomBtn text={"Sign Up"} onPress={()=>navigation.navigate(NavigationNames.SignUp)}/>
      </View>
    </View>
  )
}

export default Salon

const styles = StyleSheet.create({
    img:{
        width:428,
        height:630,
        justifyContent:'center',
        alignItems:'center',
        
    },
    Img:{
        width:170,
        height:108,
        justifyContent:'center',
        alignItems:'center',
        marginTop:270
    },
    Img1:{
        width:105.56,
        height:102,
        
    },
    text:{
        fontSize:30,
        color:'white',
        textAlign:'center',
        marginRight:40,
        fontWeight:'bold'
    },
    container:{
        width:428,
        height:206,
        backgroundColor:'#000000E5',
        alignItems:'center',
        paddingRight:50
    },
    container1:{
        marginTop:50
    }
})