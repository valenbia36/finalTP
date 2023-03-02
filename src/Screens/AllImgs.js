import React, {useState,useEffect} from 'react';
import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
    Image,
    Alert,
} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import { FlatList } from 'react-native-gesture-handler';





export function AllImgs({route,navigation}){
    const [Imagen,setImagen]=useState("");
    const [anim,setAnim]=useState(false);
    const [refresh,setRefresh]=useState(1);
    const categorias=['Sin Filtro',"Croquis encuesta 1",'Foto familia delante de la casa','Baño actual-Inodoro','Baño actual-Pozo/balde',
                        'Contrato de asignación firmado','Ficha inspección de pozos','Módulo Sanitario por dentro','Familia dentro del MS terminado',
                        'Niños/as y adultos cepillándose los dientes/lavándose las manos dentro del MS','- Foto carta de donación del MS','Foto carta cesión de imagen'];
    const [selectedCat,setSelectedCat]=useState("");

    useEffect(() => {
      setAnim(true);
      actualizar();
      
    },[]);
    function actualizar(){
      fetch("http://172.29.211.141:3000/Fotos/",{method:"GET"}).then(response => response.json())
      .then(response=>{setImagen(response);setAnim(false)})
      
    }
    async function filtrar(){
      let data = await fetch("http://172.29.211.141:3000/Fotos/",{method:"GET"}).then(response => response.json())
      .then(response=>{if(selectedCat != 'Sin Filtro'){response = response.filter((foto)=>{return foto.fotocategoria==selectedCat?true:false})};setImagen(response);setAnim(false)})
    }


   

    return(
        <View style={styles.container}>
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
                    buttonStyle={{width:300,borderRadius:20,backgroundColor:'#005f73',top:'150%'}} 
                    buttonTextStyle={{color:'white'}}
                />
              <Image source = {require('../imgs/up_arrow.png')} style={{width:20, height:20,top:'71%',right:'20%',position:'absolute'}}/>
              <View style={styles.sumbitContainer}>
                <TouchableOpacity style={styles.sumbit} disabled={selectedCat==""?true:false} onPress={()=>{setAnim(true);filtrar()}} >
                    <Text style={styles.sumbitText}>Buscar</Text>
                </TouchableOpacity>
              </View>

            {Imagen?<FlatList data={Imagen}  style={styles.flatList} renderItem={({ item }) => (
                        <View style={{alignContent:'center',padding:20, }}>
                        <Image source={{uri:"http://172.29.211.141:3000/download/"+item.foto}} style={{width:120,height:110,alignSelf:'center'}}/>
                        <Text style={{padding:10,fontSize:16,alignSelf:'center'}}>Categoria:{item.fotocategoria}</Text>
                          
                      <TouchableOpacity onPress={()=>{eliminar(item.foto);setRefresh(refresh+1)}} style={styles.delete} >
                          <Image source={require("../imgs/delete.png")} style={{height:35,
        width:30}}/>
                      </TouchableOpacity>
                         <TouchableOpacity style={styles.map} onPress={() => {navigation.navigate('MapScreen')}}>
                           <Image source={require("../imgs/mapa.png")} style={{height:35,
        width:30}} />
                       </TouchableOpacity>
                       </View>
                      

                    )}/>:<Text style={{top:'50%',position:'absolute'}}>No photos</Text>}
        </View>

    );
  }
const styles=StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e0fbfc',
        alignItems: 'center',
        justifyContent: 'flex-start',
      },

      Caja:{
        width:150,
        //backgroundColor:"#0096c7",
        height:150,
        bottom:"20%",
        left:"0%",
        alignSelf:'center'

      },
      flatList:{
        flexGrow:0,
        height:'50%',
        width:'100%'


      },
      delete:{
        height:30,
        width:30,
        left:120,
        //top:161,
        //padding:10
      },
      map:{
        position:'absolute',
        height:35,
        width:30,
        top:-32,
        top:171,
        left:220

      },
      img:{
        //top:10
      },
      sumbitContainer:{
        top:'40%',
        borderRadius:25,
        textAlignVertical:'center'
        


      },
      sumbit:{
        backgroundColor:"#0096c7",
        borderRadius:25,
        top:300,

      },
      sumbitText:{
        width:150,
        height:50,
        color:'white',
        textAlign:'center',
        textAlignVertical:'center',
        top:"25%",
        fontSize:17
      },
      
})