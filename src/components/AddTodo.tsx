import React from 'react';
import {View, StyleSheet, TextInput, Button, Alert} from 'react-native';
import {THEME} from '../theme';

export interface IProps {
    onSubmit: any
}
interface IState {

}

export const AddTodo = ({onSubmit}: IProps) => {

    const [value, setValue] = React.useState('');
    const addPressHandler = () => {
        if (value.trim()) {
            onSubmit(value);
            setValue('');
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
            <Button title='Добавить' color={THEME.MAIN_COLOR} disabled={!value.trim()}  onPress={addPressHandler}/>
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
        width: '70%',
        marginRight: 10,
        borderBottomWidth: 2,
        borderBottomColor: THEME.MAIN_COLOR,
    }
})
