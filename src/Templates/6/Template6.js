import React from "react";
import { Grid } from "@mui/material";
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Left from "./Left";
import Right from "./Right";
import About from "./About";
import Contact from "./Contact";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

function Template6() {
    return (<div className="template">

        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={8}>
                <Item> <About /> </Item>
            </Grid>
            <Grid item xs={4}>
                <Item><Contact /></Item>
            </Grid>
            <Grid item xs={8}>
                <Item> <Left /> </Item>
            </Grid>
            <Grid item xs={4}>
                <Item><Right /></Item>
            </Grid>
        </Grid>
    </div>)
}

export default Template6;