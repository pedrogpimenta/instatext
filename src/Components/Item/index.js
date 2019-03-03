import React, { Component } from 'react';
import styles from './index.module.css';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

class Item extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      id: this.props.id,
      name: 'yes name',
      currentContent: '',
      newContent: ''
    }
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  handleConvert = () => {
    console.log('ola');
    console.log(this.state.currentContent);
    const newVal = this.state.currentContent.replace(/(?:\r\n|\r|\n)/g, "\u2063\n");
    console.log(newVal);

    this.setState({
      currentContent: newVal,
      newContent: newVal
    });
  }

  render() {
    return (
      <Card className={styles.card}>
        {!this.props.content &&
          <CardContent>
            <TextField
              id={this.state.id}
              label='Insert content'
              multiline
              value={this.state.currentContent}
              onChange={this.handleChange('currentContent')}
              margin="normal"
            />
          </CardContent>
        }
        {this.props.content &&
          <CardContent>
            <Typography
              color='textPrimary'
              variant='body1'
              gutterBottom
            >
              {this.props.content}
            </Typography>
          </CardContent>
        }
        {!this.props.content &&
          <CardActions>
            <Button
              variant='contained'
              color='primary'
              onClick={this.handleConvert}
            >
              Convert and copy to clipboard
            </Button>
          </CardActions>
        }
        {this.props.content &&
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
