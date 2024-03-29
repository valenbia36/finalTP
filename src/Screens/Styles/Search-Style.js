import {
    StyleSheet
} from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e0fbfc',
        alignItems: 'center',
        justifyContent: 'flex-start',
        resizeMode:'contain',
        height:200
      },
    inputView:{
        width:"80%",
        backgroundColor:"#90e0ef",
        borderRadius:25,
        height:50,
        justifyContent:"center",
        padding:20,
        top:"20%"
      },
      inputText:{
        height:50,
        color:"white"
      },
      titulo:{
          top:"10%",
          fontSize:14,
          fontWeight:"900"
      },
      sumbitContainer:{
        top:'24%',
        backgroundColor:"#0096c7",
        borderRadius:25,
        width:150,
        height:50,
        alignItems:"center",
        justifyContent:"center",
        textAlign:'center',
        textAlignVertical:'center',
      },
      sumbit:{

      },
      sumbitText:{
        color:'white',
        fontSize:17,
        right:10
      },
      pickerCont:{
        alignContent:'center',
        justifyContent:'center',
        alignSelf:'center',
        top:"25%",
      },
      ButtonImg:{
        alignSelf:'center',
        justifyContent:'center',
        alignItems:'center',
        width:30,
        height:30,
        bottom:95,
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
        bottom:70,
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
        bottom:157,
        right:"-40%",
        borderRadius:5,
        backgroundColor:'white',
        right:10

    },
    img3:{
      width:25,
        height:25,

    },
})