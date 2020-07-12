import React, { useContext } from 'react';
import { CalculatorContext } from '../../App';
import { ADD, SUBTRACT, CHANGE, RESET } from '../../Redux/ActionTypes';

const Calculator = () => {

  const { state, dispatch } = useContext(CalculatorContext);

  const changeState = (e)  =>
    dispatch({ 
      type: CHANGE,
      payload: parseInt(e.target.value),
    })

  return (
    <div>
      <button onClick={() => {dispatch({type: ADD, payload: 10,})}}>Add 10</button>
      <button onClick={() => {dispatch({type: SUBTRACT, payload: 10,})}}>Substract 10</button>
      <div>
        {`Result: ${state.value}`}
      </div>
      Set number :
      <input type="text" value={state.value} onChange={changeState} />
      <button onClick={() => {dispatch({type: RESET,})}}>Reset</button>
    </div>
  );
};

export default Calculator;