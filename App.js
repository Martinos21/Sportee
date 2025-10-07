import React from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import MapView from 'react-native-maps';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import { IconButton, MD3Colors } from 'react-native-paper';

export default function App() {
  return (
    <View style={styles.container}>
      {Platform.OS === 'web' ? (
        <LoadScript googleMapsApiKey="AIzaSyAHl1bGXl-vqQpYpF4F1USr7CuCvu6iatM">
          <GoogleMap
            mapContainerStyle={styles.map}
            center={{ lat: 37.7749, lng: -122.4194 }} // example coordinates for San Francisco
            zoom={10}
          />
        </LoadScript>
      ) : (
        <MapView style={styles.map} />
      )} 
      <IconButton
        icon = 'plus'
        style = {styles.fab}
        onPress={()=> console.log("pressed")}
      />

      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
  fab: {
    position: 'absolute',
    bottom: 30,
    right: 20,
    backgroundColor: MD3Colors.primary40, // optional fallback color
    elevation: 5,
  },
});

