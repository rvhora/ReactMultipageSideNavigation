import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import SideNavigation from './SideNavigation'
import { Route, Switch } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import UserPage from '../pages/UserPage'
import UserPage1 from '../pages/UserPage1'
import UserPage2 from '../pages/UserPage2'
const drawerWidth = 330;



const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },

    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}));

export default function PDrawer() {
    const classes = useStyles();

    return (
        <div className={classes.root}>

            <Drawer
                className={classes.drawer}
                variant="permanent"
                classes={{
                    paper: classes.drawerPaper,
                }}
                anchor="left"
            >

                <SideNavigation />

            </Drawer>

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
