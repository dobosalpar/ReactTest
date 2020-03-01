import React, { Component } from 'react';
import CountPresenter from './Components/CountPresenter/CountPresenter';

class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    }
    this.increaseCount = this.increaseCount.bind(this);
  }

  increaseCount() {
    this.setState((state) => ({
      count: state.count + 1
    }));
  }

  render() {
    return (
      <>
        <button onClick={this.increaseCount}>
          Increase count
        </button>
        <CountPresenter count={this.state.count}/>
       </>
    );
  }
}

export default App;
