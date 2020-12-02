import React from 'react';

//Components
import OutputScreenRow from '../outputScreenRow/outputScreenRow.component';

//Used to hold 2 screen rows
const OutputScreen = ({ question, answer }) => {
  return (
    <div className="screen">
      <OutputScreenRow value={question} />
      <OutputScreenRow value={answer} />
    </div>
  );
};

export default OutputScreen;
