import React, { useState } from 'react';
import './App.css';

//Components
import Person from './components/person/person.component.jsx';

const App = () => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Stephen', age: 40 },
      { name: 'Mad', age: 12 },
    ],
    otherState: 'junk value',
  });

  const switchNameHandler = () => {
    setPersonsState({
      persons: [
        { name: 'Maximilian', age: 28 },
        { name: 'Stephen', age: 40 },
        { name: 'Mad', age: 12 },
      ],
      otherState: personsState.otherState,
    });
  };

  return (
    <div className="App">
      <h1>hi, I'm a React app</h1>
      <p>This is really working!</p>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person
        name={personsState.persons[0].name}
        age={personsState.persons[0].age}
      />
      <Person
        name={personsState.persons[1].name}
        age={personsState.persons[1].age}
        click={switchNameHandler}
      >
        My hobbies: Racing
      </Person>
      <Person
        name={personsState.persons[2].name}
        age={personsState.persons[2].age}
      />
    </div>
  );
};

export default App;
