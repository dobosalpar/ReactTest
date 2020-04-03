import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Navigation from './Components/Navigation/Navigation';
import RandomList from './Screens/RandomList/RandomList';
import AgeGuesser from './Screens/AgeGuesser/AgeGuesser';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navigation />
        <Route exact path="/" component={RandomList} />
        <Route path="/age-guesser" component={AgeGuesser} />
      </BrowserRouter>
    );
  }
}

export default App;
