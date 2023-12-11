import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomInfo from '../components/CustomInfo'
const Party_Style = ({navigation}) => {
  return (
    <View>
      <CustomInfo img={require('../assets/image5.png')} title={'Party Style'}/>
    </View>
  )
}

export default Party_Style

const styles = StyleSheet.create({})