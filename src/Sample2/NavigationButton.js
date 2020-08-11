import React, { Component } from 'react';

import { withRouter } from 'react-router-dom';
import {
    withStyles,
    Button

} from '@material-ui/core';

const styles = (theme) => ({

    navigationButtonWrapper: {
        display: 'flex',
        justifyContent: 'flex-satrt',

    }, navigationButton: {
        marginTop: '10px',
        marginRight: '30px',
        width: '300px'

    },
    buttonBlock: {
        display: 'block'
    },
    buttonNone: {
        display: 'none'
    }

});

class NavigationButton extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            index: 0,
            disabledNext: false,
            disabledPrev: true,
            prevbtnLabel: '',
            prevRedirectURL: '',
            nextRedirectURL: ''
        }
    }

    getbuttonNavigationStateByPathname(pathname) {
        let obj = this.props.menuNavigation.find(o => o.parentUrlLink === pathname);
        let index = obj.id - 1;
        let disabledPrev = (index === 0);
        let prevRedirectURL = this.props.menuNavigation[index].parentUrlLink
        let nextRedirectURL = this.props.menuNavigation[index + 1].parentUrlLink
        if (index !== 0) {
            const state = { ...this.state }
            let prevLabel = this.props.menuNavigation[index - 1].name;
            state.prevbtnLabel = prevLabel
            this.setState({ ...state });
        }
        this.setState({ index: index, disabledPrev: disabledPrev, disabledNext: false, prevRedirectURL: prevRedirectURL, nextRedirectURL: nextRedirectURL })
    }
    async componentDidMount() {
        const pathname = await this.getPathUrl();
        // this.getbuttonNavigationStateByPathname(pathname)
    }

    getPathUrl() {
        const { pathname } = this.props.location;
        return pathname;
    }
    togglePrev(e) {
        const { history } = this.props;
        let index = this.state.index - 1;
        let disabledPrev = (index === 0);
        let prevRedirectURL = this.props.menuNavigation[index].parentUrlLink
        let nextRedirectURL = this.props.menuNavigation[index + 1].parentUrlLink
        if (index !== 0) {
            const state = { ...this.state }
            let prevLabel = this.props.menuNavigation[index - 1].name;
            state.prevbtnLabel = prevLabel
            this.setState({ ...state });
        }
        this.setState({ index: index, disabledPrev: disabledPrev, disabledNext: false, prevRedirectURL: prevRedirectURL, nextRedirectURL: nextRedirectURL })
        history.goBack();
    }

    toggleNext(e) {
        const { history } = this.props;
        let index = this.state.index + 1;
        let disabledNext = index === (this.props.menuNavigation.length - 1);
        let nextRedirectURL = this.props.menuNavigation[index].parentUrlLink
        let prevRedirectURL = this.props.menuNavigation[index - 1].parentUrlLink
        if (index !== 0) {
            const state = { ...this.state }
            let prevLabel = this.props.menuNavigation[index - 1].name;
            state.prevbtnLabel = prevLabel
            this.setState({ ...state });
        }

        this.setState({ index: index, disabledNext: disabledNext, disabledPrev: false, nextRedirectURL: nextRedirectURL, prevRedirectURL: prevRedirectURL })


        history.push(nextRedirectURL);
    }

    render() {
        const { index, disabledNext, disabledPrev, prevbtnLabel, nextRedirectURL, prevRedirectURL } = this.state
        const menuItems = this.props.menuNavigation ? this.props.menuNavigation[index] : null
        const { classes } = this.props;
        if (menuItems) {
            return (

                <>
                    <Prev toggle={(e) => this.togglePrev(e)} active={disabledPrev} prevbtnLabel={prevbtnLabel} classes={classes} />
                    <Next toggle={(e) => this.toggleNext(e)} active={disabledNext} prevbtnLabel={prevbtnLabel} classes={classes} />
                </>


            )
        } else {
            return <span>error</span>
        }
    }
}

function Prev(props) {

    return (
        <div className={props.classes.buttonBlock}>
            <Button
                onClick={props.toggle}
                disabled={props.active}
                className={props.classes.navigationButton}
                variant="contained"
                color="primary"
            >Back to {props.prevbtnLabel}</Button>
        </div>

    );
}

function Next(props) {

    return (
        <div className={props.classes.buttonBlock}>
            <Button
                onClick={props.toggle}
                disabled={props.active}
                className={props.classes.navigationButton}
                variant="contained"
                color="primary"
            >Save & Continue</Button>
        </div>
    );
}

export default withRouter(withStyles(styles)(NavigationButton))
