import { StyleSheet, Text, View, Switch, Image } from 'react-native'
import React,{useState} from 'react'
import CustomBack from '../components/CustomBack'
import NavigationNames from '../Navigations/NavigationNames';

const Notification = ({navigation}) => {
    const [isEnabled, setIsEnabled] = useState(false);
    const [isEnabled1, setIsEnabled1] = useState(false);
    const [isEnabled2, setIsEnabled2] = useState(false);
  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState);
  };
  const toggleSwitch1 = () => {
    setIsEnabled1((previousState) => !previousState);
  };
  const toggleSwitch2 = () => {
    setIsEnabled2((previousState) => !previousState);
  };
  return (
    <View style={styles.container}>
      <CustomBack onPress={()=>navigation.navigate(NavigationNames.Profile)}/>
      <View style={{alignItems:'center'}}>
      <Text style={styles.text}>
        Notifications
      </Text>
      <Text>
      Fresher only sends natifications about appointments

      </Text>
      <Text style={{marginBottom:60}}>
      
you have booked
      </Text>
      </View>
      <View style={styles.container1}>
        <Text style={{fontSize:20, fontWeight:'bold'}}>
        Text message appointment notifications
        </Text>
        <Text>
        Receive texts based on your sender’s
settings
        </Text>
        <Switch
        trackColor={{ false: '#767577', true: '#81b0ff' }}
        thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
      </View>
      <View style={styles.container1}>
        <Text style={{fontSize:20, fontWeight:'bold'}}>
        Email marketing notifactions
        </Text>
        <Text>
        Receive offers and news via email
        </Text>
        <Switch
        trackColor={{ false: '#767577', true: '#81b0ff' }}
        thumbColor={isEnabled1 ? '#f5dd4b' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch1}
        value={isEnabled1}
      />
      </View>
      <View style={styles.container1}>
        <Text style={{fontSize:20, fontWeight:'bold'}}>
        Email marketing notifactions        </Text>
        <Text>
        if you opted out privously by texting 
STOP’
        </Text>
        <Switch
        trackColor={{ false: '#767577', true: '#81b0ff' }}
        thumbColor={isEnabled2 ? '#f5dd4b' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch2}
        value={isEnabled2}
      />
      </View>
      <View style={{marginTop:100}}>
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

export default Notification

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'black'
    },
    text:{
        textAlign:'center',
        fontSize:25,
        fontWeight:'bold'
    },
    container1:{
        width:380,
        height:80,
        borderRadius:10,
        backgroundColor:'#2D2C2C',
        marginVertical:10,
        paddingLeft:10
    },
    img:{
        width:420,
        height:25,
        marginVertical:5
    }
})