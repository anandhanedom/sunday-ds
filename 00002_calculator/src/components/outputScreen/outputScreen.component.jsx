import React from 'react';

//Components
import OutputScreenRow from '../outputScreenRow/outputScreenRow.component';

//Used to hold 2 screen rows
const OutputScreen = ({ question }) => {
  return (
    <div className="screen">
      <OutputScreenRow question={question} />
      <OutputScreenRow />
    </div>
  );
};

export default OutputScreen;
