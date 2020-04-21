import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {TodoInterface} from '../interfaces/TodoInterface';


interface IProp {
    todo: TodoInterface,
    showTodo: any,
    removeTodo: any
}

export const Todo = (props: IProp) => {
    //             onPress={() => console.log('touched', props.todo.id)}
    return (
        <TouchableOpacity
            activeOpacity={0.4}
            onPress={props.showTodo.bind(null, props.todo.id)}
            onLongPress={props.removeTodo.bind(null, props.todo)}
        >
        <View style={styles.todo}>
            <Text>{props.todo.title}</Text>
        </View>
        </TouchableOpacity>
);
}

const styles = StyleSheet.create({
    todo: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        borderWidth: 1,
        borderColor: '#eee',
        borderRadius: 5,
        marginBottom: 10
    }
})
