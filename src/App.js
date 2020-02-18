import React, { Component } from 'react';
import List from './Components/List/List';

class App extends Component {
  constructor() {
    super();
    this.downloadList = this.downloadList.bind(this);
  }

  downloadList() {
    
  }

  render() {
    return (
      <>
        <button onClick={this.downloadList}>
          Download list
        </button>
        <List />
      </>
    );
  }
}

export default App;
