import React, { useCallback, useContext } from "react"
import { AgeGuesserContext } from "../../App";
import { SET, LOADING, NAME } from '../../Redux/ActionTypes';
import { ageGuesserReducer } from "../../Redux/AgeGuesserReducer";
const AgeGuesser = () => {

  const { stateAgeGuesser, dispatchAgeGusser } = useContext(AgeGuesserContext);
 
  const handleNameChange = (e) => {
    dispatchAgeGusser({
      type: NAME,
      payload: e.target.value,
    });
  };

  const guessAge = useCallback(() => {
   
    dispatchAgeGusser({type: LOADING, payload: true});
    fetch(`https://api.agify.io?name=${stateAgeGuesser.name}`)
      .then(response => response.json())
      .then(json => dispatchAgeGusser(
        {type: SET, 
        payload: json}
      ));
      dispatchAgeGusser({type: LOADING, payload: false});
    }, [dispatchAgeGusser, stateAgeGuesser.name]);
  return (
    <>
      <h1>AgeGuesser</h1>
      <input type="text" value={stateAgeGuesser.name} onChange={handleNameChange} />
      <button onClick={guessAge} disabled={stateAgeGuesser.isLoading || !ageGuesserReducer.name}>Guess Name</button> 
      <div>{stateAgeGuesser.age}</div>
    </>
  );
};

export default AgeGuesser;
