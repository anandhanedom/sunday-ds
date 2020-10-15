import React, { Component } from 'react';
import './App.css';

import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    username: 'Supermario',
  };

  inputChangedHandler = (e) => {
    this.setState({ username: e.target.value });
  };

  render() {
    return (
      <div className="App">
        <UserInput
          handleChange={this.inputChangedHandler}
          currentName={this.username}
        />
        <UserOutput userName={this.state.username} />
        <UserOutput userName={this.state.username} />
        <UserOutput userName="Max" />
      </div>
    );
  }
}

export default App;
