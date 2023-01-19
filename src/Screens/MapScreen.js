import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity,Image, Text} from 'react-native';
import {PhotoMap} from '../Components/Mapa';


export function MapScreen ({navigation,route}){

    const latitude = -34.725155;
    const longitude = -58.244801;

    return(
      <View style={{flex:1}}>
        <PhotoMap latitude={latitude} longitude={longitude}></PhotoMap>
        <View style={{position:'absolute',top:'8%',right:'90%'}}>
              <TouchableOpacity onPress={()=>{navigation.goBack()}}>
                  <Image source={require('../imgs/left-arrow.png')} style={{width:30,height:30}} />
              </TouchableOpacity>
          </View>
      </View>
    );
}