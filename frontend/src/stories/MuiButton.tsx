import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import type { ButtonProps } from '@mui/material';

export interface MuiButtonProps extends ButtonProps {
    primary?: boolean;
    label?: string;
    backgroundColor?: string;
}
export default function ContainedButtons({
    primary = true,
    label,
    backgroundColor,
    ...props
}: MuiButtonProps) {
    return (
        <Button
            variant={primary ? "contained" : "outlined"}
            sx={{
                backgroundColor: primary ? backgroundColor : 'transparent',
                borderColor: 'transparent',
                '&:hover': {
                    borderColor: primary ? 'transparent' : backgroundColor,
                    transform: 'scale(1.2)',
                    transition: 'transform 300ms ease-in-out'
                }
            }}
            {...props}
        >
            {label}
        </Button>

    );
}