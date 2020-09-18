import React, { Component } from 'react';

class AgeGuesser extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      isLoading: false,
      age: null
    };
    this.guessAge = this.guessAge.bind(this);
    this.nameChanged = this.nameChanged.bind(this);
  }

  nameChanged(nameInput) {
    this.setState({
      name: nameInput
    })
  }

  guessAge() {
    const name = this.state.name;
    this.setState({
			isLoading: true,
		})
    fetch(`https://api.agify.io?name=${name}`)
      .then(response => response.json())
      .then(json => {
        this.setState({
          age: json.age,
          isLoading: false
        })
      });
  }

  render() {
    const { isLoading, name, age } = this.state;
    return (
      <>
        <h1>Age Guesser</h1>
        <input type='text' value={this.state.name} onChange={e => this.nameChanged(e.target.value)}></input>
        <button onClick={this.guessAge} disabled={isLoading || !name}>Guess Age</button>
        <div>{age}</div>
      </>
    );
  }
}

export default AgeGuesser;

