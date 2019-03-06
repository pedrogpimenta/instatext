import React, { Component } from 'react';
import styles from './index.module.css';

import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

class SideMenu extends Component {
  state = {
    left: false,
  };

  render () {
    const {
      open,
      toggleSideMenu,
      handleDeleteAll
    } = this.props;

    const sideList = (
      <div className={styles.list}>
        <List component='nav'>
          <ListItem button component='a' href="#about">
            <ListItemText primary="About" />
          </ListItem>
          <ListItem button onClick={handleDeleteAll}>
            <ListItemText primary="Delete all content" />
          </ListItem>
        </List>
      </div>
      );

    return (
      <div className={styles.sideMenu}>
        <SwipeableDrawer
          open={open}
          onClose={toggleSideMenu}
          onOpen={toggleSideMenu}
        >
          <div
            tabIndex={0}
            role="button"
            onClick={toggleSideMenu}
            onKeyDown={toggleSideMenu}
          >
            {sideList}
          </div>
        </SwipeableDrawer>
      </div>
    ) 
  }
}

export default SideMenu;
