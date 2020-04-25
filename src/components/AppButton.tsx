import React from 'react';
import {StyleSheet, View, TouchableOpacity, TouchableNativeFeedback, Platform} from 'react-native';
import {AppBoldText} from "./AppText";
import {THEME} from "../theme";

interface IProps {
    children?: any,
    onPress?: any,
    onLongPress?: any
    buttonColor?: any
    disabled?: boolean
}

export const AppButton = (props: IProps) => {
    const Wrapper = Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity
    return (
        <Wrapper
            onPress={props.onPress}
            activeOpacity={0.5}
            onLongPress={props.onLongPress}
            disabled={props.disabled}
        >
            <View
                style={
                    props.disabled ? {...styles.button, ...styles.buttonDisabled} :
                    {...styles.button, backgroundColor: props.buttonColor? props.buttonColor: THEME.MAIN_COLOR}
                }
            >
                <AppBoldText style={styles.buttonText}>
                    {props.children}
                </AppBoldText>
            </View>
        </Wrapper>
    )
};

const styles = StyleSheet.create({
   button: {
       paddingHorizontal: 20,
       paddingVertical: 10,
       borderRadius: 5,
       flexDirection: 'row',
       alignItems: 'center',
       justifyContent: 'center'
   },
    buttonDisabled: {
        backgroundColor: "#ccc",
        color: "#999"
    },
    buttonText: {
       color: '#fff'
    }
});
