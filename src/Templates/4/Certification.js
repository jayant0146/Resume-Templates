import { Card, CardContent } from '@material-ui/core';
import Typography from '@material-ui/core/Typography'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { orange } from '@mui/material/colors';
import { purple } from 'material-ui/colors';

const theme = createTheme({
    typography: {
        h5: {
            color: purple[500]
        }
    }
});



function Certification() {
    return (<>
        <ThemeProvider theme={theme}><Typography variant="h5" gutterBottom>
            Certificates
        </Typography> </ThemeProvider>

        <div style={{ backgroundColor: "#b7b7b5" }}> <Card>
            <CardContent>
                <Typography variant="body1" gutterBottom>
                    Microsoft Certificate
                </Typography>
            </CardContent>
            <CardContent>
                <Typography variant="body1" gutterBottom>
                    Google Certified
                </Typography>
            </CardContent><CardContent>
                <Typography variant="body1" gutterBottom>
                    AWS certification
                </Typography>
            </CardContent><CardContent>
                <Typography variant="body1" gutterBottom>
                    Excellence Certificate
                </Typography>
            </CardContent>
        </Card></div>
    </>
    );
}

export default Certification;