import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function TodoItem({ item, onPress }) {
    return (
        <TouchableOpacity onPress={onPress} style={{ flex: 1, width: '100%' }}>
            <View style={styles.listholder}>
                <MaterialIcons name='delete' size={18} color='#333'/>
                <Text style={styles.text}>{item.text}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    listholder: {
        flexDirection: 'row-reverse',
        justifyContent: "space-between",
        paddingVertical: 20,
        paddingHorizontal: 15,
        marginTop: 18,
        borderColor: "tomato",
        backgroundColor: '#f5f9ea',
        borderWidth: 1,
        borderStyle: 'dashed',
        borderRadius: 10,
    },
    text: {
        marginRight: 12,
        fontSize: 25
    }
});