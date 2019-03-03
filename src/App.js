import React, { Component } from 'react';
import styles from './App.module.css';

import Grid from '@material-ui/core/Grid';
import Header from './Components/Header';
import SideMenu from './Components/SideMenu';
import Item from './Components/Item';

class App extends Component {
  state = {
    sideMenuOpen: false 
  };

  toggleSideMenu = () => {
    this.setState({
      sideMenuOpen: !this.state.sideMenuOpen,
    });
  };

  render() {
    const items = [
      {
        id: 'item1',
      },
      {
        id: 'item2',
        name: 'Item two',
        content: 'This is content, fucker'
      },
      {
        id: 'item3',
        name: 'Item 3',
        content: 'Also content'
      },
    ];

    return (
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
            spacing='16' 
          >
            {items.map((item) => {
              return (
              <Grid item>
                <Item
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  content={item.content}
                />
              </Grid>
              )
            })}
          </Grid>
        </main>
      </div>
    );
  }
}

export default App;
