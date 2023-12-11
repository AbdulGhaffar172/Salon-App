import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native'
import React,{useEffect} from 'react'
import NavigationNames from '../Navigations/NavigationNames'

const SplashScreen = ({navigation}) => {
    homeScreen=()=>{
        navigation.navigate(NavigationNames.Salon)
    }
    useEffect(() => {
        setTimeout(homeScreen, 3000);
   
    }, [])
    
  return (

    <View style={{flex:1,backgroundColor:'black'}}>
      <View style={styles.container}>
        
            <ImageBackground source={require('../assets/Polygon.png')}
                style={styles.Img}
            >
            <Image source={require('../assets/21.png')}
                style={styles.Img1}
            />
            </ImageBackground>
            </View>
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({
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
    container:{
        justifyContent:'center',
        alignItems:'center'
    }
})