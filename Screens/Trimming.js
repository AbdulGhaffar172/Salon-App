import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import CustomServices from '../components/CustomServices'
import NavigationNames from '../Navigations/NavigationNames'
const Trimming = ({navigation}) => {
  return (
    <View style={styles.container}>
    <View style={styles.container2}>
     <Text style={styles.text}>
       Popular Services
     </Text>
     <Text style={styles.text1} >
       see more
     </Text>
     
   </View>
   <ScrollView style={styles.container1} horizontal={true}>
     <CustomServices name={'Curely Trim'} img={require('../assets/image7.png')} 
      onPress={()=>navigation.navigate(NavigationNames.Curely_Trim)}
     />
     <CustomServices name={'Short trim'} img={require('../assets/image8.png')}  
     onPress={()=>navigation.navigate(NavigationNames.Short_trim)}      />
     </ScrollView>
 </View>

  )
}

export default Trimming

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'black'
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
      },
      container1:{
        flexDirection:'row'
      }
})