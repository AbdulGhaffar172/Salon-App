import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomInfo from '../components/CustomInfo'
const Short_trim = ({navigation}) => {
  return (
    <View>
      <CustomInfo img={require('../assets/image8.png')} title={'Short Trim'} />
    </View>
  )
}

export default Short_trim

const styles = StyleSheet.create({})