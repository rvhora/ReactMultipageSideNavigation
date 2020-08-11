import React, { Component } from 'react';
import Drawer from '@material-ui/core/Drawer';
import { Route, Switch } from 'react-router-dom'
import HomePage from './pages/HomePage'
import UserPage from './pages/UserPage'
import UserPage1 from './pages/UserPage1'
import UserPage2 from './pages/UserPage2'
import {
  withStyles
} from '@material-ui/core';

import {
  Grid, List,
} from '@material-ui/core';
import SideNavigation from './Sample2/SideNavigation'

const styles = (theme) => ({
  root: {
    display: 'flex',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },

}
)


export class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      // <div style={{ display: "flex" }}>
      //   <div
      //     style={{
      //       padding: "10px",
      //       width: "20%",
      //       background: "#f0f0f0"
      //     }}
      //   >

      //     <Navbar />
      //   </div>
      //   <div style={{ flex: 1, padding: "10px" }}>
      //     <Switch>
      //       <Route exact path="/" component={HomePage}></Route>
      //       <Route path="/:id" component={UserPage}></Route>
      //     </Switch>
      //   </div>
      // </div>

      <div className={classes.root}>

        <SideNavigation />


        <main className={classes.content}>
          <Switch>
            <Route exact path="/home" component={HomePage}></Route>
            <Route path="/rvhora" component={UserPage}></Route>
            <Route path="/kishori" component={UserPage1}></Route>
            <Route path="/sumit" component={UserPage2}></Route>
          </Switch>
        </main>

      </div>
    );
  }
}

export default withStyles(styles)(App);

