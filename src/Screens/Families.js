import { NavigationContainer } from '@react-navigation/native';
import React, {useEffect, useRef,useState} from 'react';
import SelectDropdown from 'react-native-select-dropdown';

import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Image,FlatList,
    Alert,
    ActivityIndicator,
    StyleSheet,
    Modal
} from 'react-native';
import Item from "../Components/Item";
import Constants from "expo-constants";
const {manifest} = Constants;
import MyModal from '../Components/MyModal'
//const uri = `http://${manifest.debbugerHost.split(':').shift()}:4000`;

export function Families({route,navigation}){
    //ip 181.31.146.210
    //ip2 192.168.0.216 ==> networksetup -getinfo Wi-Fi
    const [data_original,setDataOriginal] =useState([]);
    const [data_filtrada,setDataFiltrada]=useState([])
    const categorias = ['Chequeado', 'No_Chequeado', 'Automatico', 'Sin Filtro'];
    const [selectedCat,setSelectedCat]=useState("");
    const [contador, setContador] = useState(0);
    useEffect(() => {
        obtener();
    },[]);
      function obtener() {
        if(route.params.criterio != 'Todas')
        {
          fetch('http://172.29.211.141:4000/familias/'+route.params.criterio+'/'+route.params.text,{method:'GET'}).
          then(response => response.json()).then(response=>{ 
        setDataOriginal(response);
        setDataFiltrada(response)});
        }
        else{
          fetch('http://172.29.211.141:4000/familias/',{method:'GET'}).
          then(response => response.json()).then(response=>{ 
        setDataOriginal(response);
        setDataFiltrada(response)});
        }
      }
        

    function filtrar(){
      if (selectedCat !='Sin Filtro'){
        console.log(selectedCat);
        console.log(data_original.filter((dato)=>{console.log(dato.estado==selectedCat); return dato.estado==selectedCat}));
      setDataFiltrada(data_original.filter((dato) => dato.estado==selectedCat));
        setContador(contador => contador + 1);
    }
    else{
      setDataFiltrada(data_original);
    }


    };
    const [details,setDetails] = useState('');
    const [modalVisible,setModalVisible]=useState(false);
     return(
       <View style={{backgroundColor:'#e0fbfc'}}>

         <SelectDropdown
                    data={categorias}
                    onSelect={(selectedItem, index) => {
                        setSelectedCat(selectedItem);
                    }}
                    buttonTextAfterSelection={(selectedItem, index) => {
                        return selectedItem
                    }}
                    rowTextForSelection={(item, index) => {
                        return item
                    }}
                    defaultButtonText={"Filtrar"}
                    buttonStyle={{width:300,borderRadius:20,backgroundColor:'#005f73',top:'10%', position:'absolute', right:'10%'}} 
                    buttonTextStyle={{color:'white'}}
                />
                         
                <View style={styles.containermisF}>
                <TouchableOpacity onPress={navigation.navigate('AllImgs')}>
                <Image source = {require('../imgs/search.png')} style={{width:20, height:20, position:'absolute',right:'50%',top:140}}/>
                </TouchableOpacity>
                <Text style={{color:'black', left:40, top:40}}>Contador {contador}</Text>
            </View>
            
       <FlatList style = {{height:'90%',flexGrow:1,backgroundColor:'#e0fbfc',width:'100%', top:'22%'}}
                    data={data_filtrada}
                    renderItem={({ item }) => (
                        <View style={{top:'10%'}}> 
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
                    <TouchableOpacity style={styles.ButtonImg3} onPress={() => {setModalVisible(true);setDetails(item)}}>
                            <Image source={require('../imgs/chat.png')} style={styles.img3}/>
                    </TouchableOpacity>
                    </View>
                    )}
                    keyExtractor={data_filtrada._id}
                    />

        <MyModal modalVisible={modalVisible} selectedItem={details} onDismiss={setModalVisible}/>
      </View>
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