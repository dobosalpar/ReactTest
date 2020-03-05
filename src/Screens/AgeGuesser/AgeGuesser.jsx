import React, { Component } from 'react';

class AgeGuesser extends Component {
  constructor() {
    super();
    this.state = {
      name: ''
    };
    this.guessAge = this.guessAge.bind(this);
  }

  guessAge() {
    const name = 'Alpar';
    fetch(`https://api.agify.io?name=${name}`)
      .then(response => response.json())
      .then(json => {
        console.log(json);
      });
  }

  render() {
    return (
      <>
        <h1>Age Guesser</h1>
        <button onClick={this.guessAge}>Guess Age</button>
      </>
    );
  }
}

export default AgeGuesser;

