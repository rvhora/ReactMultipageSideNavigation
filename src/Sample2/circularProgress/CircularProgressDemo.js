import React from "react";
import {
    CircularProgress,

    Typography,
    ThemeProvider,
    createMuiTheme,
    Box
} from "@material-ui/core";

const grey = "#f5f5f5";

const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#1a90ff"
        }
    },
    overrides: {

        MuiCircularProgress: {
            circle: {
                strokeLinecap: "round",
                strokeWidth: 4
            }
        }
    }
});



function NumberCircularProgress(props) {
    return (
        <Box position="relative" display="inline-block">
            <Box top={0} left={0} bottom={0} right={0} position="absolute">
                <CircularProgress
                    style={{ color: grey }}
                    size={110}
                    variant="static"
                    value={100}
                />
            </Box>
            <CircularProgress size={110} variant="static" value={props.value} />
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
                <Typography variant="h5" component="div" color="textSecondary">{`${
                    props.value
                    }%`}</Typography>
            </Box>
        </Box>
    );
}

export default function CircularProgressDemo() {
    return (
        <ThemeProvider theme={theme}>


            <NumberCircularProgress value={75} />
        </ThemeProvider>
    );
}
