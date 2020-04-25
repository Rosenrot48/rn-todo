import React, {useState} from 'react';
import {StyleSheet, View, Dimensions} from 'react-native';
import {FontAwesome, AntDesign} from '@expo/vector-icons';


import {TodoInterface} from '../interfaces/TodoInterface';
import {THEME} from '../theme';
import {AppCard} from '../components/AppCard';
import {EditModal} from '../components/EditModal';
import {AppBoldText} from '../components/AppText';
import {AppButton} from '../components/AppButton';

interface IProps {
    todo: TodoInterface
    goBack: any,
    removeItem: any,
    editSave: any
}

export const TodoScreen = (props: IProps) => {
    const [modal, setModal] = useState(false);

    const onEditSave = (title: string) => {
        const todo: TodoInterface = {
            id: props.todo.id,
            title
        };
        props.editSave(todo);
        setModal(false);
    }

    return (
        <View>
            <EditModal onSave={onEditSave} value={props.todo.title} visible={modal} onCancel={() => setModal(false)}/>
            <AppCard style={styles.card}>
                <AppBoldText style={styles.title}>{props.todo.title}</AppBoldText>
                <AppButton onPress={() => setModal(true)}>
                    <FontAwesome name='edit' size={20}/>
                </AppButton>
            </AppCard>
           <View style={styles.buttons}>
               <View style={styles.button}>
                   <AppButton buttonColor={THEME.MAIN_COLOR} onPress={() => props.goBack()}>
                       <AntDesign name={'back'} size={18}/>
                   </AppButton>
               </View>
               <View style={styles.button}>
                   <AppButton
                       buttonColor={THEME.DANGER_COLOR}
                       onPress={props.removeItem.bind(null, props.todo)}
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

