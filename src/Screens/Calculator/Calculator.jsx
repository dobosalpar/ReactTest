import React, { useContext } from 'react';
import { CalculatorContext } from '../../App';
import { ADD, RESET, SUBTRACT, SET } from '../../Redux/ActionTypes';

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
      <button onClick={() => {
        dispatch({
          type: RESET,
          payload: 0,
        })
      }}>
        Reset
      </button>
      <div>
        <input type="text" value={state.value} onChange={e => {

          // Only allow numbers
          const re = /^[0-9\b]+$/;
          if (e.target.value === '' || re.test(e.target.value)) {
            dispatch({
              type: SET,
              payload: e.target.value,
            })        
          }
        }}/>
      </div>

      <div>
        {`Result: ${state.value}`}
      </div>
    </div>
  )
}

export default Calculator;
