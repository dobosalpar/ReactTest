import React, { Component } from 'react';

class AgeGuesser extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      isLoading: false,
      guessedAge: ''
    };
    this.guessAge = this.guessAge.bind(this);
    this.handleChange = this.handleChange.bind(this)
  }

  guessAge() {
    this.setState({
      isLoading: true
    })
    fetch(`https://api.agify.io?name=${this.state.name}`)
      .then(response => response.json())
      .then(json => {
        this.setState({
          isLoading: false,
          guessedAge: json.age
        })
      });
  }

  handleChange (e) {
    this.setState({
      name: e.target.value,
      guessedAge: ""
    });
  }

  render() {
    return (
      <>
        <h1>Age Guesser</h1>
        <input onChange={this.handleChange}/>
        <br/>
        <button onClick={this.guessAge} disabled={this.state.name === '' || this.state.isLoading}>Guess Age</button>
        <br/>
        {this.state.guessedAge && <label>Guessed age for {this.state.name} is {this.state.guessedAge}</label>}
      </>
    );
  }
}

export default AgeGuesser;

