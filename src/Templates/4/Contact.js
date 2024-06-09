import React from "react";
import { Grid } from "@mui/material";
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#2c2237' : 'white',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

function Contact() {
    return (<div style={{ backgroundColor: "whitesmoke", padding: "5px", paddingTop: "-5px" }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={6}>
                <Item>MobileNo <br />
                    Location <br />
                    Email </Item>
            </Grid>
            <Grid item xs={6}>
                <Item>DateOFBirth <br />
                    Github Link <br />
                    Other Links </Item>
            </Grid>
        </Grid>
    </div>)
}

export default Contact;
