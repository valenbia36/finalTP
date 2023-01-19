import React, {useRef,useState, useEffect} from 'react';
import {
    View,
    StyleSheet,
    Animated,
    PanResponder,
    Button,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export function Camera (props){
    const [image, setImage] = useState(null);
    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
        });
        if (!result.canceled) {
            setImage(result.assets[0].uri);
            console.log(image);
            props.selectedImage(image);
          };

        };
        

    return(
    <View style={{alignItems: 'center', justifyContent: 'center', alignSelf:'center', top:'30%' }}>
        {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
        <Button title="Pick an image from camera roll" onPress={pickImage} />
      
    </View>
    )

}

const styles=StyleSheet.create({
    containerBimg:{
        justifyContent:"center",
        alignItems:'center',
        //paddingLeft:250,
        //paddingTop:500,
        backgroundColor:'#e0fbfc',
        alignSelf:'flex-end',
        //marginTop:500,
        //marginRight:50
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
        //borderRadius:15,
    },
    img2:{
        //flex:1,
        width:300,
        height:300,
        //alignSelf:'center',
        //justifyContent:'center',
        //alignItems:'center',
        resizeMode:"contain",
    },
    img2Cont:{
        alignSelf:'center',
        justifyContent:'center',
        alignItems:'center',
        bottom:450,
        //left:"50%"

    }
});

