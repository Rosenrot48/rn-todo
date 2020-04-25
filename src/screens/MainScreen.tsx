import React from 'react';
import {View, StyleSheet, FlatList, Image, Keyboard} from 'react-native';
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
    let content = (
            <FlatList
                keyExtractor={item => item.id.toString()}
                data={props.todos}
                renderItem={({item}) =>
                    (<Todo todo={item} showTodo={props.openTodo} removeTodo={props.removeTodo}/>)}
            />
    );

    if (!props.todos.length) {
        content =
        <View style={styles.noItems}>
            <Image
                style={styles.image}
                source={require('../../assets/no-items.png')}
            />
        </View>
    }
    return <View>
        <AddTodo onSubmit={props.addTodo}/>
        {content}
        </View>
};
const styles = StyleSheet.create({
    noItems: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        marginTop: 30,
        height: 300,
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain'
    },
    flatList: {
        flex: 1
    }
});
