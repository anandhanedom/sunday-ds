import React, { Component } from 'react';
import axios from 'axios';

class PersonInput extends Component {
  state = {
    name: '',
  };

  handleChange = (e) => {
    this.setState({ name: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const user = { name: this.state.name };

    axios
      .post('https://jsonplaceholder.typicode.com/users', user)
      .then((res) => {
        console.log(res);
        console.log(res.data);
      });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Person name:
          <input type="text" name="name" onChange={this.handleChange} />
        </label>
        <button type="submit">Add user</button>
      </form>
    );
  }
}

export default PersonInput;
