import React, { Component } from 'react';
import List from './Components/List/List.jsx';

class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: false,
      list: [],
    };
    this.downloadList = this.downloadList.bind(this);
  }
   
  downloadList() {
    this.setState({ 
      isLoading: true 
    });
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response=> response.json())
      .then(json => {
        this.setState({
          isLoading: false,
          list: json,
        })
      });   
  }

  render() {
    const { isLoading, list } = this.state;
    return (
      <>
        <button onClick={this.downloadList} disabled={isLoading}>
          DownloadList
        </button>
        <List isLoading={isLoading} list={list} />
      </>
    )
  };
}
export default App;