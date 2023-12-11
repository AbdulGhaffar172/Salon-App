import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomInfo from '../components/CustomInfo'
const Curely_Trim = ({navigation}) => {
  return (
    <View>
      <CustomInfo img={require('../assets/image7.png')} title={'Curely Trim'}/>
    </View>
  )
}

export default Curely_Trim

const styles = StyleSheet.create({})