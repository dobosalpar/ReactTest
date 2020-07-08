import React, { useState, useContext } from 'react';
import { AgeGuesserContext } from '../../App';
import { SET } from '../../Redux/ActionTypes';

const AgeGuesser = () => {
  const [name, setName] = useState('');
  const { ageGuesserState, ageGuess } = useContext(AgeGuesserContext)

  return (
    <>
      <h1>Age Guesser</h1>
      <input type="text" value={name} onChange={e => setName(e.target.value)} />
      <button onClick={() => {
        ageGuess({
          type: SET,
          payload: name,
        })
      }}>Guess Age</button>
      <div>{console.log(ageGuesserState.age)}</div>
    </>
  );
}

export default AgeGuesser;

