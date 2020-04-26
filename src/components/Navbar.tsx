import React from 'react';
import {View, StyleSheet, Platform} from 'react-native';
import {THEME} from '../theme';
import {AppRegularText} from './AppText';


export interface IProps {
    title: string
}

export const Navbar = (props: IProps) => {
    return(
        <View style={{...styles.navbar, ...Platform.select({
                ios: styles.navbarIOS,
                android: styles.navbarAndroid
            })}}>
            <AppRegularText style={styles.text}>{props.title}</AppRegularText>
        </View>
    )
};

const styles = StyleSheet.create({
    navbar : {
        height: 70,
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingTop: 10,
        paddingBottom: 10
    },
    navbarAndroid: {
        backgroundColor: THEME.NAVBAR_COLOR,

    },
    navbarIOS: {
      borderBottomColor: THEME.MAIN_COLOR,
      borderBottomWidth: 1
    },
    text : {
        color: Platform.OS === 'ios' ? THEME.MAIN_COLOR: '#fff',
        fontSize: 20
    }
});
