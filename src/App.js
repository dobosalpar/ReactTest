import React, { Component } from 'react';
import List from './Components/List/List';

class App extends Component {
  constructor() {
    super();
    this.downloadList = this.downloadList.bind(this);
    this.state = {
      isDownloading: false,
      list: [],
    };
  }

  downloadList() {
    this.setState({
			isDownloading: true,
		})
		fetch('https://jsonplaceholder.typicode.com/posts')
  			.then(response => response.json())
		  	.then(json => {
				  this.setState({
					  isDownloading: false,
					  list: json,
				  })
			});
  }

  render() {
    const isDownloading = this.state.isDownloading
    const list = this.state.list
    return (
      <div>
        <button onClick={this.downloadList} disabled={isDownloading}>
          Download list
        </button>
        <List isDownloading={isDownloading} list={list} />
      </div>
    );
  }
}

export default App;
