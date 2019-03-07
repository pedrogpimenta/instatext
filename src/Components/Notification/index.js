import React, { Component } from 'react';
import styles from './index.module.css';

import Snackbar from '@material-ui/core/Snackbar';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

class Notification extends Component {
  state = {
    open: false,
    vertical: 'bottom',
    horizontal: 'center',
    message: ''
  };

  handleClick = state => () => {
    this.setState({ open: true, ...state });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const {
      vertical,
      horizontal,
      open
    } = this.state;
    const { handleNewButton } = this.props;
    const fabClasses = this.state.open ? [styles.fab, styles.open].join(' ') : styles.fab;

    return (
      <>
       <Fab
          color='secondary'
          aria-label='New'
          className={fabClasses}
          onClick={handleNewButton}
        >
          <AddIcon />
        </Fab>
        <Snackbar
          anchorOrigin={{ vertical, horizontal }}
          open={open}
          onClose={this.handleClose}
          autoHideDuration={4000}
          ContentProps={{
            'aria-describedby': 'message-id',
          }}
          message={<span id="message-id">{this.state.message}</span>}
        />
      </>
    );
  }
}

export default Notification;

