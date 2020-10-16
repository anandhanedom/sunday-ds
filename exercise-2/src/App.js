import React, { Component } from 'react';
import './App.css';

//Components
import Validation from './components/validation/validation.component.jsx';
import Char from './components/char/char.component.jsx';

class App extends Component {
  state = {
    userInput: '',
  };

  inputChangedHandler = (e) => {
    this.setState({ userInput: e.target.value });
  };

  deleteCharHandler = (index) => {
    const text = this.state.userInput.split('');
    text.splice(index, 1);

    const updatedText = text.join('');
    this.setState({ userInput: updatedText });
  };

  render() {
    let characters = this.state.userInput
      .split('')
      .map((ch, i) => (
        <Char
          key={i}
          character={ch}
          clicked={() => this.deleteCharHandler(i)}
        />
      ));

    return (
      <div className="App">
        <input
          type="text"
          onChange={this.inputChangedHandler}
          value={this.state.userInput}
        />
        <p>{this.state.userInput}</p>
        <Validation userInput={this.state.userInput} />
        {characters}
      </div>
    );
  }
}

export default App;
