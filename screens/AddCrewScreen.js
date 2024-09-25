// AddCrewScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import axios from 'axios';

const AddCrewScreen = ({ navigation }) => {
    const [name, setName] = useState('');
    const [role, setRole] = useState('');

    const handleAddCrew = async () => {
        try {
            await axios.post('http://192.168.0.101:5000/api/crew', { name, role }); // Reemplaza con la IP de tu máquina
            navigation.goBack(); // Regresa a la pantalla anterior
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Add Crew</Text>
            <TextInput
                style={styles.input}
                placeholder="Name"
                value={name}
                onChangeText={setName}
            />
            <TextInput
                style={styles.input}
                placeholder="Role"
                value={role}
                onChangeText={setRole}
            />
            <Button title="Add Crew" onPress={handleAddCrew} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20 },
    title: { fontSize: 24, marginBottom: 20 },
    input: { height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 20, paddingHorizontal: 10 },
});

export default AddCrewScreen;
