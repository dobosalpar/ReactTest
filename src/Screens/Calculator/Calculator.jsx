import React, { useContext } from 'react';
import { CalculatorContext } from '../../App';
import { ADD, SUBTRACT, SET } from '../../Redux/ActionTypes';
import { useState } from 'react';

const Calculator = () => {
  const { state, dispatch } = useContext(CalculatorContext);
  const [initialValue, setInitialValue] = useState(0)

  return (
    <div>
      <div>
        <input type="number" value={initialValue} onChange={(e) => {
          setInitialValue(parseInt(e.target.value))
        }} />
        <button onClick={() => {
        dispatch({
          type: SET,
          payload: initialValue,
        })
      }}>
        Set initial value
      </button>
      </div>
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
      <button onClick={() => {
        dispatch({
          type: SET,
          payload: initialValue,
        })
      }}>
        Reset
      </button>
    </div>
  )
}

export default Calculator;
