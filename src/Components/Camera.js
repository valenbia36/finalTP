import React, {useRef,useState, useEffect} from 'react';
import {
    View,
    StyleSheet,
    Image,
    TouchableOpacity
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export function Camera (props){
    const [image, setImage] = useState(null);
    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
        });
        if (!result.canceled) {
            setImage(result.assets[0].uri);
            props.selectedImage(image);
          };
          
        };
        const openCamera = async () => {
            const permissionResult = await ImagePicker.requestCameraPermissionsAsync();
            if (permissionResult.granted === false) {
              alert("You've refused to allow this appp to access your camera!");
              return;
            }
            const result = await ImagePicker.launchCameraAsync();
            if (!result.canceled) {
                setImage(result.assets[0].uri);
                props.selectedImage(image);
            }
        }
              
            
    useEffect(()=> {
        props.selectedImage(image);
    },[image])
        


    return(
    <View style={{alignItems: 'center', justifyContent: 'center', alignSelf:'center', top:'30%' }}>
        <View style={{top:'120%',right:'-22%'}}>
        <TouchableOpacity style={{position:'absolute',top:'120%',right:'5%'}} onPress={()=>{pickImage();}}>
            <Image source={require('../imgs/gallery.png')} title="Pick an image from camera roll"  style={{resizeMode:'contain',width:40,height:40}} />
        </TouchableOpacity>
        <TouchableOpacity style={{position:'absolute',top:'120%',right:'30%'}} onPress={()=>{openCamera();}}>
            <Image source={require('../imgs/camera.png')} title="Pick an image from camera roll"  style={{resizeMode:'contain',width:40,height:40}} />
        </TouchableOpacity>
        </View>
        {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
        
    </View>
    )

};

const styles=StyleSheet.create({
    containerBimg:{
        justifyContent:"center",
        alignItems:'center',
        backgroundColor:'#e0fbfc',
        alignSelf:'flex-end',
    },
    ButtonImg:{
        alignSelf:'center',
        justifyContent:'center',
        alignItems:'center',
        width:46,
        height:46,
        backgroundColor:'#0096c7',
        borderRadius:20,
        top:-60

    },
    img:{
        width:40,
        height:40,
    },
    img2:{
        width:300,
        height:300,
        resizeMode:"contain",
    },
    img2Cont:{
        alignSelf:'center',
        justifyContent:'center',
        alignItems:'center',
        bottom:450,

    },
    gallery:{
        //height:10,
    }
});

