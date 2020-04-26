import React, {useState, useEffect, useContext} from 'react';
import {View, StyleSheet, FlatList, Image, Keyboard, Dimensions} from 'react-native';
import {AddTodo} from '../components/AddTodo';
import {Todo} from '../components/Todo';
import {THEME} from '../theme';
import {TodoContext} from '../context/todos/todoContext';
import {ScreenContext} from '../context/screens/screenContext';

export const MainScreen = () => {
    const {todos, addTodo, removeTodo} = useContext(TodoContext);
    const {changeScreen} = useContext(ScreenContext);
    const [deviceWidth, setDeviceWidth] = useState(Dimensions.get('window').width - THEME.PADDING_HORIZONTAL * 2);
    useEffect(() => {
        const update = () => {
            setDeviceWidth(Dimensions.get('window').width - THEME.PADDING_HORIZONTAL * 2)
        };
        Dimensions.addEventListener('change', update);
        return () => {
            Dimensions.removeEventListener('change', update)
        }
    });
    let content = (
        <View style={{width: deviceWidth}}>
            <FlatList
                onScroll={() => Keyboard.dismiss()}
                keyExtractor={item => item.id.toString()}
                data={todos}
                renderItem={({item}) =>
                    (<Todo todo={item} showTodo={changeScreen} removeTodo={removeTodo}/>)}
            />
        </View>
    );
    if (!todos.length) {
        content =
        <View style={styles.noItems}>
            <Image
                style={styles.image}
                source={require('../../assets/no-items.png')}
            />
        </View>
    }
    return <View>
        <AddTodo onSubmit={addTodo}/>
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
    }
});
