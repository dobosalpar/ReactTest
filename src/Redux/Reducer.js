import { ADD, SUBTRACT } from './ActionTypes';

export const initialState = {
  value: 0,
};

export const reducer = (state, action) => {
  const {type, payload} = action;
  switch (type) {
    case ADD:
      return {
        value: state.value + payload,
      };
    case SUBTRACT:
      return {
        value: state.value - payload,
      };
    default:
      return state;
  }
}
