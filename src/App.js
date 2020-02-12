import React, { Component } from 'react';
import CountPresenter from './Components/CountPresenter/CountPresenter';

class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    }
    // Increase count function is bound to the the scope of the App to avoid extra renders, and to use the propter this when called. 
    this.increaseCount = this.increaseCount.bind(this);
  }

  increaseCount() {
    // State should be never mutated. state updates are asyncrounous, callback function needs to be used, to make sure that we are updating the proper state
    this.setState(({ count }) => ({
      count: count +1,
    }))

  }

  render() {
    return (
      // We cannot return multiple elements at the same level. To avoid extra divs in the 'real' DOM, we have to embed them into fragments.
      <>
        {/* Button receives the increaseCount as a click event handler */}
        <button onClick={this.increaseCount}>
          Increase count
        </button>
        {/* The state is passed as prop to the CountPresenter component */}
        <CountPresenter count={this.state.count} />
      </>
    );
  }
}

export default App;
