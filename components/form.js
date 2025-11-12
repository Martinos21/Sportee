import React, { useState } from 'react';
import { Modal, View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import {useMutation} from "convex/react";
import { api } from '../convex/api';

export default function ModalForm({ visible, onClose, onSubmit }) {
  const [name, setName] = useState('');
  const [lat, setLat] = useState('');
  const [lon, setLon] = useState('');
  const [description, setDescription] = useState('');

  const writeItem = useMutation(api.events.create);

  const handleSubmit = async () => {
    console.log("handleSubmit ran");

    if (!name || !description || !lat || !lon) {
      console.log("Missing fields", "Please fill in all inputs");
      return;
    }

    try {
      await writeItem({
        name,
        description,
        lat: parseFloat(lat),
        lon: parseFloat(lon),
      });

      console.log("Success", "Event added to Convex!");

      //setName("");
      //setLat("");
      //setLon("");
      //setDescription("");
      onClose();
    } catch (error) {
      console.error("Convex write failed:", error);
      console.log("Error", "Failed to save item to Convex");
    }
  };

  

  return (
    <Modal visible={visible} animationType="fade" transparent>
      <View style={styles.overlay}>
        <View style={styles.container}>
          <Text style={styles.title}>Create new sport event</Text>
          <TextInput
            style={styles.input}
            placeholder="Name of event"
            value={name}
            onChangeText={setName}
          />
          <TextInput
            style={styles.input}
            placeholder="Description"
            value={description}
            onChangeText={setDescription}
          />
          <TextInput
            style={styles.input}
            placeholder="Latitude"
            value={lat}
            onChangeText={setLat}
          />
          <TextInput
            style={styles.input}
            placeholder="Longitude"
            value={lon}
            onChangeText={setLon}
          />
          <View style={styles.buttons}>
            <Button title="Cancel" onPress={onClose} />
            <Button title="Submit" onPress={handleSubmit} />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  container: {
    width: '50%',
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 12,
  },
  title: { fontSize: 18, fontWeight: '600', marginBottom: 10 },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
  },
  buttons: { flexDirection: 'row', justifyContent: 'space-between' },
});
