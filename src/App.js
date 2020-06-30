import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, } from 'react-router-dom';
import Navigation from './Components/Navigation/Navigation';
import RandomList from './Screens/RandomList/RandomList';
import AgeGuesser from './Screens/AgeGuesser/AgeGuesser';
import PostDetail from './Screens/PostDetail/PostDetail';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: false,
      list: [],
    };
    this.downloadList = this.downloadList.bind(this);
    this.downloadPost = this.downloadPost.bind(this);
  };

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
  };
  
  downloadPost(id) {
		fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  		.then(response => response.json())
			.then(json => {
				this.setState({
          isLoading:false,
					list: [...this.state.list, json],
				})
			});
  };

  render() {
    return (
      <BrowserRouter>
        <Navigation />
        <Switch>
          <Route path="/age-guesser">
            <AgeGuesser />
          </Route>
          <Route path="/post/:id">
            <PostDetail isLoading={this.state.isLoading} list={this.state.list} downloadPost={this.downloadPost}/>
          </Route>
          <Route path="/">
            <RandomList isLoading={this.state.isLoading} list={this.state.list} downloadList={this.downloadList}/>
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
};

export default App;
