import React, { Component } from 'react';
import CountPresenter from './Components/CountPresenter/CountPresenter';

class App extends Component {
  constructor() {
    super();
    this.test = {date: new Date()};
    this.state = {count: 0};
    this.onClickButton = this.onClickButton.bind(this);
  }

  /*increaseCount() {
    this.state.count = this.state.count + 1;
  }*/

  //onClickButton = () => {   //   This works, but this is an experimental solution. It is advised to bind the method in the constructor.
  onClickButton() {
    this.setState(({ count }) => ({
      count: count + 1
    }));
  };

  // method names are starting with a small case

  ////The state has to be passed as props to the CountPresenter component. I know it wasn't made clear in the description :|
  render() {
    return (
      <div>
         <button onClick={this.onClickButton}>
          Increase count
        </button>
     
        <CountPresenter count={this.state.count} />
        <div>
          <h1>Just test</h1>
          <h2>It is {this.test.date.toLocaleTimeString()}.</h2>
        </div>
      </div>
    );
  }
}

export default App;
