import React from 'react';

//Material Ui
import Button from '@material-ui/core/Button';

const ButtonComponent = ({ color, label, handleClick, children }) => {
  let button = null;

  switch (color) {
    case 'primary':
      button = (
        <Button
          size="large"
          variant="contained"
          color="primary"
          disableElevation
          style={{ fontSize: '30px', borderRadius: '50%', margin: '10px' }}
          onClick={() => {
            handleClick(children);
          }}
        >
          {children}
        </Button>
      );
      break;

    case 'secondary':
      button = (
        <Button
          size="large"
          variant="contained"
          color="secondary"
          disableElevation
          style={{ fontSize: '30px', borderRadius: '50%', margin: '10px' }}
          onClick={() => {
            handleClick(children);
          }}
        >
          {children}
        </Button>
      );
      break;

    default:
      button = (
        <Button
          size="large"
          variant="contained"
          disableElevation
          style={{
            fontSize: '30px',
            borderRadius: '50%',
            margin: '10px',
            background: '#283637',
            color: '#fff',
          }}
          onClick={() => {
            handleClick(children);
          }}
        >
          {children}
        </Button>
      );
  }

  return button;
};

export default ButtonComponent;
