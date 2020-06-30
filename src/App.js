import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Navigation from './Components/Navigation/Navigation';
import RandomList from './Screens/RandomList/RandomList';
import AgeGuesser from './Screens/AgeGuesser/AgeGuesser';
import PostDetail from './Screens/PostDetail/PostDetail';
import './App.css';

// PATH to download post by ID:
// https://jsonplaceholder.typicode.com/posts/1

class App extends Component {
  constructor() {
    super();
    // This is called moving the state up. The List component's state was moved here, since both the button and List has to know about it.
    this.state = {
      isLoading: false,
      list: [],
    };
    this.downloadList = this.downloadList.bind(this);
    //this.downloadElementById = this.downloadElementById.bind(this);
  }

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
  
  /*downloadElementById(id) {
    this.setState({
        isLoading: true,
    })
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(response => response.json())
      .then(json => {
        this.setState({
          
          isLoading: false,
          list: json,
        })
      })
  }*/
  
  render() {
    return (
      <BrowserRouter>
        <Navigation />
        <Route exact path="/" render={() => <RandomList isLoading={this.state.isLoading} list={this.state.list} downloadList={this.downloadList} />} />
        <Route path="/age-guesser" component={AgeGuesser}/>
        <Route exact path="/post/:id" render={() => <PostDetail isLoading={this.state.isLoading} list={this.state.list} downloadElementById={this.downloadList} />} />
      </BrowserRouter>
    );
  }
}

export default App;
