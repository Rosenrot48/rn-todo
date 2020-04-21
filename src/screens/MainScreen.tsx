import React from 'react';
import {Text, View, StyleSheet, FlatList} from 'react-native';
import {AddTodo} from "../components/AddTodo";
import {Todo} from "../components/Todo";
import {TodoInterface} from "../interfaces/TodoInterface";

interface IProps {
    todos: TodoInterface[],
    addTodo: any,
    openTodo: any,
    removeTodo: any
}

export const MainScreen = (props: IProps) => {
    return <View>
        <AddTodo onSubmit={props.addTodo}/>
        <FlatList
            keyExtractor={item => item.id.toString()}
            data={props.todos}
            renderItem={({item}) => (<Todo todo={item} showTodo={props.openTodo} removeTodo={props.removeTodo}/>)}/>
        </View>
};
const styles = StyleSheet.create({});
