import React, { Component } from 'react';
import styles from './App.module.css';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import {
  teal,
  red,
} from '@material-ui/core/colors';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';

import Header from './Components/Header';
import SideMenu from './Components/SideMenu';
import Item from './Components/Item';

const INSTA_TEXT_ITEMS = 'InstaTextItems';
const CURRENT_ITEM_INPUT = 'currentItemInput';

class App extends Component {
  constructor(props){
    super(props)

    this.newItem = React.createRef();
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

  handleNewButton = () => {
    const newItemContent = this.newItem.current.state.currentContent;

    if (newItemContent.length) {
      const instaTextLocalStorage = JSON.parse(localStorage.getItem(INSTA_TEXT_ITEMS));
      const instaTextItemsLength = instaTextLocalStorage ? instaTextLocalStorage : 0; 

      const items = this.state.items;
      items.unshift({
        id: instaTextItemsLength + 1,
        content: newItemContent
      });

      localStorage.setItem(INSTA_TEXT_ITEMS, JSON.stringify(items));
      localStorage.removeItem(CURRENT_ITEM_INPUT);

      this.setState({
        items: items 
      });
      this.newItem.current.setState(
        {currentContent: ''
      });
    }
  };

  handleDeleteButton = id => {
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
    });

    return (
      <MuiThemeProvider theme={theme}>
        <div className={styles.app}>
          <Header
            toggleSideMenu={this.toggleSideMenu} />
          <SideMenu
            open={this.state.sideMenuOpen}
            toggleSideMenu={this.toggleSideMenu}
            handleDeleteAll={this.handleDeleteAll} />
          <main className={styles.main}>
            <Grid
              container
              direction='column'
              spacing={16} 
            >
              <Grid item>
                <Item
                  id='testest'
                  content=''
                  ref={this.newItem}
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
                            handleDeleteButton={() => {this.handleDeleteButton(item.id)}}
                          />
                        </Grid>
                      )
                    })
                  }
                </>
              }
            </Grid>
          </main>
          <div className={styles.fabHolder}>
            <Fab
              color='secondary'
              aria-label='New'
              className={styles.fab}
              onClick={this.handleNewButton}
            >
              <AddIcon />
            </Fab>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
