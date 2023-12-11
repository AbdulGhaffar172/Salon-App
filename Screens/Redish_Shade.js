import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomInfo from '../components/CustomInfo'
const Redish_Shade = ({navigation}) => {
  return (
    <View>
      <CustomInfo img={require('../assets/image4.png')} title={'Redish Shade'} />
    </View>
  )
}

export default Redish_Shade

const styles = StyleSheet.create({})