import { combineReducers } from 'redux';

const userData = (state = {}, action) => {
    switch (action.type) {
        case 'SET_USER_DATA':
            return { ...action.data };
        default:
            return state;
    }
}

const someTask = (state = {}, action) => {
    switch (action.type) {
        case 'TODO':
            return { ...action.data };
        default:
            return state;
    }
}

export { userData, someTask };

