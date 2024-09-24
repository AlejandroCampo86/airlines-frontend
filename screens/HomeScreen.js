// HomeScreen.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const HomeScreen = ({ navigate }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Onboard Sales App</Text>
            <Button
                title="Manage Crew"
                onPress={() => navigate('/crew')}
            />
            <Button
                title="Manage Aircraft"
                onPress={() => navigate('/aircraft')}
            />
            <Button
                title="Manage Passengers"
                onPress={() => navigate('/passenger')}
            />
            <Button
                title="Sales"
                onPress={() => navigate('/sales')}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    title: { fontSize: 24, marginBottom: 20 },
});

export default HomeScreen;
