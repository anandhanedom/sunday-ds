import React, { Component } from 'react';

//Components
import OutputScreen from '../outputScreen/outputScreen.component';
import ButtonComponent from '../button/button.component';

//Material Ui
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import styles from './calculatorStyles.module.css';

class Calculator extends Component {
  constructor() {
    super();
    this.state = {
      question: '',
      answer: '',
    };
  }

  handleClick = (val) => {
    console.log(val);
  };

  theme = createMuiTheme({
    palette: {
      primary: {
        // Purple and green play nicely together.
        main: '#fff',
        contrastText: '#279285',
      },
      secondary: {
        main: '#6c807e',
        contrastText: '#fff',
      },
    },
  });

  render() {
    return (
      <ThemeProvider theme={this.theme}>
        <div className={styles.calcapp}>
          <div className={styles.layout}>
            <OutputScreen />
            <div className={styles.row}>
              <ButtonComponent handleClick={this.handleClick} color="secondary">
                C
              </ButtonComponent>
              <ButtonComponent handleClick={this.handleClick} color="secondary">
                D
              </ButtonComponent>
              <ButtonComponent handleClick={this.handleClick} color="primary">
                %
              </ButtonComponent>
              <ButtonComponent handleClick={this.handleClick} color="primary">
                /
              </ButtonComponent>
            </div>
            <div className={styles.row}>
              <ButtonComponent handleClick={this.handleClick}>
                7
              </ButtonComponent>
              <ButtonComponent handleClick={this.handleClick}>
                8
              </ButtonComponent>
              <ButtonComponent handleClick={this.handleClick}>
                8
              </ButtonComponent>
              <ButtonComponent handleClick={this.handleClick} color="primary">
                X
              </ButtonComponent>
            </div>
            <div className={styles.row}>
              <ButtonComponent handleClick={this.handleClick}>
                4
              </ButtonComponent>
              <ButtonComponent handleClick={this.handleClick}>
                5
              </ButtonComponent>
              <ButtonComponent handleClick={this.handleClick}>
                6
              </ButtonComponent>
              <ButtonComponent handleClick={this.handleClick} color="primary">
                -
              </ButtonComponent>
            </div>
            <div className={styles.row}>
              <ButtonComponent handleClick={this.handleClick}>
                1
              </ButtonComponent>
              <ButtonComponent handleClick={this.handleClick}>
                2
              </ButtonComponent>
              <ButtonComponent handleClick={this.handleClick}>
                3
              </ButtonComponent>
              <ButtonComponent handleClick={this.handleClick} color="primary">
                +
              </ButtonComponent>
            </div>
            <div className={styles.row}>
              <ButtonComponent handleClick={this.handleClick} color="primary">
                S
              </ButtonComponent>
              <ButtonComponent handleClick={this.handleClick} color="primary">
                0
              </ButtonComponent>
              <ButtonComponent handleClick={this.handleClick} color="primary">
                .
              </ButtonComponent>
              <ButtonComponent handleClick={this.handleClick} color="primary">
                =
              </ButtonComponent>
            </div>
          </div>
        </div>
      </ThemeProvider>
    );
  }
}

export default Calculator;
