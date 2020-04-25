import React, {useState} from 'react';
import {View, StyleSheet, TextInput, Button, Modal, Alert} from 'react-native';
import {THEME} from "../theme";
import {AppButton} from "./AppButton";

interface IProps {
    visible: boolean,
    onCancel: any,
    value: string,
    onSave: any
}

interface IState {
}

export const EditModal = (props: IProps, state: IState) => {

    const [title, setTitle] = useState(props.value);
    const saveHandler = () => {
       if (!title.trim().length) {
           Alert.alert('Упс...', `Нельзя сохранить пустое название :(`)
       } else {
           props.onSave(title);
       }
    };
    return (
        <Modal
            visible={props.visible}
            transparent={false}
            animationType='slide'
            presentationStyle='formSheet'
            hardwareAccelerated={true}
        >
            <View style={styles.wrap}>
                <TextInput
                    style={styles.input}
                    placeholder='Введите название'
                    maxLength={64}
                    value={title}
                    onChangeText={setTitle}
                />
                <View style={styles.buttons}>
                    <AppButton
                        children='Отменить'
                        onPress={() => props.onCancel()}
                        buttonColor={THEME.DANGER_COLOR}/>
                    <AppButton
                        buttonColor={THEME.SUBMIT_COLOR}
                        onPress={saveHandler}>
                        Сохранить
                    </AppButton>
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
      width: '80%',
    },
    wrap: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttons: {
        width: '100%',
        paddingTop: 15,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    modal: {
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        overflow: 'hidden'
    }
})
