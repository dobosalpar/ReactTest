import { GUESS, ISLOADING, NAME } from './ActionTypes';

export const ageReducerInitialState = {
  name:'',
  age:0,
  isLoading:false,
};

export  const ageReducer = (state, action) => {
  const {type, payload} = action;
  switch (type) {
    case GUESS:
      return {
        age: payload.age,
        name: payload.name,
        isLoading: false,
      };  
    case ISLOADING:
      return {
        ...state,
        isLoading: payload.loading,
      }    
    case NAME: 
      return {
        ...state,
        name:payload,
      }
    default:
      return state;
  };
};
