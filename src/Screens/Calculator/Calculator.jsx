import React, { useContext, useState } from 'react';
import { CalculatorContext } from '../../App';
import { ADD, SUBTRACT, SET, RESET } from '../../Redux/ActionTypes';

const Calculator = () => {
  const { state, dispatch } = useContext(CalculatorContext);
  const [baseValue, setBaseValue] = useState(0)
  const [savedValue, setSaveValue] = useState(0)
  return (
    <div>
      <input type="number" value={baseValue} onChange={e => setBaseValue(parseInt(e.target.value))} />
      <button onClick={() => {
        setSaveValue(parseInt(baseValue))
        setBaseValue(0)
        dispatch({
          type: SET,
          payload: baseValue,
        })
      }}>Base Number</button>
      <button onClick={() =>{
        dispatch({
          type: RESET,   
          payload: savedValue,
        })
      }}>
      Reset Base Number
      </button>
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
