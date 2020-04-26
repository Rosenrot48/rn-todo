import React, {useContext} from 'react';
import {Navbar} from './components/Navbar';
import {View, StyleSheet, StatusBar, Platform} from 'react-native';
import {THEME} from './theme';
import {MainScreen} from './screens/MainScreen';
import {TodoScreen} from './screens/TodoScreen';
import {ScreenContext} from './context/screens/screenContext';

export const MainLayout = () => {
    const {todoId} = useContext(ScreenContext);
    return(
        <View >
            <StatusBar barStyle={Platform.OS === 'ios' ? 'dark-content': 'default'}/>
            <Navbar title='Todo App'/>
            <View style={styles.container}>
                {todoId ? <TodoScreen/> : <MainScreen/>}
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: THEME.PADDING_HORIZONTAL,
        paddingVertical: 20,

    },
});
