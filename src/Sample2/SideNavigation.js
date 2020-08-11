import React, { Component } from 'react';

import {
    Grid, Drawer, List,
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import SideDrawerNavigation from './SideDrawerNavigation';
import { COLORS } from './Application_constants';
import menuNavigation from './menuItems.json'

const styles = (theme) => ({

    drawer: {
        width: '300px',
        flexShrink: 0,
    },
    drawerPaper: {
        width: '300px',
        backgroundColor: 'none',
        boxShadow: 'none',
        marginTop: '60px',
    },

    sideNavigation: {
        color: COLORS.RAVEN,
        height: '100%',
        overflow: 'hidden',
    },

});

class SideNavigation extends Component {
    constructor(props) {
        super(props);

        this.state = {
            drawerToggled: true,
            profileNavigation: []
        };
    }


    drawerToggle = () => {
        const { drawerToggled } = this.state;
        this.setState({ drawerToggled: drawerToggled });
    }

    render() {
        const { classes } = this.props;
        const { drawerToggled } = this.state;
        return (

            <List className={classes.sideNavigation}>
                <SideDrawerNavigation toggleDrawer={this.drawerToggle} menuNavigation={menuNavigation.data} />
            </List>


        );
    }
}

export default (withStyles(styles)(SideNavigation));
