import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';

import Header from './components/Header';
import TodoItem from './components/TodoItem';
import AddTodo from './components/AddTodo';

export default function App() {
    const [todos, setTodos] = useState([
        { text: 'buy coffee', id: '1' },
        { text: 'eat lunch', id: '2' },
        { text: 'play guitar', id: '3' },
        { text: 'go shopping', id: '4' }
    ]);

    const deleteItem = (id) => {
        setTodos(prevTodos => (prevTodos.filter(todo => todo.id !== id)));
    }

    const submitHandler = (text) => {
        if(text.length > 3){
            setTodos(prevTodos => {
                return [
                    { text: text, id: Math.random().toString() },
                    ...prevTodos
                ];
            });
        } else{
            Alert.alert('opps!', 'Todo chars must be over 3 chars', [{text: 'Noted'}]);
        }
    }

    return (
        <TouchableWithoutFeedback onPress={()=> Keyboard.dismiss()}>
            <View style={styles.container}>
                <Header />
                <View style={styles.content}>
                    <AddTodo
                        submitHandler={submitHandler}
                    />
                    <View style={styles.list} >
                        <FlatList
                            style={styles.todolistContainer}
                            data={todos}
                            renderItem={({ item }) => (
                                <TodoItem
                                    item={item}
                                    onPress={() => deleteItem(item.id)}
                                />
                            )}
                        />
                    </View>
                </View>
                <StatusBar style="auto" />
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fefefe'
    },
    content: {
        flex: 1,
        marginTop: 10,
        width: '100%',
        paddingHorizontal: 25,
        marginVertical: 20
    },
    list: {
        marginTop: 20,
        flex: 1
    },
    todolistContainer: {
        width: "100%"
    }
});