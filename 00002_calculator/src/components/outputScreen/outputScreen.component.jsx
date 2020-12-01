import React from 'react';

//Components
import OutputScreenRow from '../outputScreenRow/outputScreenRow.component';

//Used to hold 2 screen rows
const OutputScreen = () => {
  return (
    <div className="screen">
      <OutputScreenRow />
      <OutputScreenRow />
    </div>
  );
};

export default OutputScreen;
