import React from 'react';
import {Text, StyleSheet} from 'react-native';

interface IProps {
    children?: any,
    style?: any
}
export const AppRegularText = (props: IProps) => <Text style={{...styles.regular, ...props.style}}>{props.children}</Text>
export const AppBoldText = (props: IProps) => <Text style={{...styles.bold, ...props.style}}>{props.children}</Text>
export const AppItalicText = (props: IProps) => <Text style={{...styles.italic, ...props.style}}>{props.children}</Text>
const styles = StyleSheet.create({
    regular: {
        fontFamily: 'roboto-regular'
    },
    bold: {
        fontFamily: 'roboto-bold'
    },
    italic: {
        fontFamily: 'roboto-italic'
    }
})
