import React, { useContext } from 'react';
import { CalculatorContext } from '../../App';
import { ADD, SUBTRACT } from '../../Redux/ActionTypes';

const Calculator = () => {
  const { state, dispatch } = useContext(CalculatorContext);

  return (
    <div>
      <button onClick={() => {
        dispatch({
          type: ADD,
          payload: 10,
        })
      }}>
        Add 10
      </button>
      <button onClick={() => {
        dispatch({
          type: SUBTRACT,
          payload: 10,
        })
      }}>
        Substract 10
      </button>
      <div>
        {`Result: ${state.value}`}
      </div>
    </div>
  )
}

export default Calculator;
