
import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import {
    List, ListItem, ListItemText, Collapse,
} from '@material-ui/core';
import { ExpandLess, ExpandMore } from '@material-ui/icons';
import { Link, NavLink } from 'react-router-dom';
import { COLORS } from './Application_constants';

import CheckBoxControl from '../Sample1/CheckBoxControl'

const styles = () => ({
    navText: {
        fontWeight: '700',
        color: '#0076bb',
        fontSize: '14px',
        textTransform: 'uppercase'
    },
    fontBoldFooter: {
        fontWeight: '900',
    },
    headerListItem: {
        padding: '5px 1px'
    },
    headerSubNavListItem: {
        padding: '3px 1px'
    },
    headerNavigationBorder: {
        '&:not(:last-child)': {
            borderBottom: `1px solid ${COLORS.WHITE_LILAC}`,
        },
        '&:last-child': {
            borderBottom: `1px solid ${COLORS.WHITE_LILAC}`,
        },
    },
    collapsedTopBorder: {
        borderTop: `1px solid ${COLORS.WHITE_LILAC}`,
    },
    collapsedListPadding: {
        paddingLeft: '1px',
    },
    subNavListItem: {
        fontWeight: '700',
        color: '#0076bb',
        fontSize: '12px',
        textTransform: 'uppercase'
    },
    inlineBlock: {
        display: 'inline-block'
    }
});

class SideDrawerNavigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            childMenuOpenCloseController: {},
        };
    }

    componentDidMount = () => {
        const { menuNavigation } = this.props;
        this.setSubnavInitialStateToggles(menuNavigation);
    }

    /**
     * Method runs on mounting of component to dynamically create state variables.
     * @param {any} navigationItems
     */
    setSubnavInitialStateToggles = (navigationItems) => {
        const initialState = {};
        navigationItems.forEach((item) => {
            if (item.children.length > 0) {
                initialState[item.name] = false;
            }
        });
        this.setState({ childMenuOpenCloseController: { ...initialState } });
    }

    /**
     * Core navigation render method that decides which flow to render.
     * @returns {JSX}
     */
    renderNavigation = () => {
        const { menuNavigation } = this.props;
        return menuNavigation.map((item, index) => {
            if (item.children.length > 0) {

                const isLast = item.children.length === index;
                return this.renderNavigationItemWithSubNav(item, isLast);
            }
            return this.renderNavigationItem(item);
        });
    }

    /**
     * This determines whether or not if the component is being rendered
     * from the header or the footer, and applies a bolded font.
     * @TODO there has to be a better way to render styles with some sort of theming
     * convention from material ui instead of prop conditionals, need to look up.
     * @returns {String}
     */
    boldHeaderFontClass = () => {
        const { isFooter, classes } = this.props;
        if (isFooter) {
            return classes.fontBoldFooter;
        }
        return classes.navText;
    }

    /**
     * This determines whether or not if the component is being rendered
     * from the header or the footer, and applies list item styling.
     * @returns {String}
     */
    styleHeaderDrawerNavigation = () => {
        const { isFooter, classes } = this.props;
        if (isFooter) {
            return '';
        }
        return classes.headerListItem;
    }

    styleHeaderDrawerSubNavigation = () => {
        const { isFooter, classes } = this.props;
        if (isFooter) {
            return '';
        }
        return classes.headerSubNavListItem;
    }

    /**
     * Method styles the border for the mobile drawer navigation depending
     * on where the components are being rendered.
     * @param {Boolean} isLast - Checks to see if it is the last item in the map being rendered.
     * @param {Boolean} isExpanded - Checks to see if the current component is expanded.
     * @returns {String}
     */
    styleHeaderNavigationBorder = (isLast, isExpanded) => {
        const { isFooter, classes } = this.props;
        if (isFooter || this.isLastSubnavItemExpandedInMobileHeader(isLast, isExpanded)) {
            return '';
        }
        return classes.headerNavigationBorder;
    }

    /**
     * Method checks to see if the current component being rendered is last and expanded.
     * @param {Boolean} isLast
     * @param {Boolean} isExpanded
     * @returns {Boolean}
     */
    isLastSubnavItemExpandedInMobileHeader = (isLast, isExpanded) => {
        if (isLast && isExpanded) {
            return true;
        }
        return false;
    }

    /**
     * This determines whether or not if the component is being rendered
     * from the header or the footer, and applies styling to the subnav in the header.
     * @returns {String}
     */
    subNavListStyling = () => {
        const { isFooter, classes } = this.props;
        if (isFooter) {
            return '';
        }
        return classes.subNavListItem;
    }

    renderExpandedCollapsedStylingOnNavbar = () => {
        const { isFooter, classes } = this.props;
        if (isFooter) {
            return '';
        }
        return classes.collapsedTopBorder;
    }

    /**
     * Renders navigation itmem with collapsable children.
     * @param {any} navigationItem
     * @returns {JSX}
     */
    renderNavigationItemWithSubNav = (navigationItem, isLast) => {
        const { name, id } = navigationItem;
        const { classes } = this.props;
        const currentState = { ...this.state };
        const { toggleDrawer } = this.props;
        const isCurrentlyExpanded = currentState.childMenuOpenCloseController[name];
        return (
            // Added Feature flag for Job board navigation - need to work on this in feature

            <div
                key={id.toString()}
                className={this.styleHeaderNavigationBorder(isLast, isCurrentlyExpanded)}
            >
                <ListItem classes={{ root: this.styleHeaderDrawerNavigation() }}>
                    <CheckBoxControl checked={false} />
                    <ListItemText
                        classes={{ primary: this.boldHeaderFontClass() }}
                        primary={name}
                        onClick={() => {
                            const state = { ...this.state };
                            state.childMenuOpenCloseController[name] = !state.childMenuOpenCloseController[name];
                            this.setState({ ...state });
                        }}

                    />
                    {currentState.childMenuOpenCloseController[name] ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse classes={{ wrapper: this.renderExpandedCollapsedStylingOnNavbar() }} in={currentState.childMenuOpenCloseController[name]} timeout="auto" unmountOnExit>
                    <List classes={{ root: classes.collapsedListPadding }}>
                        {navigationItem.children.map((item, index) => {

                            return (

                                <ListItem disableGutters key={item.id.toString()} classes={{ root: this.styleHeaderDrawerSubNavigation() }}>
                                    <NavLink key={`navigationChildren-${index + 1}`} to={item.link} style={{ textDecoration: "none" }} activeStyle={{
                                        borderLeft: '3px solid #0076bb'
                                    }}>
                                        <CheckBoxControl checked={true} />
                                        <ListItemText classes={{ primary: this.subNavListStyling() }} primary={item.name} className={classes.inlineBlock} />
                                    </NavLink>
                                </ListItem>

                            );

                        })}
                    </List>
                </Collapse>
            </div >

        );
    }

    /**
     * Method renders an individual navigation item.
     * @param {any} navigationItem
     * @returns {JSX}
     */
    renderNavigationItem = (navigationItem) => {
        const { name, id, parentUrlLink } = navigationItem;
        const { toggleDrawer, classes } = this.props;
        return (
            <div key={id.toString()} className={this.styleHeaderNavigationBorder()}>

                <ListItem onClick={toggleDrawer} button classes={{ root: this.styleHeaderDrawerNavigation() }}>
                    <NavLink to={{ pathname: parentUrlLink }} style={{ textDecoration: "none" }} activeStyle={{
                        borderLeft: '3px solid #0076bb'
                    }}>
                        <CheckBoxControl checked={true} />
                        <ListItemText classes={{ primary: this.boldHeaderFontClass() }} primary={name} className={classes.inlineBlock} />
                    </NavLink>
                </ListItem>

            </div >
        );
    }

    render() {
        return this.renderNavigation();
    }
}


export default withStyles(styles)(SideDrawerNavigation);
