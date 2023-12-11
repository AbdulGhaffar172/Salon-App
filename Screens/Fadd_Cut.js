import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomInfo from '../components/CustomInfo'

const Fadd_Cut = ({navigation}) => {
  return (
    <View>
      <CustomInfo img={require('../assets/image1.png')} title={'Fadd Cut'} />
    </View>
  )
}

export default Fadd_Cut

const styles = StyleSheet.create({})