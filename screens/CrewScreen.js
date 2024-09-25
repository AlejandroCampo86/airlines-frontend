// CrewScreen.js
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, Button, TextInput } from 'react-native';
import axios from 'axios';

const CrewScreen = (props) => {
    const [crew, setCrew] = useState([]);
    const [name, setName] = useState('');
    const [role, setRole] = useState('');

    useEffect(() => {
        const fetchCrew = async () => {
            try {
                const response = await axios.get('http://192.168.0.101:5000/api/crew');
                setCrew(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchCrew();
    }, []);

    const handleAddCrew = async () => {
        try {
            await axios.post('http://192.168.0.101:5000/api/crew', { name, role }); // Reemplaza con la IP de tu máquina
            props.navigation.goBack(); // Regresa a la pantalla anterior
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Crew Management</Text>
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
            <FlatList
                data={crew}
                keyExtractor={(item) => item._id}
                renderItem={({ item }) => (
                    <View style={styles.item}>
                        <Text>{item.name}</Text>
                        <Text>{item.role}</Text>
                    </View>
                )}
            />
            <Button title="Add Crew" onPress={handleAddCrew} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20 },
    title: { fontSize: 24, marginBottom: 20 },
    item: { padding: 10, borderBottomWidth: 1, borderBottomColor: '#ccc' },
});

export default CrewScreen;
