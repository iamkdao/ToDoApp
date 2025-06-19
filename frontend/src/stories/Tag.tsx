import * as React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { useTheme } from '@mui/material';

interface TagProps {
    onClick?: () => {},
}

export default function Tag({
    onClick,
}: TagProps) {
    const theme = useTheme();
    return (
        <Chip label="Chip Filled"
            sx={{
                backgroundColor: theme.palette.secondary.main,
                color: theme.palette.secondary.contrastText,
                fontWeight: 'bold',
                cursor: 'pointer'
            }}
            onClick={onClick}
        />
    );
}