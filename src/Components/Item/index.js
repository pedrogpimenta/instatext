import React, { Component } from 'react';
import styles from './index.module.css';
import clipboard from 'clipboard-copy';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

class Item extends Component {
  constructor(props){
    super(props)
    this.state = {
      id: this.props.id,
      currentContent: '',
      newContent: ''
    }
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });

    localStorage.setItem('currentItemInput', event.target.value);
  };

  handleConvert = () => {
    const newVal = this.state.currentContent.replace(/(?:\r\n|\r|\n)/g, "\u2063\n");

    this.setState({
      currentContent: newVal,
      newContent: newVal
    });

    this.copyToClipboard(newVal);
  }

  copyToClipboard = (content) => {
    clipboard(content);
    console.log('copied');
    console.log(content);
  }

  componentDidMount = () => {
    const currentItemInput = localStorage.getItem('currentItemInput');

    if (!!currentItemInput) {
      this.setState({
        currentContent: currentItemInput
      })
    }
  };

  render() {
    const {
      content,
      handleDeleteButton
    } = this.props;

    return (
      <>
        {!content &&
          <Card className={styles.card}>
            <CardContent>
              <TextField
                id={this.state.id}
                label='Insert content'
                multiline
                fullWidth
                variant='filled'
                value={this.state.currentContent}
                onChange={this.handleChange('currentContent')}
              />
            </CardContent>
            <CardActions>
              <Button
                color='primary'
                onClick={this.handleConvert}
              >
                Convert and copy to clipboard
              </Button>
            </CardActions>
          </Card>
        }
        {content &&
          <Card className={styles.card}>
            <CardContent>
              <Typography
                color='textPrimary'
                variant='body2'
                gutterBottom
              >
                {content}
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                color='secondary'
                onClick={handleDeleteButton}
              >
                Delete
              </Button>
              <Button
                color='primary'
                onClick={() => {this.copyToClipboard(content)}}
              >
                Copy to clipboard
              </Button>
            </CardActions>
          </Card>
        }
      </>
    );
  }
}

export default Item;
