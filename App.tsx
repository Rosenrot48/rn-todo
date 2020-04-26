import React, {useState} from 'react';
import * as Font from 'expo-font';
import {AppLoading} from 'expo';
import {MainLayout} from './src/MainLayout';
import {TodoState} from './src/context/todos/TodoState';
import {ScreenState} from './src/context/screens/screenState';
const loadApplication = async () => {
    await Font.loadAsync({
        'roboto-regular': require('./assets/fonts/Roboto-Regular.ttf'),
        'roboto-bold': require('./assets/fonts/Roboto-Bold.ttf'),
        'roboto-italic': require('./assets/fonts/Roboto-Italic.ttf'),
    })
};
export default function App() {
    const [isReady, setIsReady] = useState(false);
    if (!isReady) {
        return  (
            <AppLoading
                startAsync={loadApplication}
                onError={error => {
                    console.log(error)}
                }
                onFinish={() => setIsReady(true)}
            />
        )
    }
    return (
        <ScreenState>
            <TodoState>
                <MainLayout/>
            </TodoState>
        </ScreenState>

    );
}

