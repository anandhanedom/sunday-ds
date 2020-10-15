import React from 'react';

const Person = ({ name, age, children, click }) => {
  return (
    <div>
      <p onClick={click}>
        I'm {name} and I'm {age} years old!
      </p>
      <p>{children}</p>
    </div>
  );
};

export default Person;
