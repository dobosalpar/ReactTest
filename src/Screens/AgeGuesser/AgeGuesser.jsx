import React, { useCallback, useContext } from 'react';
import { AgeGuesserContext } from '../../App';
import { GUESS, ISLOADING, NAME } from '../../Redux/ActionTypes';

const AgeGuesser = () => {
  const {stateAgeGuesser, dispatchAgeGuesser} = useContext(AgeGuesserContext);

  const handleNameChange = (e)  =>
    dispatchAgeGuesser({ 
      type: NAME,
      payload: e.target.value,
    })

  const guessAge = useCallback(() => {
    dispatchAgeGuesser({type: ISLOADING, payload:true})
    fetch(`https://api.agify.io?name=${stateAgeGuesser.name}`)
      .then(response => response.json())
      .then(json => 
        dispatchAgeGuesser({type: GUESS, payload:json})
      );
      dispatchAgeGuesser({type: ISLOADING, payload:false})
  }, [dispatchAgeGuesser,stateAgeGuesser.name]);

  return (
    <>
      <h1>Age Guesser</h1>
      <input type="text" value={stateAgeGuesser.name} onChange={handleNameChange} />
      <button onClick={guessAge}>Guess Age</button>
      <div>{stateAgeGuesser.age}</div>
    </>
  );
};

export default AgeGuesser;