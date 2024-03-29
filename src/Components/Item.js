import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';

export default class Item extends Component {
    constructor(props) {
        super(props);
        this.name=props.name;
        this.estado=props.estado;
        this.barrio=props.barrio;
        this.partido=props.partido;
        this.provincia=props.provincia;

    }

    render() {
        return (
        <View style={styles.container}>
            <Text style={styles.texto}>Apellido:{this.name}</Text>
            <Text style={styles.texto}>Estado:{this.estado}</Text>
            
                <Text style={styles.texto}></Text>
            
            
        </View>);
    }
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#0096c7",
        borderRadius:10,
        width:400,
        padding:5
    },
    texto:{
        fontSize:17,
        fontWeight:"bold",
        justifyContent:'center',
        margin:5
    },
    ButtonImg:{
        alignSelf:'center',
        justifyContent:'center',
        alignItems:'center',
        width:30,
        height:30,
        bottom:65,
        right:60,
        borderRadius:5,
        backgroundColor:'white'

    },
    img:{
        width:30,
        height:30,

    }



})