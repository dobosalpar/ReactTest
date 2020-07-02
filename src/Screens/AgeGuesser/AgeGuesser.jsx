import React, { useState, useCallback } from 'react';

function AgeGuesser(){

  const [name, setName] = useState('');
  const [age, setAge] = useState(null); 
  const [isLoading, setIsLoading] = useState(false);

  const handleNameChange = useCallback((text) => {
    setName(text)
  }, []);

  const guessAge = useCallback(() => {
    setIsLoading(true);
  
    fetch(`https://api.agify.io?name=${name}`)
      .then(response => response.json())
      .then(json => {
        setIsLoading(false);
        setAge(json.age);
    });
  }, [name]); 

  return (
    <>
      <h1>Age Guesser</h1>
      <input type="text" value={name} onChange={e => handleNameChange(e.target.value)} />
      <button onClick={guessAge} disabled={isLoading || !name}>Guess Age</button>
      <div>{age}</div>
    </>
  );
};

export default AgeGuesser;

