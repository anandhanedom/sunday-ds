import React from 'react';

//Material Ui
import Button from '@material-ui/core/Button';

const ButtonComponent = ({ color, label }) => {
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
        >
          {label}
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
        >
          {label}
        </Button>
      );
      break;

    default:
      button = (
        <Button
          size="large"
          variant="contained"
          disableElevation
          style={{ fontSize: '30px', borderRadius: '50%', margin: '10px' }}
        >
          {label}
        </Button>
      );
  }

  return button;
};

export default ButtonComponent;
