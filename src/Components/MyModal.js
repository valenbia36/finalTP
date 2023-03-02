import React, {useRef,useState, useEffect,Component} from 'react';
import {
    View,
    Modal,
    TouchableHighlight,
    StyleSheet,
    Text,
    TextInput, Alert,
} from 'react-native';


export default class MyModal extends Component { 
     constructor (props){
         super(props);
         this.text="";

     }
    render() {
      return (
          <View style={{}}>
              <Modal animationType="slide" presentationStyle='overFullScreen' transparent={false} visible={this.props.modalVisible} onRequestClose={() => { this.props.onDismiss(false)}}>
                  <View style={styles.container}>
                      <View style={styles.innerContainer}>
                          <TextInput style={styles.input} onChangeText={(text) => {this.text=text}}/>
                          <TouchableHighlight
                              style={styles.buttonContainer}>
                              <Text style={styles.buttonText}>Submit</Text> 
                          </TouchableHighlight>
                          <TouchableHighlight
                              style={styles.buttonContainer}
                              onPress={() => { this.props.onDismiss(false) }}>
                              <Text style={styles.buttonText}>Close</Text> 
                          </TouchableHighlight>
                          <TouchableHighlight
                              style={styles.buttonContainer}>
                              <Text style={styles.buttonText} onPress={()=>{Alert.alert(this.text)}}>View Comments</Text> 
                          </TouchableHighlight>
                      </View>
                  </View>
              </Modal>
          </View>
      );
    }
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      padding: 20,
      backgroundColor: 'transparent',
    },
    innerContainer: {
      borderRadius: 10,
      alignItems: 'center',
      backgroundColor: '#34495e',
   },
   buttonContainer: {
      paddingVertical: 15,
      marginTop: 20,
      backgroundColor: '#2c3e50',
      borderRadius: 15
   },
   buttonText: {
      textAlign: 'center',
      color: '#ecf0f1',
      fontWeight: '700'
   },
   input:{
       borderWidth:1,
       alignSelf:'stretch',
       borderRadius:6,
       backgroundColor:"#edede9",
       height:40,
       top:'10%'

   }
  });