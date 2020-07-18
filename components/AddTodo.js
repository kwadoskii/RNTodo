import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, Button } from 'react-native'

export default function AddTodo({submitHandler}) {
    const [text, setText] = useState('');
    const onChangeHandler = (val) => {
        setText(val);
    }

    return (
        <View >
            <TextInput 
                style={styles.input}
                placeholder='New todo...'
                onChangeText={onChangeHandler}
                value={text}
            />

            <Button 
                title='add todo'
                color= 'coral'
                onPress={() => {
                    submitHandler(text)
                    setText('')
                    }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: "#ddd",
        fontSize: 30
    }
})

