import { NavigationContainer } from '@react-navigation/native';
import React, {useRef,useState,useEffect} from 'react';

import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    ActivityIndicator,
    Image
} from 'react-native';
import {styles} from './Styles/Search-Style';
import SelectDropdown from 'react-native-select-dropdown';
//import {useDispatch,useSelector} from 'react-redux';


export  function Search({route,navigation}){
    const [text, onChangeText]=useState("");
    const criterio=["Apellido","Barrio","Partido","Provincia"]
    //const {criterioFilter} = useSelector(state => state.application);
    const [criterioElegido,setCriterio]=useState("");
    const [anim,setAnim]=useState(false);

    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Aca se puede buscar familias</Text>
            <View style={styles.inputView}>
                <TextInput placeholder="Busqueda" style={styles.inputText} placeholderTextColor="#003f5c" onChangeText={(text) => {onChangeText(text)}} value={text}></TextInput>
            </View>
            <View style={styles.pickerCont}>
            <SelectDropdown
                data={criterio}
                onSelect={(selectedItem, index) => {
                    setCriterio(selectedItem);
                }}
                buttonTextAfterSelection={(selectedItem, index) => {
                    return selectedItem
                }}
                rowTextForSelection={(item, index) => {
                    return item
                }}
                defaultButtonText={"Filtro"}
                buttonStyle={{height:50,width:190,borderRadius:25,backgroundColor:"#0096c7"}}
                buttonTextStyle={{color:'white',fontSize:15}}
            />
            <Image source = {require('../imgs/down_arrow.png')} style={{width:20, height:20, position:'absolute',right:30,top:18}}/>
            </View>
        <ActivityIndicator animating={anim} style={{top:400}} size={'large'} />

            <View style={styles.sumbitContainer}>
            <TouchableOpacity style={styles.submit} disabled={criterioElegido==""?true:false} onPress={()=>{setAnim(true);navigation.navigate('Families',{criterio:criterioElegido,text:text})}} >
                    <Text style={styles.sumbitText}>Buscar</Text>
                    <Image source = {require('../imgs/search.png')} style={{width:20, height:20, position:'absolute', right:-30}} />
                </TouchableOpacity>
            </View>
        </View>




    );
}