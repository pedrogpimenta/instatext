import React, { Component } from 'react';
import styles from './index.module.css';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

class Header extends Component {
  render() {
    const {
      toggleSideMenu
    } = this.props;

    return (
      <div className={styles.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              className={styles.menuButton}
              color="inherit"
              aria-label="Menu"
              onClick={toggleSideMenu}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" className={styles.grow}>
              InstaText
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default Header;

