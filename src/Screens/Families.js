import { NavigationContainer } from '@react-navigation/native';
import React, {useEffect, useRef,useState} from 'react';

import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Image,FlatList,
    Alert,
    ActivityIndicator,
    StyleSheet,
} from 'react-native';
import Item from "../Components/Item";
import Constants from "expo-constants";
const {manifest} = Constants;
//const uri = `http://${manifest.debbugerHost.split(':').shift()}:4000`;

export function Families({route,navigation}){
    //ip 181.31.146.210
    //ip2 192.168.0.216 ==> networksetup -getinfo Wi-Fi
    const [data_filtrada,setDataFiltrada] =useState("");   
    useEffect(() => {
        obtener();
      },[]);
      function obtener() {
        fetch('http://192.168.0.216:4000/familias/'+route.params.criterio+'/'+route.params.text,{method:'GET'}).then(response => response.json()).then(response=>{setDataFiltrada(response)})
    };
     return(
        <FlatList style = {{height:'100%',flexGrow:1,backgroundColor:'#e0fbfc',width:'100%'}}
                    data={data_filtrada}
                    renderItem={({ item }) => (
                        <View style={{top:'40%'}}> 
                        <Item name={item.apellido} estado={item.estado} barrio={item.ubicacion.barrio} partido={item.ubicacion.partido} provincia={item.ubicacion.provincia} nav={navigation}/>
                        <TouchableOpacity style={styles.ButtonImg} onPress={()=>navigation.navigate("UpPics",{id:item._id,ape:item.apellido,barrio:item.ubicacion.barrio})}>
                            <Image source={require('../imgs/camera.png')} style={styles.img}/>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.ButtonImg2} onPress={()=>navigation.navigate("Search Imgs",{id:item._id,ape:item.apellido,barrio:item.ubicacion.barrio})}>
                            <Image source={require('../imgs/image.png')} style={styles.img2}/>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.ButtonImg3} onPress={()=>Alert.alert("Ubicacion: "+item.ubicacion.barrio+", "+item.ubicacion.partido+", "+item.ubicacion.provincia+".")}>
                            <Image source={require('../imgs/information.png')} style={styles.img3}/>
                    </TouchableOpacity>
                    </View>
                    )}
                    keyExtractor={data_filtrada.id}
                    />
    )
};



const styles=StyleSheet.create({

ButtonImg:{
  alignSelf:'center',
  justifyContent:'center',
  alignItems:'center',
  width:30,
  height:30,
  bottom:85,
  right:"-40%",
  borderRadius:5,
  backgroundColor:'white'

},
img:{
  width:30,
  height:30,

},
ButtonImg2:{
alignSelf:'center',
  justifyContent:'center',
  alignItems:'center',
  width:30,
  height:30,
  bottom:75,
  right:"-40%",
  borderRadius:5,
  backgroundColor:'white'

},
img2:{
width:30,
  height:30,

},
ButtonImg3:{
alignSelf:'center',
  justifyContent:'center',
  alignItems:'center',
  width:25,
  height:25,
  bottom:148,
  right:"-10%",
  borderRadius:5,
  backgroundColor:'white',
  //right:10

},
img3:{
width:25,
  height:25,

},
})