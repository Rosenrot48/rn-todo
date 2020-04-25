import React from 'react';
import {View, StyleSheet} from 'react-native';
import {THEME} from '../theme';
import {AppRegularText} from "./AppText";


export interface IProps {
    title: string
}

export const Navbar = (props: IProps) => {
    return(
        <View style={styles.navbar}>
            <AppRegularText style={styles.text}>{props.title}</AppRegularText>
        </View>
    )
}

const styles = StyleSheet.create({
    navbar : {
        // flex: 1,
        // flexDirection: 'column',
        height: 70,
        alignItems: 'center',
        justifyContent: 'flex-end',
        backgroundColor: THEME.NAVBAR_COLOR,
        paddingBottom: 5
    },
    text : {
        color: '#fff',
        fontSize: 20
    }
});
