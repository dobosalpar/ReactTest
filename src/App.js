import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Navigation from './Components/Navigation/Navigation';
import RandomList from './Screens/RandomList/RandomList';
import AgeGuesser from './Screens/AgeGuesser/AgeGuesser';
import PostDetail from './Screens/PostDetail/PostDetail';
import './App.css';

class App extends Component {
  constructor() {
    super();
    // useState
    this.state = {
      isLoading: false,
      list: [],
    };
    this.downloadList = this.downloadList.bind(this);
    this.downloadListById = this.downloadListById.bind(this);
  }

  // useCallback
  downloadList() {
    this.setState({
			isLoading: true,
    })
		fetch('https://jsonplaceholder.typicode.com/posts')
  	.then(response => response.json())
	  .then(json => {
		  this.setState({
				isLoading: false,
				list: json,
			})
		});
  }

  // useCallback
  downloadListById(id) {
    this.setState({
			isLoading: true,
    })
		fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  	.then(response => response.json())
	  .then(json => {
		  this.setState({
				isLoading: false,
				list: [...this.state.list, json],
			})
		});
  }

  render() {
    return (
      <BrowserRouter>
        <Navigation />
        <Route exact path="/" render={() => <RandomList isLoading={this.state.isLoading} list={this.state.list} downloadList={this.downloadList} />} />
        <Route path="/age-guesser" component={AgeGuesser} />
        <Route path="/post/:id" render={() => <PostDetail isLoading={this.state.isLoading} list={this.state.list} downloadListById={this.downloadListById} />} />
      </BrowserRouter>
    );
  }
}

export default App;
