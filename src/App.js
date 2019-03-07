import React, { Component } from 'react';
import styles from './App.module.css';
import clipboard from 'clipboard-copy';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import {
  teal,
  red,
} from '@material-ui/core/colors';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';

import Header from './Components/Header';
import SideMenu from './Components/SideMenu';
import Item from './Components/Item';
import Notification from './Components/Notification';
import Confirm from './Components/Confirm';

const INSTA_TEXT_ITEMS = 'InstaTextItems';
const CURRENT_ITEM_INPUT = 'currentItemInput';

class App extends Component {
  constructor(props){
    super(props)

    this.newItem = React.createRef();
    this.notification = React.createRef();
    this.confirmDelete = React.createRef();
    this.state = {
      sideMenuOpen: false,
      showNewItemInput: true,
      items: []
    }
  }

  toggleSideMenu = () => {
    this.setState({
      sideMenuOpen: !this.state.sideMenuOpen,
    });
  };

  handleConvertButton = () => {
    const currentContent = this.newItem.current.state.currentContent;
    const newVal = currentContent.replace(/(?:\r\n|\r|\n)/g, '\u2063\n');

    this.setState({
      currentContent: newVal
    });

    this.copyToClipboard(newVal);
  }

  copyToClipboard = (content) => {
    clipboard(content);
    this.notification.current.setState({
      open: true,
      message: 'Copied to clipboard!'
    });
  }

  handleNewButton = () => {
    const newItemContent = this.newItem.current.state.currentContent;
    const instaTextLocalStorage = JSON.parse(localStorage.getItem(INSTA_TEXT_ITEMS));
    const instaTextItemsLength = instaTextLocalStorage ? instaTextLocalStorage.length : 0; 
    const items = this.state.items;

    if (newItemContent.length) {
      items.unshift({
        id: instaTextItemsLength + 1,
        content: newItemContent
      });

      localStorage.setItem(INSTA_TEXT_ITEMS, JSON.stringify(items));
      localStorage.removeItem(CURRENT_ITEM_INPUT);

      this.setState({
        items: items 
      });
      this.newItem.current.setState({
        currentContent: ''
      });
    }
  };

  handleDeleteAllButton = id => {
    this.confirmDelete.current.setState({
      open: true
    });
  };

  handleDelete = id => {
    const items = this.state.items;

    const newItems = items.filter(el => {return el.id !== id});
    localStorage.setItem(INSTA_TEXT_ITEMS, JSON.stringify(newItems));

    this.setState({
      items: newItems
    })
  };

  handleDeleteAll = () => {
    localStorage.removeItem(CURRENT_ITEM_INPUT);
    localStorage.removeItem(INSTA_TEXT_ITEMS);
    this.updateState();
    this.confirmDelete.current.setState({
      open: false
    });
  };

  updateState = () => {
    const instaTextLocalStorage = JSON.parse(localStorage.getItem(INSTA_TEXT_ITEMS));
    const newItems = (instaTextLocalStorage) ? instaTextLocalStorage : [] ;

    this.setState({
      items: newItems
    });
  };

  componentDidMount = () => {
    this.updateState();
  };

  render() {
    const theme = createMuiTheme({
      palette: {
        primary: teal,
        secondary: red
      },
      typography: {
        useNextVariants: true,
      },
    });

    return (
      <MuiThemeProvider theme={theme}>
        <div className={styles.app}>
          <Header
            toggleSideMenu={this.toggleSideMenu} />
          <SideMenu
            open={this.state.sideMenuOpen}
            toggleSideMenu={this.toggleSideMenu}
            handleDeleteAllButton={this.handleDeleteAllButton} />
          <main className={styles.main}>
            <Grid
              container
              direction='column'
              spacing={16} 
            >
              <Grid item>
                <Item
                  id='newItem'
                  ref={this.newItem}
                  handleConvertButton={() => {this.handleConvertButton()}}
                />
              </Grid>
              {(!!this.state.items && !!this.state.items.length) &&
                <>
                  <div className={styles.divider}>
                    <Divider
                      variant="middle" />
                  </div>
                  {this.state.items.map((item) => {
                      return (
                        <Grid
                          item
                          key={item.id}
                        >
                          <Item
                            id={item.id}
                            content={item.content}
                            handleDeleteButton={() => {this.handleDelete(item.id)}}
                            handleCopyToClipboard={() => {this.copyToClipboard(item.content)}}
                          />
                        </Grid>
                      )
                    })
                  }
                </>
              }
            </Grid>
            <Notification
              ref={this.notification}
              handleNewButton={() => {this.handleNewButton()}} />
            <Confirm
              ref={this.confirmDelete}
              title='Delete all items?'
              message='There is no way to recover deleted items.'
              action={() => {this.handleDeleteAll()}} />
          </main>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
