import React, { Component } from "react";
import { Image, StyleSheet, View, } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import MapView, { Marker } from "react-native-maps";


export class PhotoMap extends Component {

    render() {
        return (

            <View style={styles.container}>
                <MapView
                    style={styles.map}
                    region={{
                        latitude: this.props.latitude,
                        longitude: this.props.longitude,
                        latitudeDelta: 0.015,
                        longitudeDelta: 0.0121,
                    }}
                >
                    <Marker coordinate={{ latitude: this.props.latitude, longitude: this.props.longitude }}></Marker>

                </MapView>

            </View>
        );
    }

}
const styles = StyleSheet.create({
    container: {
        width: '100%', height: '100%',//top:'10%'
    },
    map: {
        width: '100%', height: '100%',flex:1
    },
});