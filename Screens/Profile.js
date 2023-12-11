import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import CustomField from '../components/CustomField'
import NavigationNames from '../Navigations/NavigationNames'

const Profile = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.container1}>
      <Image source={require('../assets/Akif.jpg')}
          style={styles.img}
        />
        <View>
        <Text>
          Akif Ali
        </Text>
        <Text>
          Member Ship ID: 46465860789
        </Text>
        </View>
      </View>
      <Image source={require('../assets/Line.png')}
        style={styles.img1}
      />
      <View style={{marginTop:10}}>
        <CustomField title={'Go to Appointment'} img={require('../assets/Today.png')}
          onPress={()=>navigation.navigate(NavigationNames.Sechedule)}
        />
        <CustomField title={'My Referals'} img={require('../assets/Trophy.png')}
          onPress={()=>navigation.navigate(NavigationNames.Redeem)}
        />
        <CustomField title={'Settings'} img={require('../assets/Gear.png')}
          onPress={()=>navigation.navigate(NavigationNames.Setting)}
        />
        <CustomField title={'Play Intro'} img={require('../assets/Play.png')}/>
        <CustomField title={'Notification'} img={require('../assets/Notifai.png')}
          onPress={()=>navigation.navigate(NavigationNames.Notification)}
        />
        <CustomField title={'Logout'} img={require('../assets/Logout.png')}
          
        />
        
      </View>
      <View style={{marginTop:260}}>
      <Image source={require('../assets/Rectangle1.png')}
        style={styles.img2}
      />
      <Image source={require('../assets/Rectangle2.png')}
        style={styles.img2}
      />
      </View>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'black'
  },
  img:{
    width:59,
    height:59,
    borderRadius:59,
    marginRight:10
  },
  container1:{
    flexDirection:'row',
    marginTop:30,
    marginLeft:30
  },
  img1:{
    width:420,
    marginTop:30,
    height:1
  },
  img2:{
    width:420,
    height:25,
    marginVertical:5
}
})