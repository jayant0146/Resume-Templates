import React from "react";
import Contact from "./Contact";
import About from "./About";
import { Grid } from "@mui/material";
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Left from "./Left";
import Right from "./Right";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

function Template4() {
    return (<div className="template" style={{ backgroundColor: "white" }}>

        <About /> <br />
        <Contact /> <br /><br />
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={7}>
                <Item><Left /></Item>
            </Grid>
            <Grid item xs={5}>
                <Item><Right /></Item>
            </Grid>
        </Grid>
    </div>)
}

export default Template4;