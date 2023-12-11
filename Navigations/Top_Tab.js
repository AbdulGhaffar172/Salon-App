import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import NavigationNames from './NavigationNames';
import Hair_Cut from '../Screens/Hair_Cut';
import Hair_Color from '../Screens/Hair_Color';
import Hair_Dryer from '../Screens/Hair_Dryer';
import Trimming from '../Screens/Trimming';

const Tab = createMaterialTopTabNavigator();
const Top_Tab = () => {
  return (
    <Tab.Navigator
     initialRouteName={NavigationNames.Hair_Cut}
    // barStyle={{ backgroundColor: 'black' }}
    
    screenOptions={({ route }) => (
        // console.log(route.name),
    
        
        {
            tabBarStyle:{backgroundColor:'black'},
            tabBarLabelStyle:{color:'#FFFFFF80', marginTop:30,  },
        tabBarHideOnKeyboard:true,
    
    

        tabBarIcon: ({focused}) => (

 

 <View style={[styles.tabBarView, {backgroundColor:focused?'#FEBE05':null}, {borderColor:focused?'#FEBE05':'#FFFFFF'}]}>
              <Image
                source={
                  route.name==='Hair_Cut'?
                  require('../assets/Cut.png') 
                  :
                  route.name==='Hair_Color'?
                  require('../assets/Color.png') 
                  :
                  route.name==='Hair_Dryer'?
                  require('../assets/Dryer.png')
                  :
                  route.name==='Trimming'?
                  require('../assets/Trimming.png')
                  :
                  null
                  }
                style={[styles.Img,
                    
                ]}
              />
             
            </View>
        

          ),
        })}
    
    
  >
    <Tab.Screen
      name={NavigationNames.Hair_Cut}
      component={Hair_Cut}
      options={{ tabBarLabel: 'Hair Cut' }}
    />
    <Tab.Screen
      name={NavigationNames.Hair_Color}
      component={Hair_Color}
      options={{ tabBarLabel: 'Color' }}
    />
    <Tab.Screen
      name={NavigationNames.Hair_Dryer}
      component={Hair_Dryer}
      options={{ tabBarLabel: 'Dryer' }}
    />
    <Tab.Screen
      name={NavigationNames.Trimming}
      component={Trimming}
      options={{ tabBarLabel: 'Trimming' }}
    />
  </Tab.Navigator>
  )
}

export default Top_Tab

const styles = StyleSheet.create({
    Img: {
        width: 20,
        height: 20,
        // borderRadius:40/2,
      },
      tabBarView:{
        width:40,
        height:40,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:40/2,
        borderWidth:1,
        borderColor:'#FFFFFF'
        // backgroundColor:'#FEBE05'
        // marginHorizontal:50
      }
})