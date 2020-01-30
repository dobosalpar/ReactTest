import React, { Component } from 'react';
import CountPresenter from './Components/CountPresenter/CountPresenter';

class App extends Component {
  constructor() {
    super();
    this.test = {date: new Date()};
    this.state = {count: 0};
  }

  increaseCount() {
    this.state.count = this.state.count + 1;
  }

  OnClickButton = () => {
    this.setState(({ count }) => ({
      count: count + 1
    }));
  };

  render() {
    return (
      <div>
         <button onClick={this.OnClickButton}>
        Increase count
      </button>

      {this.state.count}
   <CountPresenter></CountPresenter>
      <div>
        <h1>Just test</h1>
        <h2>It is {this.test.date.toLocaleTimeString()}.</h2>
      </div>
      </div>
    );
  }
}

export default App;
