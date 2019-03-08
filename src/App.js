import React, { Component } from 'react';
import styles from './index.module.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';

import Header from './Components/Header';
import SideMenu from './Components/SideMenu';
import Confirm from './Components/Confirm';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import {
  teal,
  red,
} from '@material-ui/core/colors';

const INSTA_TEXT_ITEMS = 'InstaTextItems';
const CURRENT_ITEM_INPUT = 'currentItemInput';

class App extends Component {
  constructor(props){
    super(props)

    this.confirmDelete = React.createRef();
    this.home = React.createRef();
    this.state = {
      sideMenuOpen: false,
    }
  };

  toggleSideMenu = () => {
    this.setState({
      sideMenuOpen: !this.state.sideMenuOpen,
    });
  };

  handleDeleteAllButton = id => {
    this.confirmDelete.current.setState({
      open: true
    });
  };

  handleDeleteAll = () => {
    localStorage.removeItem(CURRENT_ITEM_INPUT);
    localStorage.removeItem(INSTA_TEXT_ITEMS);

    this.confirmDelete.current.setState({
      open: false
    });
    this.home.current.setState({
      items: [] 
    });
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
      <Router>
        <MuiThemeProvider theme={theme}>
          <div className={styles.app}>
            <Header
              toggleSideMenu={this.toggleSideMenu} />
            <SideMenu
              open={this.state.sideMenuOpen}
              toggleSideMenu={this.toggleSideMenu}
              handleDeleteAllButton={this.handleDeleteAllButton} />
            <main className={styles.main}>
              <Route path="/" exact render={() => (
                  <Home
                    ref={this.home} />
                )} />
              <Route path="/about/" exact component={About} />
            </main>
          <Confirm
            ref={this.confirmDelete}
            title='Delete all items?'
            message='There is no way to recover deleted items.'
            action={() => {this.handleDeleteAll()}} />
          </div>
        </MuiThemeProvider>
      </Router>
    )
  }
}

export default App;
