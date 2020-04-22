import React, { Component } from 'react';

class AgeGuesser extends Component {
  constructor() {
    super();
    // useState
    this.state = {
      name: '',
      age: null,
      isLoading: false,
    };
    this.guessAge = this.guessAge.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
  }

  // useCallback
  handleNameChange(text) {
    this.setState({
      name: text,
    })
  }

  // useCallback
  guessAge() {
    const name = this.state.name;
    this.setState({
      isLoading: true,
    });
    fetch(`https://api.agify.io?name=${name}`)
      .then(response => response.json())
      .then(json => {
        this.setState({
          age: json.age,
          isLoading: false,
        });
      });
  }

  render() {
    return (
      <>
        <h1>Age Guesser</h1>
        <input type="text" value={this.state.name} onChange={e => this.handleNameChange(e.target.value)} />
        <button onClick={this.guessAge} disabled={this.state.isLoading || !this.state.name}>Guess Age</button>
        <div>{this.state.age}</div>
      </>
    );
  }
}

export default AgeGuesser;

