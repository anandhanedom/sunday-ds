import React from 'react';

//Used to show question/answer
 
 
const OutputScreenRow = ({ value, answer }) => {
  let res;
  if (answer) {
    res = (
      <input
        type="text"
        value={value}
        readOnly
        style={{
          minHeight: '30px',
          width: '96%',
          background: '#283637',
          outline: 'none',
          color: '#fff',
          fontSize: '50px',
          border: ' 0px',
          textAlign: 'right',
        }}
      />
    );
  } else {
    res = (
      <input
        type="text"
        value={value}
        readOnly
        style={{
          minHeight: '30px',
          width: '96%',
          background: '#283637',
          outline: 'none',
          color: '#fff',
          fontSize: '20px',
          border: ' 0px',
          textAlign: 'right',
        }}
      />
    );
  }
  return <div className="screen-row">{res}</div>;
 
};

export default OutputScreenRow;
