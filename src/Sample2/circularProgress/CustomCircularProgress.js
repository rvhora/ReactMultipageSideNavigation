import React, { Component } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Box from '@material-ui/core/Box';
import {
    withStyles
} from '@material-ui/core';

const styles = (theme) => ({

    bottom: {
        color: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
    },
    top: {
        color: '#1a90ff',
        animationDuration: '550ms',
        position: 'absolute',
        left: 0,
    },
    circle: {
        strokeLinecap: 'round',
        color: '#0076bb'
    },
})

class CustomCircularProgress extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: 65,

        }

    }

    render() {
        const { classes } = this.props;
        return (

            <Box position="relative" display="inline-flex">

                <CircularProgress
                    variant="static"
                    className={classes.bottom}
                    size={120}
                    thickness={6}
                    value={100}
                />
                <CircularProgress
                    variant="static"
                    disableShrink
                    className={classes.top}
                    classes={{
                        circle: classes.circle,
                    }}
                    size={120}
                    thickness={6}
                    value={this.state.value}
                />
                <Box
                    top={0}
                    left={0}
                    bottom={0}
                    right={0}
                    position="absolute"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                >
                    <h3 style={{ color: '#0076bb' }}>{`${Math.round(
                        this.state.value,
                    )}%`}</h3>
                </Box>
            </Box>

        )
    }
}

export default withStyles(styles)(CustomCircularProgress);