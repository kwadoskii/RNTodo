import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function Header() {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>My Todos</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        // height: 120,
        padding: 48, 
        backgroundColor: 'coral',      
        width: "100%",
    },
    title: {
        textAlign: 'center',
        color: '#fff',
        fontWeight: "bold",
        fontSize: 40
    }
});