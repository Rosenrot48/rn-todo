import React, {useReducer, useContext} from 'react';
import {TodoContext} from './todoContext';
import {todoReducer} from './todoReducer';
import {ADD_TODO, REMOVE_TODO, UPDATE_TODO} from '../../actions';
import {TodoInterface} from '../../interfaces/TodoInterface';
import {ScreenContext} from '../screens/screenContext';
import {Alert} from 'react-native';

interface IProps {
    children: any
}

export const TodoState = (props: IProps) => {
    const initialState = {
        todos: []
            //{id: '1', title: 'Выучить React Native'}]
    };
   const [state, dispatch] = useReducer(todoReducer, initialState);
   const {changeScreen} = useContext(ScreenContext);
   const addTodo = (title: string) => dispatch({type: ADD_TODO, title});
   const removeTodo = (todo: TodoInterface) =>
   {
       Alert.alert(
           'Внимание',
           `Удалить "${todo.title.trim()}"?`,
           [
               {
                   text: 'Отмена',
                   style: 'cancel',
               },
               {
                   text: 'Удалить',
                   style: 'destructive',
                   onPress: () => {
                       changeScreen(null);
                       dispatch({type: REMOVE_TODO, todo});
                   }
               }
           ],
           {cancelable: false}
       )
   };
   const updateTodo = (todo: TodoInterface) => dispatch({type: UPDATE_TODO, todo});

    return <TodoContext.Provider
        value={{
            todos: state.todos,
            addTodo,
            removeTodo,
            updateTodo
        }}
    >
        {props.children}
   </TodoContext.Provider>
};
