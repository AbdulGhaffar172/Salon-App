import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import NavigationNames from './NavigationNames';
import Salon from '../Screens/Salon';
import SignUp from '../Screens/SignUp';
import SignIn from '../Screens/SignIn';
import ForgetPass from '../Screens/ForgetPass';
import Verification from '../Screens/Verification';
import Password from '../Screens/Password';
import Bottom_Tab from './Bottom_Tab';
import Fadd_Cut from '../Screens/Fadd_Cut';
import Brownesh_Shade from '../Screens/Brownesh_Shade';
import Party_Style from '../Screens/Party_Style';
import Curely_Trim from '../Screens/Curely_Trim';
import Sechedule from '../Screens/Sechedule';
import Profile from '../Screens/Profile';
import Setting from '../Screens/Setting';
import ChangePass from '../Screens/ChangePass';
import Redeem from '../Screens/Redeem';
import Notification from '../Screens/Notification';
import CustomInfo from '../components/CustomInfo';
import Bazz_Cut from '../Screens/Bazz_Cut';
import Redish_Shade from '../Screens/Redish_Shade';
import Event_Style from '../Screens/Event_Style';
import Short_trim from '../Screens/Short_trim';
import SplashScreen from '../Screens/SplashScreen';

const Stack = createNativeStackNavigator();
const Stack_Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={NavigationNames.SplashScreen}
        screenOptions={{
            headerShown:false
        }}>
        <Stack.Screen
          name={NavigationNames.Salon}
          component={Salon}
        />
        <Stack.Screen
          name={NavigationNames.SignUp}
          component={SignUp}
        />
        <Stack.Screen
          name={NavigationNames.SignIn}
          component={SignIn}
        />
        <Stack.Screen
          name={NavigationNames.ForgetPass}
          component={ForgetPass}
        />
        <Stack.Screen
          name={NavigationNames.Verification}
          component={Verification}
        />
        <Stack.Screen
          name={NavigationNames.Password}
          component={Password}
        />
        <Stack.Screen
          name={NavigationNames.Bottom_Tab}
          component={Bottom_Tab}
        />
        <Stack.Screen
          name={NavigationNames.Fadd_Cut}
          component={Fadd_Cut}
        />
        <Stack.Screen
          name={NavigationNames.Brownesh_Shade}
          component={Brownesh_Shade}
        />
        <Stack.Screen
          name={NavigationNames.Curely_Trim}
          component={Curely_Trim}
        />
        <Stack.Screen
          name={NavigationNames.Party_Style}
          component={Party_Style}
        />
         <Stack.Screen
          name={NavigationNames.Sechedule}
          component={Sechedule}
        />
         <Stack.Screen
          name={NavigationNames.Profile}
          component={Profile}
        />
        <Stack.Screen
          name={NavigationNames.Setting}
          component={Setting}
        />
        <Stack.Screen
          name={NavigationNames.ChangePass}
          component={ChangePass}
        />
         <Stack.Screen
          name={NavigationNames.Redeem}
          component={Redeem}
        />
        <Stack.Screen
          name={NavigationNames.Notification}
          component={Notification}
        />
        <Stack.Screen
          name={NavigationNames.CustomInfo}
          component={CustomInfo}
        />
        <Stack.Screen
          name={NavigationNames.Short_trim}
          component={Short_trim}
        />
        <Stack.Screen
          name={NavigationNames.Event_Style}
          component={Event_Style}
        />
        <Stack.Screen
          name={NavigationNames.Redish_Shade}
          component={Redish_Shade}
        />
        <Stack.Screen
          name={NavigationNames.Bazz_Cut}
          component={Bazz_Cut}
        />
        <Stack.Screen
          name={NavigationNames.SplashScreen}
          component={SplashScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Stack_Navigation;

const styles = StyleSheet.create({});
