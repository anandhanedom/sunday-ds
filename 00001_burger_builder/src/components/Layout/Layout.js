import React from 'react';

import styles from './Layout.module.css';

import Aux from '../../hoc/Aux';

const Layout = (props) => (
  <Aux>
    <div>Toolbar, SideDrawer,Backdrop</div>
    <main className={styles.Content}>{props.children}</main>
  </Aux>
);

export default Layout;
