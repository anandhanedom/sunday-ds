import React from 'react';

//Components
import OutputScreen from '../outputScreen/outputScreen.component';
import ButtonComponent from '../button/button.component';

import styles from './calculatorStyles.module.css';

const Calculator = () => {
  return (
    <div className={styles.app}>
      <OutputScreen />
      <div className={styles.row}>
        <ButtonComponent label="C" color="primary" />
        <ButtonComponent label="D" color="primary" />
        <ButtonComponent label="." color="primary" />
        <ButtonComponent label="/" color="primary" />
      </div>
      <div className={styles.row}>
        <ButtonComponent label="7" />
        <ButtonComponent label="8" />
        <ButtonComponent label="9" />
        <ButtonComponent label="x" color="primary" />
      </div>
      <div className={styles.row}>
        <ButtonComponent label="4" />
        <ButtonComponent label="5" />
        <ButtonComponent label="6" />
        <ButtonComponent label="-" color="primary" />
      </div>
      <div className={styles.row}>
        <ButtonComponent label="1" />
        <ButtonComponent label="2" />
        <ButtonComponent label="3" />
        <ButtonComponent label="+" color="primary" />
      </div>
      <div className={styles.row}>
        <ButtonComponent label="0" />
        <ButtonComponent label="=" color="primary" />
      </div>
    </div>
  );
};

export default Calculator;
