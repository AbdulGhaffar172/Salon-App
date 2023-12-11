import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomInfo from '../components/CustomInfo'

const Brownesh_Shade = ({navigation}) => {
  return (
    <View>
      <CustomInfo img={require('../assets/image3.png')} title={'Brownesh Shade'}/>
    </View>
  )
}

export default Brownesh_Shade

const styles = StyleSheet.create({})