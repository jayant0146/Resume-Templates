import * as React from 'react';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Typography from '@material-ui/core/Typography';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function Skills() {
    return (
        <div style={{ color: "#45818e" }}>
            <Typography variant="h5" gutterBottom>
                Skills
            </Typography>
            <Stack direction="column" spacing={2}>
                <Item>ML</Item>
                <Item>C++</Item>
                <Item>Java</Item>
                <Item>Python</Item>
                <Item> Communication </Item>
            </Stack>
        </div>

    );
}