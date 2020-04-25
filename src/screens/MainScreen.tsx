import React, {useState, useEffect} from 'react';
import {View, StyleSheet, FlatList, Image, Keyboard, Dimensions} from 'react-native';
import {AddTodo} from "../components/AddTodo";
import {Todo} from "../components/Todo";
import {TodoInterface} from "../interfaces/TodoInterface";
import {THEME} from "../theme";

interface IProps {
    todos: TodoInterface[],
    addTodo: any,
    openTodo: any,
    removeTodo: any
}

export const MainScreen = (props: IProps) => {

    const [deviceWidth, setDeviceWidth] = useState(Dimensions.get('window').width - THEME.PADDING_HORIZONTAL * 2);

    useEffect(() => {
        const update = () => {
            setDeviceWidth(Dimensions.get('window').width - THEME.PADDING_HORIZONTAL * 2)
        }
        Dimensions.addEventListener('change', update);

        return () => {
            Dimensions.removeEventListener('change', update)
        }
    })

    let content = (
        <View style={{width: deviceWidth}}>
            <FlatList
                onScroll={() => Keyboard.dismiss()}
                keyExtractor={item => item.id.toString()}
                data={props.todos}
                renderItem={({item}) =>
                    (<Todo todo={item} showTodo={props.openTodo} removeTodo={props.removeTodo}/>)}
            />
        </View>
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
