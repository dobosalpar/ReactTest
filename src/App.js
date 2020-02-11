import React, { Component } from 'react';
import CountPresenter from './Components/CountPresenter/CountPresenter';

class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    }

    // To avoid unnecessary renders, this has to be bound to the scope of the parent (App) component
    this.increaseCount = this.increaseCount.bind(this);
  }

  increaseCount() {
    // The state shoud be never mutated, a new instance of state the has to be set by using the setState function. 
    this.setState({
      count: this.state.count + 1,
    });
  }

  render() {
    return (
      // The whole UI had to be embeded into a fragment since we are returning multiple elements at the same DOM level. https://reactjs.org/docs/react-api.html#reactfragment
      <>
        {/* Add increaseCount as the click event handler for the button  */}
        <button onClick={this.increaseCount}>
          Increase count
        </button>
        {/* State had to be passed as a prop to the CountPresenter component  */}
        <CountPresenter count={this.state.count} />
      </>
    );
  }
}

export default App;
