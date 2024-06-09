import React from "react";
import Typography from '@material-ui/core/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { green, orange } from '@mui/material/colors';

const theme = createTheme({
    typography: {
        body1: {
            color: green[500]
        },

        h5: {
            color: orange[500]
        }
    }
});

function Projects() {
    return (<>
        <ThemeProvider theme={theme}>
            <Typography variant="h5" gutterBottom>
                Projects
            </Typography>

            <Typography variant="body1" gutterBottom>
                Business Development Manager
            </Typography>

            <Typography variant="body1" gutterBottom>
                Business
            </Typography>

            <Typography variant="body2" gutterBottom>
                <ul>
                    <li> Successfully managed $2-3 million budget projects and successfully achieved the project scheduled goals.</li>

                    <li>-Developed and implemented new marketing and sales plans and defined the strategy for the next 5 years.</li>

                    <li>-Reviewed constantly the customer feedback and then suggested ways to improve the processes and customer service levels which increased the satisfaction rate from 81% to 95%</li>
                    <li>Ensured that new clients will grow into a loyal customer base in a specialist niche market by implementing a new loyalty program. -</li></ul>
            </Typography>
        </ThemeProvider>

    </>)
}

export default Projects;