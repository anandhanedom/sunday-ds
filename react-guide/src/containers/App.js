import React, { Component } from 'react';
import './App.css';

import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

import withClass from '../hoc/withClass';
import Aux from '../hoc/Aux';

class App extends Component {
  constructor(props) {
    super(props);
    console.log('[App.js] constructor');

    this.state = {
      persons: [
        { id: 1, name: 'Max', age: 28 },
        { id: 2, name: 'Manu', age: 29 },
        { id: 3, name: 'Stephanie', age: 26 },
      ],
      otherState: 'some other value',
      showPersons: false,
      showCockpit: true,
      changedCounter: 0,
    };
  }

  static getDerivedStateFromProps = (props, state) => {
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  };

  componentDidMount = () => {
    console.log('[App.js] componentDidMount');
  };

  componentDidUpdate = () => {
    console.log('[App.js] componentDidUpdate');
  };

  shouldComponentUpdate = (nextProps, nextState) => {
    console.log('[App.js] shouldComponentUpdate');
    return true;
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(
      (person) => person.id === id
    );

    const person = { ...this.state.persons[personIndex] };

    person.name = event.target.value;

    const persons = [...this.state.persons];

    persons[personIndex] = person;

    this.setState((prevState, props) => {
      return {
        persons: persons,
        changedCounter: prevState.changedCounter + 1,
      };
    });
  };

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();

    const persons = [...this.state.persons];

    persons.splice(personIndex, 1);

    this.setState({ persons: persons });
  };

  togglePersonsHandler = () => {
    this.setState({ showPersons: !this.state.showPersons });
  };

  render() {
    console.log('[App.js] Render');

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
        />
      );
    }

    return (
      <Aux>
        <button
          onClick={() => {
            this.setState({ showCockpit: false });
          }}
        >
          Remove Cockpit
        </button>
        {this.state.showCockpit ? (
          <Cockpit
            title={this.props.appTitle}
            personsLength={this.state.persons.length}
            showPersons={this.state.showPersons}
            click={this.togglePersonsHandler}
          />
        ) : null}

        {persons}
      </Aux>
    );
  }
}

export default withClass(App, App);
