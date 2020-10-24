import React from 'react';

import styles from './Burger.module.css';

import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const Burger = (props) => {
  const transformedIngredients = Object.keys(props.ingredients).map(
    (ingredient) => {
      return [...Array(props.ingredients[ingredient])].map((_, i) => (
        <BurgerIngredient key={ingredient + i} type={ingredient} />
      ));
    }
  );

  console.log(transformedIngredients);
  return (
    <div className={styles.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default Burger;
