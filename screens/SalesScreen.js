// SalesScreen.js
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, Button } from 'react-native';
import axios from 'axios';

const SalesScreen = () => {
    const [sales, setSales] = useState([]);

    useEffect(() => {
        const fetchSales = async () => {
            try {
                const response = await axios.get('http://192.168.0.101:5000/api/sales');
                setSales(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchSales();
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Onboard Sales</Text>
            <FlatList
                data={sales}
                keyExtractor={(item) => item._id}
                renderItem={({ item }) => (
                    <View style={styles.item}>
                        <Text>{item.productName}</Text>
                        <Text>{item.amount}</Text>
                    </View>
                )}
            />
            <Button title="Add Sale" onPress={() => { }} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20 },
    title: { fontSize: 24, marginBottom: 20 },
    item: { padding: 10, borderBottomWidth: 1, borderBottomColor: '#ccc' },
});

export default SalesScreen;
