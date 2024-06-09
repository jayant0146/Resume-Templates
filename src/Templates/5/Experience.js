import React from 'react';
import Typography from '@material-ui/core/Typography';

const Experience = () => {
    return (
        <>
            <div style={{ color: "#45818e" }}>
                <Typography variant="h5" gutterBottom>
                    Work Experience
                </Typography> </div>

            <h4 style={{ fontWeight: 'bold', color: 'black', textAlign: 'left' }}> Business Assistant Manager </h4>

            <h5 style={{ fontWeight: 'bold', color: 'black', textAlign: 'left' }}> AirState Solutions <br />

                New York, USA

                09/2014-06/2017</h5>

            <p style={{ textAlign: 'left' }}><ul><li>Successfully managed $2-3 million budget projects and successfully achieved the project scheduled goals.</li>

                <li>Developed and implemented new marketing and sales plans and defined the strategy for the next 5 years.</li>

            </ul>
            </p>

        </>
    )
}

export default Experience
