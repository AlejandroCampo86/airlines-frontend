// PassengerScreen.js
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, Button } from 'react-native';
import axios from 'axios';

const PassengerScreen = () => {
    const [passengers, setPassengers] = useState([]);

    useEffect(() => {
        const fetchPassengers = async () => {
            try {
                const response = await axios.get('http://192.168.0.98:5000/api/passengers');
                setPassengers(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchPassengers();
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Passenger Manifest</Text>
            <FlatList
                data={passengers}
                keyExtractor={(item) => item._id}
                renderItem={({ item }) => (
                    <View style={styles.item}>
                        <Text>{item.name}</Text>
                        <Text>{item.seat}</Text>
                    </View>
                )}
            />
            <Button title="Add Passenger" onPress={() => { }} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20 },
    title: { fontSize: 24, marginBottom: 20 },
    item: { padding: 10, borderBottomWidth: 1, borderBottomColor: '#ccc' },
});

export default PassengerScreen;
