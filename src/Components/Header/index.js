import React, { Component } from 'react';
import styles from './index.module.css';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import { ReactComponent as Logo } from '../../instatext-logo.svg';

class Header extends Component {
  render() {
    const {
      toggleSideMenu
    } = this.props;

    return (
      <>
        <AppBar position='fixed'>
          <Toolbar>
            <IconButton
              className={styles.menuButton}
              color='inherit'
              aria-label='Menu'
              onClick={toggleSideMenu}
            >
              <MenuIcon />
            </IconButton>
            <div
              className={styles.logo}
            >
              <Logo /> 
            </div>
          </Toolbar>
        </AppBar>
      </>
    );
  }
}

export default Header;

