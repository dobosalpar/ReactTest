import React, { useState, useCallback } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Navigation from './Components/Navigation/Navigation';
import RandomList from './Screens/RandomList/RandomList';
import AgeGuesser from './Screens/AgeGuesser/AgeGuesser';
import PostDetail from './Screens/PostDetail/PostDetail';
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [list, setList] = useState([]);
  
  const downloadList = useCallback(() => {
    setIsLoading(true);
    fetch('https://jsonplaceholder.typicode.com/posts')
  	.then(response => response.json())
	  .then(json => {
      setIsLoading(false);
      setList(json);
    });
  }, []); 

  const downloadListById = useCallback((id) => {
    setIsLoading(true);
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  	.then(response => response.json())
	  .then(json => {
      setIsLoading(false);
      setList([...list, json]);
    })
  }, [list]);

  return (
    <BrowserRouter>
      <Navigation />
      <Route exact path="/" render={() => <RandomList isLoading={isLoading} list={list} downloadList={downloadList} />} />
      <Route path="/age-guesser" component={AgeGuesser} />
      <Route path="/post/:id" render={() => <PostDetail isLoading={isLoading} list={list} downloadListById={downloadListById} />} />
    </BrowserRouter>
  );
}

export default App;
