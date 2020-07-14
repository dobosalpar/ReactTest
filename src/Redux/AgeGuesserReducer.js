import { SET, LOADING, NAME } from './ActionTypes';

export const ageGuesserInitialState = {
    age: 0,
    name: "",
    isLoading: false,
}

export const ageGuesserReducer = (state, action) => {
 const {type, payload} = action;
 switch (type) {
  case SET:
   return {
    ...state,
    age: payload.age,
    }
  case LOADING:
    return {
    ...state,
     isLoading: payload.isLoading
    }
  case NAME:
    return {
    ...state,
    name: payload,
    }
    default:
    return state
  } 
}
