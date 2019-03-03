import React, { Component } from 'react';
import styles from './index.module.css';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

class Item extends React.Component {
  state = {
    name: 'Cat in the Hat',
    age: '',
    multiline: '',
    currency: 'EUR',
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  render() {
    const {
      id,
      name,
      content
    } = this.props;

    return (
      <Card className={styles.card}>
        {!content &&
          <CardContent>
            <TextField
              id="standard-multiline-flexible"
              label="Multiline"
              multiline
              value={this.state.multiline}
              onChange={this.handleChange('multiline')}
              margin="normal"
            />
          </CardContent>
        }
        {content &&
          <CardContent>
            <Typography
              color='textPrimary'
              variant='body1'
              gutterBottom
            >
              {content}
            </Typography>
          </CardContent>
        }
        {!content &&
          <CardActions>
            <Button
              variant='contained'
              color='primary'
            >
              Convert and copy to clipboard
            </Button>
          </CardActions>
        }
        {content &&
          <CardActions>
            <Button
              variant='contained'
              color='secondary'
            >
              Delete
            </Button>
            <Button
              variant='contained'
              color='primary'
            >
              Copy to clipboard
            </Button>
          </CardActions>
        }
      </Card>
    );
  }
}

export default Item;
