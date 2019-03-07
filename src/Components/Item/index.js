import React, { Component } from 'react';
import styles from './index.module.css';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

const CURRENT_ITEM_INPUT = 'currentItemInput';

class Item extends Component {
  constructor(props){
    super(props)

    this.state = {
      id: this.props.id,
      currentContent: ''
    }
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });

    localStorage.setItem(CURRENT_ITEM_INPUT, event.target.value);
  };

  componentDidMount = () => {
    const currentItemInput = localStorage.getItem(CURRENT_ITEM_INPUT);

    if (!!currentItemInput) {
      this.setState({
        currentContent: currentItemInput
      })
    }
  };

  render() {
    const {
      content,
      handleDeleteButton,
      handleConvertButton,
      handleCopyToClipboard
    } = this.props;

    return (
      <Card className={styles.card}>
        {!content &&
          <>
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
                onClick={handleConvertButton}
              >
                Convert and copy to clipboard
              </Button>
            </CardActions>
          </>
        }
        {content &&
          <>
            <CardContent>
              <Typography
                color='textPrimary'
                variant='body2'
                gutterBottom
                className={styles.lineBreak}
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
                onClick={handleCopyToClipboard}
              >
                Copy to clipboard
              </Button>
            </CardActions>
          </>
        }
      </Card>
    );
  }
}

export default Item;
