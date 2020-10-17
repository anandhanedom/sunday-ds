import React, { PureComponent } from 'react';
import Person from './Person/Person';

class Persons extends PureComponent {
  // static getDerivedStateFromProps = (props, state) => {
  //   console.log('[Persons.js] getDerivedStateFromProps');
  //   return state;
  // };

  // componentWillReceiveProps = (props) => {
  //   console.log('[Persons.js] componentWillReceiveProps', props);
  // };

  // shouldComponentUpdate = (nextProps, nextState) => {
  //   console.log('[Persons.js] shouldComponentUpdate');

  //   if (nextProps.persons !== this.props.persons) return true;
  //   else return false;
  // };

  getSnapshotBeforeUpdate = (prevProps, prevState) => {
    console.log('[Persons.js] getSnapShotBeforeUpdate');
    return { message: 'Snapshot!' };
  };

  componentDidUpdate = (orevProps, prevState, snapshot) => {
    console.log('[Persons.js] componentDidUpdate');
    console.log(snapshot);
  };

  componentWillUnmount = () => {
    console.log('[Persons.js] componentWillUnmount');
  };

  render() {
    return this.props.persons.map((person, index) => (
      <Person
        key={index}
        name={person.name}
        age={person.age}
        click={() => this.props.clicked(index)}
        changed={(e) => this.props.changed(e, person.id)}
      />
    ));
  }
}

export default Persons;
