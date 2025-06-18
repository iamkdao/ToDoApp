import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import type { ButtonProps } from '@mui/material';
import { useTheme } from '@mui/material';
import type { Theme } from '@mui/material';
import { alpha } from '@mui/material';

export interface MuiButtonProps extends ButtonProps {
    primary?: boolean;
    label?: string;
    backgroundColor?: string;
    theme?: Theme;
}


export default function MuiButton({
    primary = true,
    label = 'Button',
    backgroundColor,
    theme = useTheme(),
    ...props
}: MuiButtonProps) {
    return (
        <Button
            variant={primary ? "contained" : "outlined"}
            sx={{
                backgroundColor: primary ? theme.palette.primary.main : 'transparent',
                borderColor: 'transparent',
                '&:hover': {
                    borderColor: primary ? 'transparent' : backgroundColor,
                    // transform: 'scale(1.1)',
                    backgroundColor: primary ? alpha(theme?.palette.primary.main, 0.7) : 'transparent',
                    transition: 'transform 300ms ease-in-out'
                }
            }}
            {...props}
        >
            {label}
        </Button>

    );
}