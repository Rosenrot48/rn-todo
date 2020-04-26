import React, {useState, useContext} from 'react';
import {StyleSheet, View, Dimensions} from 'react-native';
import {FontAwesome, AntDesign} from '@expo/vector-icons';
import {TodoInterface} from '../interfaces/TodoInterface';
import {THEME} from '../theme';
import {AppCard} from '../components/AppCard';
import {EditModal} from '../components/EditModal';
import {AppBoldText} from '../components/AppText';
import {AppButton} from '../components/AppButton';
import {TodoContext} from '../context/todos/todoContext';
import {ScreenContext} from '../context/screens/screenContext';
export const TodoScreen = () => {
    const {todos, updateTodo, removeTodo} = useContext(TodoContext);
    const {todoId, changeScreen} = useContext(ScreenContext);
    const [modal, setModal] = useState(false);

    const todo: TodoInterface = todos.find((t: TodoInterface) => t.id === todoId);

    const onEditSave = (title: string) => {
        const newTodo: TodoInterface = {
            id: todo.id,
            title
        };
        updateTodo(newTodo);
        setModal(false);
    };
    return (
        <View>
            <EditModal onSave={onEditSave} value={todo.title} visible={modal} onCancel={() => setModal(false)}/>
            <AppCard style={styles.card}>
                <AppBoldText style={styles.title}>{todo.title}</AppBoldText>
                <AppButton onPress={() => setModal(true)}>
                    <FontAwesome name='edit' size={20}/>
                </AppButton>
            </AppCard>
           <View style={styles.buttons}>
               <View style={styles.button}>
                   <AppButton buttonColor={THEME.MAIN_COLOR} onPress={() => changeScreen(null)}>
                       <AntDesign name={'back'} size={18}/>
                   </AppButton>
               </View>
               <View style={styles.button}>
                   <AppButton
                       buttonColor={THEME.DANGER_COLOR}
                       onPress={() => removeTodo(todo)}
                   >
                       <FontAwesome name='remove' size={20}/>
                   </AppButton>
               </View>
           </View>
        </View>
    )
};
const styles = StyleSheet.create({
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    button: {
        width: Dimensions.get('window').width / 3,
        // width: Dimensions.get('window').width > 400 ? 150 : 100
    },
    title: {
        fontSize: 20
    },
    card: {
        padding: 15,
        marginBottom: 20
    }
});

