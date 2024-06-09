import { Card, CardContent } from '@material-ui/core';
import Typography from '@material-ui/core/Typography'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { orange } from '@mui/material/colors';

const theme = createTheme({
    typography: {
        h5: {
            color: orange[500]
        }
    }
});



function Certification() {
    return (<>
        <div style={{ color: "#425061" }}><Typography variant="h5" gutterBottom>
            Certificates
        </Typography> </div>

        <Card>
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
        </Card>
    </>
    );
}

export default Certification;