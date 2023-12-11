import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import NavigationNames from './NavigationNames';
import Home from '../Screens/Home';
import Sechedule from '../Screens/Sechedule';
import Profile from '../Screens/Profile';
import Setting from '../Screens/Setting';

const Tab = createMaterialBottomTabNavigator();

const Bottom_Tab = () => {
  return (
    <Tab.Navigator
    initialRouteName={NavigationNames.Home}
    barStyle={{ backgroundColor: 'black' }}
    screenOptions={({ route }) => (
        // console.log(route.name),
    
        
        {
            

        tabBarHideOnKeyboard:true,
        // tabBarLabel:true,
      
        // headerShown: false,
        
        // tabBarShowLabel: false,
    

        tabBarIcon: ({focused}) => (

 

 <View style={[styles.tabBarView]}>
              <Image
                source={
                  route.name==='Home'?
                  require('../assets/Home.png') 
                  :
                  route.name==='Sechedule'?
                  require('../assets/Schedule.png') 
                  :
                  route.name==='Profile'?
                  require('../assets/Customer.png')
                  :
                  route.name==='Setting'?
                  require('../assets/Gears.png')
                  :
                  null
                  }
                style={[styles.Img,
                {tintColor:focused?'#FEBE05':'#FFFFFF80'}
                ]}
              />
              {/* <Text>
                {
                    route.name==='Home'?
                    'Home'
                  :
                  route.name==='Schedule'?
                'Schedule'
                  :
                  route.name==='Profile'?
                  'Schedule'
                  :
                  route.name==='Setting'?
                  'Schedule'
                  :
                  null
                }
              </Text> */}
            </View>
        

          ),
        })}
  >
    <Tab.Screen
      name={NavigationNames.Home}
      component={Home}

   
    />
    <Tab.Screen
      name={NavigationNames.Sechedule}
      component={Sechedule}
    
    />
    <Tab.Screen
      name={NavigationNames.Profile}
      component={Profile}
      
    />
    <Tab.Screen
      name={NavigationNames.Setting}
      component={Setting}
    
    />
  </Tab.Navigator>
  )
}

export default Bottom_Tab

const styles = StyleSheet.create({
    Img: {
        width: 20,
        height: 90,
      },
      tabBarView:{
        width:20,
        height:20,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:50/2,
        marginHorizontal:50
      }
})