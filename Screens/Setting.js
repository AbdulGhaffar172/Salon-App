import { StyleSheet, Text, View, Switch, TouchableOpacity, Image} from 'react-native'
import React,{useState} from 'react'
import NavigationNames from '../Navigations/NavigationNames';

const Setting = ({navigation}) => {
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Setting</Text>
      <View style={styles.container1}>
        <Text style={styles.text1}>
        Push Notification
        </Text>
        <Switch
        trackColor={{ false: '#767577', true: '#81b0ff' }}
        thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
      </View>
      <Text style={{marginVertical:30}}>
      Turn on Notifications and get latest updates.
      </Text>
      <TouchableOpacity style={styles.container1} activeOpacity={0.6} 
      onPress={()=>navigation.navigate(NavigationNames.ChangePass)}>
        <Text style={styles.text1}>
          Change Password
        </Text>
      </TouchableOpacity>
      <View style={{marginTop:300}}>
      <Image source={require('../assets/Rectangle1.png')}
        style={styles.img}
      />
      <Image source={require('../assets/Rectangle2.png')}
        style={styles.img}
      />
      </View>
    </View>
  )
}

export default Setting

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'black',
    alignItems:'center'
  },
  text:{
    fontSize:20,
    marginTop:50,
    fontWeight:'bold',
    marginBottom:70
  },
  container1:{
    width:350,
    height:50,
    backgroundColor:'#2D2C2C',
    borderRadius:10,
    justifyContent:'space-between',
    flexDirection:'row'
  },
  text1:{
    marginTop:15, 
    marginLeft:20
  },
  img:{
    width:420,
    height:25,
    marginVertical:5
}
})