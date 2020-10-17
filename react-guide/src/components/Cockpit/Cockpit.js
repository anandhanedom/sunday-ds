import React, { useEffect } from 'react';

import './Cockpit.css';

const Cockpit = (props) => {
  //UseEffect HOOC
  useEffect(() => {
    console.log('[Cockpit.js] useEffect');

    //Http req 
    setTimeout(() => {
      alert('Saved data to cloud');
    }, 1000);
    return () => {
      console.log('[Cockpit.js] cleanup work in useEffect');
    };
  }, []);

  //useEffect as many as you want

  useEffect(() => {
    console.log('[Cockpit.js] 2nd useEffect');

    return () => {
      console.log('[Cockpit.js] cleanup work in 2nd useEffect');
    };
  });

  const style = {
    backgroundColor: 'green',
    color: 'white',
    font: 'inherit',
    border: '1px solid blue',
    padding: '8px',
    cursor: 'pointer',
  };

  const classes = [];

  if (props.showPersons) {
    style.backgroundColor = 'red';
  }

  if (props.personsLength <= 2) {
    classes.push('red');
  }

  if (props.personsLength <= 1) {
    classes.push('bold');
  }

  return (
    <div className="Cockpit">
      <h1>{props.title}</h1>
      <p className={classes.join(' ')}>This is really working!</p>
      <button style={style} onClick={props.click}>
        Toggle Persons
      </button>
    </div>
  );
};

export default React.memo(Cockpit);
