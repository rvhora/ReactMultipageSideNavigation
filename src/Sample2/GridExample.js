import React, { Component } from 'react';
import {
    withStyles,
    Container,
    Grid,
    Paper,

} from '@material-ui/core';
import SideNavigation from '../Sample2/SideNavigation'
import { COLORS } from '../Sample2/Application_constants';
import CircularProgressDemo from './circularProgress/CircularProgressDemo'



const styles = (theme) => ({
    root: {
        padding: '80px 0',
        minHeight: '800px',
        [theme.breakpoints.down('sm')]: {
            paddingTop: '60px',
            marginTop: '25px',
        },
        backgroundColor: COLORS.BLACK_HAZE,
    },
    dropdownRoot: {
        marginTop: '30px',
        padding: '30px 0',
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
    },
    helpPanelRoot: {
        marginTop: '30px',
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
    },
    dropdownContainerRoot: {
        border: `1px solid ${COLORS.WHITE_LILAC}`,
        width: '100%',
        padding: '20px 20px',
        textAlign: 'left',
        borderRadius: '3px',
        position: 'relative',
    },
    buttonRoot: {
        lineHeight: 'inherit',
        margin: '0 30px 20px',
        padding: 0,
        width: '100%',
        textTransform: 'inherit',
    },
    helpPanelContainerRoot: {
        padding: '20px',
        display: 'flex',
        flexWrap: 'wrap',
    },
    helpPanelHeader: {
        marginBottom: '10px',
    },
    helpPanelLinks: {
        textAlign: 'left',
        marginBottom: '10px',
    },
    helpPanelButton: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        borderLeft: `1px solid ${COLORS.WHITE_LILAC}`,
        width: '100%',
        borderTop: `1px solid ${COLORS.WHITE_LILAC}`,
        paddingBottom: '10px',
        textTransform: 'inherit',
    },
    header: {
        color: COLORS.ST_TROPAZ,
        fontWeight: '700',
        fontSize: '20px',
        margin: 0,
    },
    linkHeader: {
        color: COLORS.RAVEN,
        fontWeight: '700',
        fontSize: '20px',
        margin: 0,
    },
    chevronRoot: {
        position: 'absolute',
        width: '25px',
        right: '20px',
        color: COLORS.TRUE_BLUE,
    },
    progressWrapper: {
        height: '80vh',
    },
    progressRoot: {
        marginTop: '25vh',
    },

});

/**
 * Landing page for Time and Pay
 */
class GridExample extends Component {
    constructor(props) {
        super(props);
    }


    /**
     * Makes call to Document API to retrieve user's time & pay docs
     * */

    /**
     * Adds a link to the document dropdown component
     * */






    render() {

        const { classes, t } = this.props;

        return (


            < div className={classes.root} >

                <Container maxWidth="xl">

                    <Grid item xs={12}>
                        <Grid container justify="space-evenly">
                            <Grid item xs={12} md={3}>
                                <Paper classes={{ root: classes.dropdownRoot }}>
                                    <Grid container classes={{ root: classes.helpPanelContainerRoot }}>
                                        <Grid item xs={12} classes={{ root: classes.helpPanelHeader }}>
                                            <CircularProgressDemo />
                                        </Grid>

                                        <Grid item xs={12} classes={{ root: classes.helpPanelLinks }}>
                                            HElo Grid

                                         </Grid>

                                        <SideNavigation />
                                    </Grid>

                                </Paper>
                            </Grid>

                            <Grid item xs={12} md={9}>
                                <Paper classes={{ root: classes.helpPanelRoot }}>
                                    <Grid container classes={{ root: classes.helpPanelContainerRoot }}>
                                        <Grid item xs={12} classes={{ root: classes.helpPanelHeader }}>
                                            <h1 className={classes.linkHeader}>Name</h1>
                                        </Grid>



                                    </Grid>
                                </Paper>
                            </Grid>
                        </Grid>
                    </Grid>

                </Container>


            </div >
        );
    }
}

export default withStyles(styles)(GridExample);
