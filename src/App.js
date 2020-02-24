import React, { Component } from 'react';
import List from './Components/List/List';

class App extends Component {
  constructor() {
    super();
    this.downloadList = this.downloadList.bind(this);
    this.handleListChange = this.handleListChange.bind(this);
    this.state = {
      isLoadingValue: false,
    };
  }

  downloadList() {
    this.setState({
      isLoadingValue: !this.state.isLoadingValue,
    });
    this.downloadButtonRef.disabled = true;
  }

  handleListChange() {
    this.downloadButtonRef.disabled = false;
  }

  render() {
    return (
      <>
        <button ref={element => {this.downloadButtonRef = element;}} onClick={this.downloadList}>
          Download list
        </button>
        <List onListChange={this.handleListChange} isLoading={this.state.isLoadingValue}/>
      </>
    );
  }
}

export default App;
