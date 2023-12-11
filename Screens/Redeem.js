import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import CustomBack from '../components/CustomBack'
import NavigationNames from '../Navigations/NavigationNames'

const Redeem = ({navigation}) => (
    <View style={styles.container}>
        <CustomBack onPress={()=>navigation.navigate(NavigationNames.Profile)}/>
        <View style={{ alignItems: 'center' }}>
            <Text style={styles.text}>
                We're so  delighted
            </Text>
            <Text style={styles.text}>
                You're have!
            </Text>
            <Image source={require('../assets/Redeem.png')}
                style={styles.img} />
            <Text style={{fontSize:20}}>
                Collect Your Gift

            </Text>
            <Text style={{fontSize:20}}>

                on Entering invite Code.
            </Text>
            <Text style={{ marginTop: 60 }}>
                Enter Invite Code
            </Text>
            <TextInput style={styles.input} />
            <TouchableOpacity style={styles.btn}>
                <Text style={{ color: 'white' }}>
                    REDEEM NOW
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={{marginTop:30}}>
                <Text>
                    Skip
                </Text>
            </TouchableOpacity>
        </View>
    </View>
)

export default Redeem

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'black'
    },
    text:{
        fontSize:25,
        fontWeight:'bold'
    },
    img:{
        width:140,
        height:140,
        marginTop:20
    },
    input:{
        width:330,
        height:50,
        backgroundColor:'#2D2C2C',
        borderRadius:10,
        marginTop:5
    },
    btn:{
        width:150,
        height:50,
        backgroundColor:'#FFC306',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10,
        marginTop:30
    }
})