import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import CustomServices from '../components/CustomServices'
import NavigationNames from '../Navigations/NavigationNames'
const Hair_Color = ({navigation}) => {
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
        <CustomServices name={'Browinish shade'} img={require('../assets/image3.png')} 
          onPress={()=>navigation.navigate(NavigationNames.Brownesh_Shade)}
        />
        <CustomServices name={'Redish shade'} img={require('../assets/image4.png')} 
        onPress={()=>navigation.navigate(NavigationNames.Redish_Shade)}       />
        </ScrollView>
    </View>
  )
}

export default Hair_Color

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