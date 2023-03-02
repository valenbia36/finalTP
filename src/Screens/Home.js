import { NavigationContainer } from '@react-navigation/native';
import React, {useRef,useEffect} from 'react';

import {
    View,
    Animated,
    Text,
    Image,
    TouchableOpacity,
} from 'react-native';
import {styles} from './Styles/Home-Style';


export function Home({route,navigation}) {
    const fadeAnim = useRef(new Animated.Value(0)).current;
    useEffect(()=>{
        Animated.timing(fadeAnim,{
            toValue:1,
            duration:3000,
            useNativeDriver:true
        }).start();
    },[fadeAnim])
    const pan = useRef(new Animated.ValueXY()).current;

  /*const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event([null, {dx: pan.x, dy: pan.y}]),
      onPanResponderRelease: () => {
        pan.extractOffset();
      },
    }),
  ).current;*/


    return (
        <View style={styles.container}>
            <Image source={require('../imgs/Logo-modulo.png')} resizeMode={'center'} style={styles.logo} />
            <Animated.View style={{opacity:fadeAnim}} >
                <Text style={styles.title}>Bienvenido Usuario</Text>
            </Animated.View>
            <View style={styles.containermisF}>
                <TouchableOpacity title="Buscar Familias" style={styles.buscar} onPress={()=>navigation.navigate("Search")} >
                    <Text style={{fontWeight:'bold',fontSize:15,}}>Buscar Familias</Text>
                </TouchableOpacity>
            </View>
            {/*
              <View style={styles.containermisF}>
              <TouchableOpacity title="Prueba" style={styles.buscar} onPress={()=>navigation.navigate("Prueba")} >
                  <Text style={{fontWeight:'bold',fontSize:15,}}>Prueba</Text>
              </TouchableOpacity>
          </View>
            */}
            {/*<Animated.View style={{
          transform: [{translateX: pan.x}, {translateY: pan.y}],
        }}
        {...panResponder.panHandlers}>
                <Image source={require('../imgs/information.png')} style={{top:'100%',resizeMode:'contain',height:50}}/>
      </Animated.View>*/}
        </View>
        
    );
}