import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import CustomServices from '../components/CustomServices'
import NavigationNames from '../Navigations/NavigationNames'
const Hair_Dryer = ({navigation}) => {
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
     <CustomServices name={'Party Style'} img={require('../assets/image5.png')} 
      onPress={()=>navigation.navigate(NavigationNames.Party_Style)}
     />
     <CustomServices name={'Event Style'} img={require('../assets/image6.png')} 
     onPress={()=>navigation.navigate(NavigationNames.Event_Style)}       />
     </ScrollView>
 </View>
  )
}

export default Hair_Dryer

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