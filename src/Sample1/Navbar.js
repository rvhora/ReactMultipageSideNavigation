

import React, { Component } from 'react'
import {
    withStyles
} from '@material-ui/core';
import { Link, NavLink } from 'react-router-dom'
import Drawer from "@material-ui/core/Drawer";
import menuItems from "./MenuItems.json";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import { ListItemIcon } from "@material-ui/core";
import AccessAlarmIcon from "@material-ui/icons/AccessAlarm";
const styles = (theme) => ({
    list: {
        width: 350
    },
    links: {
        textDecoration: "none"
    },
    menuHeader: {
        paddingLeft: "30px"
    },
    activeStyle: {
        fontWeight: "bold",
        color: "Blue",
        borderLeft: '5px solid red'
    }

}
)


export class Navbar extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    // this method sets the current state of a menu item i.e whether it is in expanded or collapsed or a collapsed state
    handleClick = (item) => {
        this.setState(prevState => ({ [item]: !prevState[item] }));
    }

    //This is the menuhandler for the left navigation
    menuHandler = (children) => {
        const { classes } = this.props;
        const { state } = this;
        return children.map(subOption => {
            if (!subOption.children) {
                return (
                    <div key={subOption.id}>
                        <ListItem button key={subOption.name}>
                            {/* <AccessAlarmIcon /> */}
                            <Link to={subOption.url} className={classes.links}>
                                <ListItemText primary={subOption.name} />
                            </Link>
                        </ListItem>
                    </div>
                );
            }
            return (
                <div key={subOption.name}>
                    <ListItem button onClick={() => this.handleClick(subOption.name)}>
                        {/* <AccessAlarmIcon /> */}
                        <ListItemText primary={subOption.name} />
                        {state[subOption.name] ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={state[subOption.name]} timeout="auto" unmountOnExit>
                        {this.menuHandler(subOption.children)}
                    </Collapse>
                </div>
            );
        });
    }

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.list}>
                <Drawer
                    variant="persistent"
                    anchor="left"
                    open
                    classes={{ paper: classes.list }}
                >
                    <div>
                        <List>
                            <ListItem key="menuHeading" />
                            {this.menuHandler(menuItems.data)}
                        </List>
                    </div>
                </Drawer>
            </div>
        )
    }
}

export default withStyles(styles)(Navbar)
