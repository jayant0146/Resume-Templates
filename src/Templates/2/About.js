import React from "react";
import Typography from '@material-ui/core/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { green, orange } from '@mui/material/colors';

const theme = createTheme({
    typography: {
        body1: {
            color: green[500]
        },
        h4: {
            color: orange[500]
        },
        button: {
            color: green[500]
        }
    }
});

function About() {
    return (<>
        <ThemeProvider theme={theme}>
            <Typography variant="h4" gutterBottom>
                JAYANT SAHU
            </Typography>
            <Typography variant="h5" gutterBottom>
                Web Developer
            </Typography>
            <Typography variant="body1" gutterBottom>
                Bachelor of Science in Computer Science, XYZ University, Graduated May 2020
            </Typography>
        </ThemeProvider>
    </>)
}

export default About;