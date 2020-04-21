import React from 'react';
import {View, StyleSheet, TextInput, Button, Modal} from 'react-native';
import {THEME} from "../theme";

interface IProps {
    visible: boolean,
    onCancel: any
}

interface IState {
}

export const EditModal = (props: IProps, state: IState) => {
    return (
        <Modal
            visible={props.visible}
            transparent={false}
            animationType='slide'

        >
            <View style={styles.wrap}>
                <TextInput
                    style={styles.input}
                    placeholder='Введите название'
                    maxLength={64}
                />
                <View style={styles.buttons}>
                    <Button
                        title='Отменить'
                        onPress={() => props.onCancel()}
                        color={THEME.DANGER_COLOR}/>
                    <Button
                        title='Сохранить'
                        onPress={() => {
                        console.log()}}/>
                </View>
            </View>
        </Modal>
    )
};

const styles = StyleSheet.create({
    input: {
      padding: 10,
      borderBottomColor: THEME.MAIN_COLOR,
      borderBottomWidth: 2,
      width: '80%'
    },
    wrap: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttons: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around'
    }
})
