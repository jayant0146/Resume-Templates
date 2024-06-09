import React from "react";
import Typography from '@material-ui/core/Typography';

function About() {
    return (<div style={{ padding: "20px", backgroundColor: "#45818e" }}>

        <Typography variant="h4" gutterBottom color={"white"}>
            JAYANT SAHU
        </Typography>
        <Typography variant="h5" gutterBottom color={"white"}>
            Web Developer
        </Typography>

        <Typography variant="body1" gutterBottom color={"white"}>
            Professional Business Developer with more than four years of experience in the business development processes. Involved in product testing, management, and development of new business opportunities.
        </Typography>

    </div>)
}

export default About;