import React from 'react';
import {View, StyleSheet, TextInput, Alert, Keyboard} from 'react-native';
import {Entypo} from '@expo/vector-icons';

import {THEME} from '../theme';
import {AppButton} from './AppButton';

export interface IProps {
    onSubmit: any
}

export const AddTodo = ({onSubmit}: IProps) => {

    const [value, setValue] = React.useState('');
    const addPressHandler = () => {
        if (value.trim()) {
            onSubmit(value);
            setValue('');
            Keyboard.dismiss();
        } else {
            Alert.alert('Введите значение')
        }
    }
    return (
        <View style={styles.block}>
            <TextInput
                style={styles.input}
                onChange={text => setValue(text.nativeEvent.text)}
                value={value.toString()}
                placeholder='Введите название дела!'
            />
            <AppButton
                buttonColor={THEME.MAIN_COLOR}
                onPress={addPressHandler}
                disabled={!value.trim()}
            >
                <Entypo name={'add-to-list'} size={20}/>
            </AppButton>
        </View>
    )
}

const styles = StyleSheet.create({
    block: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 15
    },
    input: {
        width: '60%',
        marginRight: 10,
        borderBottomWidth: 2,
        borderBottomColor: THEME.MAIN_COLOR,
    }
});
