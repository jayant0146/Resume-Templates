import * as React from 'react';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function Contact() {
    return (
        <div>
            <Stack direction="row" spacing={2}>
                <Item>Location</Item>
                <Item>Email</Item>
                <Item>DateOFBirth</Item>
                <Item>Phone Number</Item>
                <Item> Github Link </Item>
                <Item>Other Links</Item>
            </Stack>
        </div>
    );
}
