import { NavigationContainer } from '@react-navigation/native';
import React, {useRef, version,} from 'react';
import {
    StyleSheet,
} from 'react-native';

export const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#e0fbfc',
    },
    containermisF:{
        alignItems:'center',
        alignSelf:"center",
        justifyContent:'center',
        alignContent:'center',
        flexDirection:'row',

        
    },
    misF:{
        borderRadius:25,
        backgroundColor:"#48cae4",
        width:150,
        height:30,
        textAlign:'center',
        alignItems:'center',
        justifyContent:'center',
        alignSelf:'center',
        top:"80%",
    },
    title:{
        alignSelf:'center',
        top:80,
        fontSize:20,
        fontWeight:'900'
    },
    logo:{
        position:"absolute",
        alignSelf:'center'
    },
    buscar:{
        borderRadius:25,
        backgroundColor:"#48cae4",
        width:180,
        height:40,
        textAlign:'center',
        alignItems:'center',
        justifyContent:'center',
        top:"80%",
        //left:5,
    },
    containerBuscImgs:{
        alignItems:'center',
        alignSelf:"center",
        justifyContent:'center',
        borderRadius:25,
        backgroundColor:"#48cae4",
        width:150,
        height:30,
        top:"50%",


    },

    buscarImgs:{
        
        textAlign:'center',
        alignItems:'center',
        justifyContent:'center',

    },


});