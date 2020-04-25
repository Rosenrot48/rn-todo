import React, {useState} from 'react';
import {StyleSheet, View, Alert, Dimensions} from 'react-native';
import * as Font from 'expo-font';
import {AppLoading} from 'expo';


import {Navbar} from './src/components/Navbar';
import {TodoInterface} from "./src/interfaces/TodoInterface";
import {MainScreen} from "./src/screens/MainScreen";
import {TodoScreen} from "./src/screens/TodoScreen";
import {THEME} from "./src/theme";


const loadApplication = async () => {
    await Font.loadAsync({
        'roboto-regular': require('./assets/fonts/Roboto-Regular.ttf'),
        'roboto-bold': require('./assets/fonts/Roboto-Bold.ttf'),
        'roboto-italic': require('./assets/fonts/Roboto-Italic.ttf'),
    })
};


export default function App() {
    const [isReady, setIsReady] = useState(false);
    const [todoId, setTodoId] = useState(null);
    const [todos, setTodos] = useState([]);
    const addTodo = (title: string) => {
        setTodos(prevState => [
            ...prevState,
            {
                id: Date.now(),
                title
            }
        ])
    };

    const removeTodo = (todo: TodoInterface) => {
        Alert.alert(
            'Внимание',
            `Удалить "${todo.title.trim()}"?`,
            [
                {
                    text: 'Отмена',
                    style: 'cancel',
                    // onPress: () => {
                    //   console.log('Canceled')}
                },
                {
                    text: 'Удалить',
                    style: 'destructive',
                    onPress: () => {
                        setTodoId(null);
                        setTodos(prevState => prevState.filter(value => value !== todo));
                    }
                }
            ],
            {cancelable: false}
        )
        // setTodos(prevState => prevState.filter(value => value !== todo));
    };
    const updateTodo = (todo: TodoInterface) => {
        setTodos((prevState: TodoInterface[]) =>
            prevState.map((prevTodo: TodoInterface) => {
                if (prevTodo.id === todo.id) {
                    prevTodo.title = todo.title;
                }
                return prevTodo;
            })
        )
    }

    let content = <MainScreen todos={todos} addTodo={addTodo} removeTodo={removeTodo} openTodo={(id: any) => setTodoId(id)}/>
    if(todoId) {
        const selectedTodo: TodoInterface = todos.find(todo => todo.id === todoId);
        content = <TodoScreen editSave={updateTodo} removeItem={removeTodo} goBack={() => setTodoId(null)} todo={selectedTodo}/>
    }

    if (!isReady) {
        return  (
            <AppLoading
                startAsync={loadApplication}
                onError={error => {
                    console.log(error)}
                }
                onFinish={() => setIsReady(true)}
                />
        )
    }

    return (
        <View >
            <Navbar title='Todo App'/>
            <View style={styles.container}>
                {content}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
      paddingHorizontal: THEME.PADDING_HORIZONTAL,
      paddingVertical: 20,
    // height: (Dimensions.get('window').height / 2)
    // resizeMode: 'contain'
    height: '88%'
    // flex: 1,
    // flexDirection: 'column',
    // backgroundColor: '#000',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
