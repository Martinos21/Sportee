import React, { useState } from 'react';
import { Dimensions, Platform, StyleSheet, View } from 'react-native';
import MapView from '../components/mymap';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import { IconButton, MD3Colors } from 'react-native-paper';
import ModalForm from '../components/form';
import { useQuery } from 'convex/react';
import { api } from '../convex/api';

const { height } = Dimensions.get('window');

export default function MapScreen() {
  const [modalVisible, setModalVisible] = useState(false);

  const handleSubmit = (value) => {
    console.log('Form submitted with:', value);
  };

  /*try {
    const events = useQuery(api.eventsQuery.listTasks);
    console.log(events); 
  }
  catch{

  }*/

  const events = useQuery(api.eventsQuery.listTasks);
  console.log(events); 

  return (
    <View style={styles.container}>
      {Platform.OS === 'web' ? (
        <LoadScript googleMapsApiKey="AIzaSyAHl1bGXl-vqQpYpF4F1USr7CuCvu6iatM">
          <GoogleMap
            mapContainerStyle={styles.map}
            center={{ lat: 37.7749, lng: -122.4194 }}
            zoom={10}
          />
        </LoadScript>
      ) : (
        <MapView style={styles.map} />
      )}

      <IconButton
        icon="plus"
        style={styles.btn}
        onPress={() => setModalVisible(true)}
      />

      <ModalForm
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onSubmit={handleSubmit}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'flex-end' },
  map: { width: '100%', height: '100%' },
  btn: {
    position: 'absolute',
    bottom: height * 0.07,
    backgroundColor: MD3Colors.primary40,
    elevation: 5,
  },
});
