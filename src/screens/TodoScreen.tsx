import React, {useState} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {TodoInterface} from "../interfaces/TodoInterface";
import {THEME} from '../theme';
import {AppCard} from "../components/AppCard";
import {EditModal} from "../components/EditModal";

interface IProps {
    todo: TodoInterface
    goBack: any,
    removeItem: any,
}

export const TodoScreen = (props: IProps) => {
    const [modal, setModal] = useState(false);
    return (
        <View>
            <EditModal visible={modal} onCancel={() => setModal(false)}/>
            <AppCard style={styles.card}>
                <Text style={styles.title}>{props.todo.title}</Text>
                <Button title='Ред.' onPress={() => setModal(true)}/>
            </AppCard>
           <View style={styles.buttons}>
               <View style={styles.button}>
                <Button title='Назад' color={THEME.MAIN_COLOR} onPress={() => props.goBack()}/>
               </View>
               <View style={styles.button}>
                   <Button
                       title='Удалить' color={THEME.DANGER_COLOR}
                       onPress={props.removeItem.bind(null, props.todo)}/>
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
        width: '40%',
    },
    title: {
        fontSize: 20
    },
    card: {
        padding: 15,
        marginBottom: 20
    }
});

