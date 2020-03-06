import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navigation from './Components/Navigation/Navigation';
import RandomList from './Screens/RandomList/RandomList';
import AgeGuesser from './Screens/AgeGuesser/AgeGuesser';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navigation />
          <Switch>
            <Route path="/age-guesser">
              <AgeGuesser />
            </Route>
            <Route path="/">
              <RandomList />
            </Route>
          </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
