import React, { useState, useCallback, useContext } from "react"
import { AgeGuesserContext } from "../../App";
import { SET } from '../../Redux/ActionTypes';
const AgeGuesser = () => {

  const { stateAgeGuesser, dispatchAgeGusser } = useContext(AgeGuesserContext);
  const [name, setName] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const guessAge = useCallback(() => {
    setIsLoading(true)
    fetch(`https://api.agify.io?name=${name}`)
      .then(response => response.json())
      .then(json => dispatchAgeGusser({type: SET, payload: json}));
      setIsLoading(false)
    }, [dispatchAgeGusser, name]);

  return (

    <>
      <h1>AgeGuesser</h1>
      <input type="text" value={name} onChange={e => setName(e.target.value)} />
      <button onClick={guessAge} disabled={isLoading || !name }>Guess Name</button> 
      <div>{stateAgeGuesser.age}</div>
    </>
  );
};

export default AgeGuesser;