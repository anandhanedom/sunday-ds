import React from 'react';

const Validation = (props) => {
  let message = 'Text too long enough';

  if (props.userInput.length < 6) {
    message = 'Text too short';
  }

  return <p>{message}</p>;
};

export default Validation;
