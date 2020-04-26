import {TodoInterface} from '../../interfaces/TodoInterface';
import {ADD_TODO, REMOVE_TODO, UPDATE_TODO} from '../../actions';

interface IState {
    todos: TodoInterface[]
}

export const todoReducer = (state: IState, action: any) => {
    switch (action.type) {
        case ADD_TODO: return {
            ...state,
            todos: [...state.todos,
                {id: Date.now().toString(), title: action.title}
            ]
        };
        case REMOVE_TODO:
            return {
            ...state,
            todos: [...state.todos.filter(todo => todo !== action.todo)
            ]
        };
        case UPDATE_TODO: return {...state, todos: state.todos.map((todo:TodoInterface) => {
                    if (todo.id === action.todo.id) {
                        todo.title = action.todo.title;
                    }
                    return todo;
                }
            )};
        default: return state;
    }
};
