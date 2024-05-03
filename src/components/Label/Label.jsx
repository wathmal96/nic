import * as React from 'react';

import Typography from '@mui/material/Typography';

export default function Label({title,detail}) {
    return (
        <Typography variant="h5" gutterBottom>
            {title}{detail}
        </Typography>
    )
}