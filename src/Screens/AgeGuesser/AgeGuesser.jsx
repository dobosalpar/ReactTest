import React, { Component } from 'react';

class AgeGuesser extends Component {
  constructor() {
    super();
    this.state = {
      name:"",
      age:"",
      isLoading: false,

    };
    this.guessAge = this.guessAge.bind(this);
    this.setName = this.setName.bind(this);
  }

  setName(text) {
    this.setState({
      name: text,
    });
  };

  guessAge() {
    const name = this.state.name;
    this.setState({
      isLoading: true
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
        <button onClick={this.guessAge} disabled={this.state.isLoading || !this.state.name}>Guess Age</button>
        <input type="text" value={this.state.name} onChange={e => this.setName(e.target.value)} /> 
        <h1>{this.state.age}</h1>
      </>
    );
  }
}

export default AgeGuesser;

