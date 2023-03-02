import { NavigationContainer } from '@react-navigation/native';
import React, {useState} from 'react';

import {
    View,
    Animated,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet, ActivityIndicator
} from 'react-native';


export function Prueba(){
    const [loading,setLoading] =useState(true)
    setTimeout(() => {
        setLoading(false)
        
    }, 3000);


    return(
        <View style={style.container}>
            {loading?<ActivityIndicator style={style.act}></ActivityIndicator>:<Text style={style.text1}>Hola</Text>}
        </View>
    )
}

const style = StyleSheet.create({
    container:{
        flex:1,
       backgroundColor:'#e0fbfc'
    },
    text1:{
        top:'50%',
        right:'-50%'
    },
    act:{
        top:'50%',
        right:'-10%'
    }
})