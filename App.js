import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from './src/Screens/Home';
import {Search} from './src/Screens/Search';
import {Families} from './src/Screens/Families';
import {UpPics} from './src/Screens/UpPics';
import {SearchImgs} from './src/Screens/Search-Imgs';
import {MapScreen} from './src/Screens/MapScreen';
import {AllImgs} from './src/Screens/AllImgs'
//redux
import { Provider } from 'react-redux';
import store from './src/redux'

export default function App() {
  var Stack = createNativeStackNavigator();
  return (
  <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown:false}} >
          <Stack.Screen name="Home" component={Home} screenOptions={{}} options={{gestureEnabled:false}} />
          <Stack.Screen name="Search" component={Search} options={{title:"Buscar Familias"}}/>
          <Stack.Screen name="Families" component={Families} options={{title:"Familias"}}/>
          <Stack.Screen name="UpPics" component = {UpPics} options = {{title:'Uploaded Pics'}}/>
          <Stack.Screen name="Search Imgs" component={SearchImgs} options={{title:"Buscar Imagenes"}}/>
          <Stack.Screen name="MapScreen" component={MapScreen} options={{title:"Mapa"}}/>
          <Stack.Screen name="AllImgs" component={AllImgs} options={{title:"AllImgs"}}/>
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}
