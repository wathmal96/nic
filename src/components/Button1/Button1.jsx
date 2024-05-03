import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Margin } from '@mui/icons-material';

export default function Button1({ name, onClick}) {
    return (
        <Button
            onClick={()=>onClick()}
            sx={{ margin: "5px" }}
            variant="contained">{name}</Button>
    )
}