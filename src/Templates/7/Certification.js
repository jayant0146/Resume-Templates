import { Card, CardContent } from '@material-ui/core';
import Typography from '@material-ui/core/Typography'

function Certification() {
    return (<>
        <div style={{ color: "#425061" }}><Typography variant="h5" gutterBottom>
            Certificates
        </Typography> </div>

        <div style={{ textAlign: "left" }}><Card>
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