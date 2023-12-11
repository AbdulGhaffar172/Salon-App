import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomInfo from '../components/CustomInfo'
const Bazz_Cut = ({navigation}) => {
  return (
    <View>
     <CustomInfo img={require('../assets/image2.png')} title={'Bazz Cut'} />
    </View>
  )
}

export default Bazz_Cut

const styles = StyleSheet.create({})