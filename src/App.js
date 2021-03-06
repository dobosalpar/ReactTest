import React, { useState, useCallback, createContext, useReducer } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Navigation from './Components/Navigation/Navigation';
import RandomList from './Screens/RandomList/RandomList';
import AgeGuesser from './Screens/AgeGuesser/AgeGuesser';
import PostDetail from './Screens/PostDetail/PostDetail';
import Context from './Screens/Context/Context';
import Calculator from './Screens/Calculator/Calculator';
import { initialState, reducer } from './Redux/Reducer';
import './App.css';

export const TodoContext = createContext();
export const CalculatorContext = createContext();

const App = () => {
  const [isLoading, setIsloading] = useState(false);
  const [list, setList] = useState([]);

  const [state, dispatch] = useReducer(reducer, initialState);

  // useCallback
  const downloadList = useCallback(() => {
    setIsloading(true);
		fetch('https://jsonplaceholder.typicode.com/posts')
  	.then(response => response.json())
	  .then(json => {
      setIsloading(false);
      setList(json);
		});
  }, []);

  // useCallback
  const downloadListById = useCallback((id) => {
    setIsloading(true);
		fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  	.then(response => response.json())
	  .then(json => {
      setIsloading(false);
      setList([...list, json]);
		});
  }, [list]);

  const [todoList, setTodoList] = useState([]);

  return (
    <BrowserRouter>
      <TodoContext.Provider value={{ todoList, setTodoList }}>
      <CalculatorContext.Provider value={{ state, dispatch }}>
        <Navigation />
        <Route exact path="/" render={() => <RandomList isLoading={isLoading} list={list} downloadList={downloadList} />} />
        <Route path="/age-guesser" component={AgeGuesser} />
        <Route path="/post/:id" render={() => <PostDetail isLoading={isLoading} list={list} downloadListById={downloadListById} />} />
        <Route path="/context" component={Context} />
        <Route path="/calculator" component={Calculator} />
      </CalculatorContext.Provider>
      </TodoContext.Provider>
    </BrowserRouter>
  );
}

export default App;
