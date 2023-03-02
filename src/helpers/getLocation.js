
import * as Location from 'expo-location';
export default async function getLocation(loc) {
    
      
      
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      loc = location;
      //console.log(location)
      //return location;
    }