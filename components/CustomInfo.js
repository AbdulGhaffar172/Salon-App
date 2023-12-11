import {StyleSheet, Text, View, ImageBackground, Image} from 'react-native';
import React from 'react';
import CustomBack from './CustomBack';
import CustomBtn from './CustomBtn';
import NavigationNames from '../Navigations/NavigationNames';
import { useNavigation } from '@react-navigation/native';
const CustomInfo = ({img,title}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View>
        <ImageBackground
          source={img}
          style={styles.img}>
          <CustomBack onPress={()=>navigation.navigate(NavigationNames.Home) }/>
        </ImageBackground>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View>
          <Text style={styles.text}>{title}</Text>
          <View style={styles.container3}>
            <Image
              source={require('../assets/Location.png')}
              style={styles.img2}
            />
            <Text style={styles.text1}>Shai Road Ryk</Text>
          </View>
        
        <View style={styles.container3}>
          <Text style={{bottom:24, marginLeft:5}}>4.5</Text>
          <View style={styles.container6}>
            <Image source={require('../assets/Star.png')} style={styles.img1} />
            <Image source={require('../assets/Star.png')} style={styles.img3} />
            <Image source={require('../assets/Star.png')} style={styles.img3} />
            <Image source={require('../assets/Star.png')} style={styles.img3} />
            <Image source={require('../assets/Star.png')} style={styles.img3} />
          </View>
        </View>
        </View>
        <View style={styles.container4}>
          <View style={styles.container1}>
            <Image
              source={require('../assets/Heart.png')}
              style={styles.img4}
            />
          </View>
          <View style={styles.container2}>
            <Text style={styles.text2}>$ 150.00</Text>
          </View>
        </View>
      </View>
      <View style={styles.container5}>
        <Image source={require('../assets/Line.png')} style={styles.img5} />
       
        <Text style={styles.text3}>
          Lorem ipsum dolor sit amet consectetur. Faucibus amet sagittis
          pellentesque donec odio nec quis at ullamcorper. Pulvinar lacus
          ultrices s ed mi auctor mi porttitor. Id vel pellentesque impe rdiet
          </Text>
          <View style={{flexDirection:'row'}}>
          <Text style={styles.text3}>
          suspendisse convallis eleife euismod....
          </Text>
        <Text style={styles.text2}>See More</Text>
        </View>
        <View style={{flexDirection:'row',marginVertical:10 }}>
        <View style={{flexDirection:'row'}}>
          <ImageBackground source={require('../assets/16.png')}
            style={styles.img6}
          >
          <Image source={require('../assets/17.png')}
            style={styles.img6}
          /></ImageBackground>
          <ImageBackground source={require('../assets/18.png')}
            style={styles.img6}
          >
          <ImageBackground source={require('../assets/19.png')}
            style={styles.img6}
          >
          <Text style={styles.text4} >
              +6
          </Text>
          </ImageBackground>
          </ImageBackground>

        </View>
        <Text style={styles.text5}>Meet Our Team</Text>
        </View>
        <View>
          <CustomBtn text={'Book Appointment'} onPress={()=>navigation.navigate(NavigationNames.Sechedule)}/>
        </View>
      </View>
    </View>
  );
};

export default CustomInfo;

const styles = StyleSheet.create({
  img: {
    width: 420,
    height: 427,
    
  },
  text1: {
    fontSize: 10,
  },
  container2: {
    width: 90,
    height: 30,
    borderRadius: 42,
    borderWidth: 2,
    borderColor: '#FEC205',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  img2: {
    width: 20,
    height: 50,
    bottom: 35,
  },
  container: {
    height: '100%',

    backgroundColor: '#373737',
  },

  text: {
    fontSize: 30,
    color: 'white',
    marginVertical: 10,
    marginHorizontal: 10,
    fontWeight: 'bold',
  },
  img1: {
    width: 10,
    height: 10,
    tintColor: '#FEB804',
  },
  img3: {
    width: 10,
    height: 10,
    marginHorizontal: 2,
  },
  container3: {
    flexDirection: 'row',
    marginHorizontal: 5,
    // bottom:20
  },
  img4: {
    width: 25,
    height: 25,
  },
  container1: {
    width: 40,
    height: 40,
    borderRadius: 40,
    borderWidth: 1,
    borderColor: '#858585',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 50,
    marginBottom: 20,
  },
  text2: {
    color: '#FEC205',
    fontSize: 15,
  },
  container4: {
    alignSelf: 'flex-end',
    bottom:20
  },
  img5: {
    width: 360,
    alignSelf: 'center',
    // bottom: 50,
  },
  text3: {
    fontSize: 15,
    marginLeft:10
  },
  container5: {
    marginBottom: 50,
  },
  container6: {
    flexDirection:'row',
    marginHorizontal:5,
    bottom:20
  },
  img6:{
    width:33,
    height:33,
    borderRadius:33,
    left:14
  },
  text4:{
    textAlign:'center',
    
    backgroundColor:'#55555599',
    width:33,
    height:33,
    borderRadius:33
  },
  text5: {
    color: '#FEC205',
    fontSize: 15,
    marginLeft:40
  },
});
