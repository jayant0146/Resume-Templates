import React from 'react';
import Typography from '@material-ui/core/Typography';
import { fontWeight } from '@mui/system';

const Experience = () => {
    return (
        <>
            <div style={{ color: "#425061", backgroundColor: "#fce5cd" }}>
                <Typography variant="h5" gutterBottom>
                    Work Experience
                </Typography>

                <h4 style={{ fontWeight: 'bold', color: 'black', textAlign: 'left' }}> Business Assistant Manager </h4>

                <h5 style={{ fontWeight: 'bold', color: 'black', textAlign: 'left' }}> AirState Solutions <br />

                    New York, USA

                    09/2014-06/2017</h5>

                <p style={{ textAlign: 'left' }}><ul><li>Successfully managed $2-3 million budget projects and successfully achieved the project scheduled goals.</li>

                    <li>Developed and implemented new marketing and sales plans and defined the strategy for the next 5 years.</li>

                    <li>Reviewed constantly the customer feedback and then suggested ways to improve the processes and customer service levels which increased the satisfaction rate from 81% to 95%.</li>

                    <li>Ensured that new clients will grow into a loyal customer base in a specialist niche market by implementing a new loyalty program.</li></ul>
                </p>

                <h4 style={{ fontWeight: 'bold', color: 'black', textAlign: 'left' }}> Business Development Manager </h4>

                <h5 style={{ fontWeight: 'bold', color: 'black', textAlign: 'left' }}> AirState Solutions <br />

                    New York, USA

                    09/2014-06/2017</h5>

                <p style={{ textAlign: 'left' }}><ul><li>Successfully managed $2-3 million budget projects and successfully achieved the project scheduled goals.</li>

                    <li>Developed and implemented new marketing and sales plans and defined the strategy for the next 5 years.</li>

                    <li>Reviewed constantly the customer feedback and then suggested ways to improve the processes and customer service levels which increased the satisfaction rate from 81% to 95%.</li>

                    <li>Ensured that new clients will grow into a loyal customer base in a specialist niche market by implementing a new loyalty program.</li></ul>
                </p>

            </div>
        </>
    )
}

export default Experience
