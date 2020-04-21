import React, {useState} from 'react';
import {StyleSheet, View, Alert} from 'react-native';
import {Navbar} from './src/components/Navbar';
import {TodoInterface} from "./src/interfaces/TodoInterface";
import {MainScreen} from "./src/screens/MainScreen";
import {TodoScreen} from "./src/screens/TodoScreen";



export default function App() {
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

  let content = <MainScreen todos={todos} addTodo={addTodo} removeTodo={removeTodo} openTodo={(id: any) => setTodoId(id)}/>
  if(todoId) {
    const selectedTodo: TodoInterface = todos.find(todo => todo.id === todoId);
    content = <TodoScreen removeItem={removeTodo} goBack={() => setTodoId(null)} todo={selectedTodo}/>
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
    paddingHorizontal: 30,
    paddingVertical: 20
    // flex: 1,
    // flexDirection: 'column',
    // backgroundColor: '#000',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
