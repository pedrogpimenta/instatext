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

class App extends Component {
  constructor(props){
    super(props)
    this.newItem = React.createRef();

    this.state = {
      sideMenuOpen: false,
      showNewItemInput: false,
      items: []
    }
  }

  toggleSideMenu = () => {
    this.setState({
      sideMenuOpen: !this.state.sideMenuOpen,
    });
  };

  handleNewButton = () => {
    if (this.state.showNewItemInput) {
      const instaTextLocalStorage = JSON.parse(localStorage.getItem('InstaTextItems'));
      const instaTextItemsLength = instaTextLocalStorage ? instaTextLocalStorage : 0; 

      const newItemContent = this.newItem.current.state.currentContent;
      const items = this.state.items;
      items.unshift({
        id: instaTextItemsLength + 1,
        content: newItemContent
      });
      localStorage.setItem('InstaTextItems', JSON.stringify(items));
      localStorage.removeItem('currentItemInput');

      this.setState({
        items: items 
      });

      this.newItem.current.setState(
        {currentContent: ''
      });
    } else {
      this.setState({
        showNewItemInput: true
      });
    }
  };

  handleDeleteButton = id => {
    const items = this.state.items;

    const newItems = items.filter(el => {return el.id !== id});
    localStorage.setItem('InstaTextItems', JSON.stringify(newItems));

    this.setState({
      items: newItems
    })
  };

  componentDidMount = () => {
    const instaTextLocalStorage = JSON.parse(localStorage.getItem('InstaTextItems'));
    const currentItemInput = localStorage.getItem('currentItemInput');

    if (instaTextLocalStorage) {
      this.setState({
        items: instaTextLocalStorage,
      })
    }

    this.setState({
      showNewItemInput: !!currentItemInput
    });
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
            toggleSideMenu={this.toggleSideMenu} />
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
              {(!!this.state.items || !!this.state.items.length) &&
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
