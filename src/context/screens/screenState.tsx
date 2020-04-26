import React, {useReducer} from 'react';
import {ScreenContext} from './screenContext';
import {screenReducer} from './screenReducer';
import {CHANGE_SCREEN} from '../../actions';

interface IProps {
    children: any
}

export const ScreenState = (props: IProps) => {
    const [state, dispatch] = useReducer(screenReducer, null);

    const changeScreen = (id: any) => dispatch({type: CHANGE_SCREEN, payload: id});

    return (
        <ScreenContext.Provider
        value={{
            changeScreen,
            todoId: state
        }}
        >
            {props.children}
        </ScreenContext.Provider>
    )
};
