import React, { Component } from 'react';
import List from './Components/List/List';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        message: "No generated list",
        isDisabled: false
    }

    this.downloadList = this.downloadList.bind(this);
  }
 
  downloadList() {
      this.setState({ 
        message: <List />,
        isDisabled: true
      });
  }
 
  render() {
    return (
      <div>
        <div class="text-center">
          <button class={this.state.isDisabled ? 'disabled-button' : 'active-button'} onClick={this.downloadList}>Generate List</button>
        </div>
        <div class="simple-no-list-text">
            { this.state.message }
        </div>
      </div>
    );
  }
}

export default App;
