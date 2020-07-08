
import { SET } from './ActionTypes';
export const guessedAgeForName = {
    name: "",
    age: null,
}

export const ageGuesserReducer = (state, action) => {
    
    const {type, payload} = action;
    
    switch (type) {
        case SET:
            fetch(`https://api.agify.io?name=${payload}`)
                .then(response => response.json())
                .then(data => { 
                    return {
                        name: payload,
                        age: data.age,
                    }
                })
            break;
        default:
            return state
    }
}