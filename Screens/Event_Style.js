import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomInfo from '../components/CustomInfo'
const Event_Style = ({navigation}) => {
  return (
    <View>
      <CustomInfo img={require('../assets/image6.png')} title={'Event Style'} />
    </View>
  )
}

export default Event_Style

const styles = StyleSheet.create({})