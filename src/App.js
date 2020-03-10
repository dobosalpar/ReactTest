import React, { Component } from 'react';
import List from './Components/List/List';

class App extends Component {
  constructor() {
    super();
    this.downloadList = this.downloadList.bind(this);
   
    this.state = {
      isLoading: false,
      list: []
    };
  }

  downloadList() {
    this.setState({
      isLoading: true,
    });
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => {
        this.setState({
            isLoading: false,
            list: json,
        })
      });
  }

  render() {
    return (
      <>
        <button onClick={this.downloadList} disabled={this.state.isLoading}>
          Download list
        </button>
        <List isLoading={this.state.isLoading} list={this.state.list}/>
      </>
    );
  }
}

export default App;
