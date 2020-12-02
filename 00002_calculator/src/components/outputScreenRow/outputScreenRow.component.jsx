import React from 'react';

//Used to show question/answer
const OutputScreenRow = ({ value }) => {
  return (
    <div className="screen-row">
      <input type="text" value={value} readOnly />
    </div>
  );
};

export default OutputScreenRow;
