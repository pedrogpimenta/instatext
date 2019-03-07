import React, { Component } from 'react';
import styles from './index.module.css';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from './pages/Home';
import About from './pages/About';

import Header from './Components/Header';
import SideMenu from './Components/SideMenu';

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

    this.state = {
      sideMenuOpen: false,
    }
  };

  toggleSideMenu = () => {
    this.setState({
      sideMenuOpen: !this.state.sideMenuOpen,
    });
  };

  handleDeleteAll = () => {
    localStorage.removeItem(CURRENT_ITEM_INPUT);
    localStorage.removeItem(INSTA_TEXT_ITEMS);
    this.updateState();
    this.confirmDelete.current.setState({
      open: false
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

              <Route path="/" exact component={Home} />
              <Route path="/about/" exact component={About} />

            </main>
          </div>
        </MuiThemeProvider>
      </Router>
    )
  }
}

export default App;
