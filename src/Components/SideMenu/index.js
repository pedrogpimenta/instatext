import React, { Component } from 'react';
import { Link } from "react-router-dom";
import styles from './index.module.css';

import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import HomeIcon from '@material-ui/icons/Home';
import HelpIcon from '@material-ui/icons/Help';
import DeleteIcon from '@material-ui/icons/Delete';

class SideMenu extends Component {
  state = {
    left: false,
  };

  render () {
    const {
      open,
      toggleSideMenu,
      handleDeleteAllButton
    } = this.props;

    const sideList = (
      <div className={styles.list}>
        <List component='nav'>
          <ListItem button component={Link} to='/'>
            <ListItemIcon className={styles.listItem}>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary='Home' />
          </ListItem>
          <ListItem button component={Link} to='/about/'>
            <ListItemIcon className={styles.listItem}>
              <HelpIcon />
            </ListItemIcon>
            <ListItemText primary='About' />
          </ListItem>
          <Divider />
          <ListItem button onClick={handleDeleteAllButton}>
            <ListItemIcon className={styles.listItem}>
              <DeleteIcon />
            </ListItemIcon>
            <ListItemText primary='Delete all content' />
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
            role='button'
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
