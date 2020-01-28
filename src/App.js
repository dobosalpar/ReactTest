import React, { Component } from 'react';
import CountPresenter from './Components/CountPresenter/CountPresenter';

class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    }
  }

  increaseCount() {
    this.state.count = this.state.count + 1;
  }

  render() {
    return (
      <button>
        Increase count
      </button>
      <CountPresenter />
    );
  }
}

export default App;
