import React, { Component } from 'react';
import List from './Components/List/List';

class App extends Component {
  constructor() {
    super();
    this.downloadList = this.downloadList.bind(this);
    this.downloadCompleted = this.downloadCompleted.bind(this)
   
    this.state = {
      isLoading: false,
    };
  }

  downloadList() {
    this.setState({
      isLoading: true,
    });
  }

  downloadCompleted() {
    this.setState({
      isLoading: false,
    });
  }

  render() {
    return (
      <>
        <button onClick={this.downloadList} disabled={this.state.isLoading}>
          Download list
        </button>
        <List isLoading={this.state.isLoading} downloadComplete={this.downloadCompleted}/>
      </>
    );
  }
}

export default App;
