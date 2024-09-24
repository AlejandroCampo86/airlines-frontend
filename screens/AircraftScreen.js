// AircraftScreen.js
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, Button } from 'react-native';
import axios from 'axios';

const AircraftScreen = () => {
    const [aircraft, setAircraft] = useState([]);

    useEffect(() => {
        const fetchAircraft = async () => {
            try {
                const response = await axios.get('http://192.168.0.98:5000/api/aircraft');
                setAircraft(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchAircraft();
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Aircraft Management</Text>
            <FlatList
                data={aircraft}
                keyExtractor={(item) => item._id}
                renderItem={({ item }) => (
                    <View style={styles.item}>
                        <Text>{item.registration}</Text>
                        <Text>{item.model}</Text>
                    </View>
                )}
            />
            <Button title="Add Aircraft" onPress={() => { }} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20 },
    title: { fontSize: 24, marginBottom: 20 },
    item: { padding: 10, borderBottomWidth: 1, borderBottomColor: '#ccc' },
});

export default AircraftScreen;
