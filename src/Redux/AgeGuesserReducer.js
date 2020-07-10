import { SET } from './ActionTypes';

export const ageGuesserInitialState = {
    age: 0,
    name: "",
}

export const ageGuesserReducer = (state, action) => {
    const {type, payload} = action;
    switch (type) {
        case SET:
            return {
               age: payload.age,
               name: payload.name
            }
        default:
            return state
    }
}