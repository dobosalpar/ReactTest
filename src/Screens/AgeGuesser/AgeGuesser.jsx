import React, { Component } from 'react';

class AgeGuesser extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      isLoading: false,
      age: '',
    };
    this.guessAge = this.guessAge.bind(this);
    this.nameChange = this.nameChange.bind(this);
  }

  nameChange(event) {
    this.setState({name: event.target.value});
  }

  guessAge() {
    this.setState ({ 
     isLoading : true
    })
    const name = this.state.name;
    fetch(`https://api.agify.io?name=${name}`)
      .then(response => response.json())
      .then(json => {
        this.setState({
          isLoading:false,
          age: json.age,
        })  
      });
  }

  render() {
    return (
      <>
        <h1>Age Guesser</h1>
        <form>
          <label>
            Input your name :
            <input type="text" 
              value={this.state.value}
              onChange={this.nameChange} />
          </label>
        </form>
        <button onClick={this.guessAge} 
          disabled={this.state.name === '' || this.state.isLoading}>
          Guess Age
        </button>
        <br/>
        {this.state.age && (
          <div>
            Your age is : {this.state.age}
          </div>
        )}
      </>
    );
  }
}

export default AgeGuesser;

