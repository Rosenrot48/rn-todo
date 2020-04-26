import {CHANGE_SCREEN} from '../../actions';

interface IState {
    todoId: string
}
export const screenReducer = (state: IState, action: any) => {
    switch (action.type) {
        case CHANGE_SCREEN:
            return action.payload;
        default: return state;
    }
};
