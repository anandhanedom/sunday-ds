import React from 'react';
import Person from './Person/Person';

const Persons = (props) => {
  console.log('[Persons.js] rendering...');
  return props.persons.map((person, index) => (
    <Person
      name={person.name}
      age={person.age}
      click={() => props.clicked(index)}
      changed={(e) => props.changed(e, person.id)}
    />
  ));
};

export default Persons;
