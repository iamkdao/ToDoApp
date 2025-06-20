import { createTheme } from '@mui/material/styles';
import type { Theme } from '@mui/material/styles';
import { grey } from '@mui/material/colors'


// Define the base theme options that both themes will share
const baseTheme = createTheme({
    typography: {
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    },
    shape: {
        borderRadius: 8,
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none',
                },
            },
        },
    },
});

// Light theme
export const lightTheme: Theme = createTheme({
    ...baseTheme,
    palette: {
        mode: 'light',
        primary: {
            main: '#1976d2',
            contrastText: '#ffffff',
        },
        secondary: {
            main: '#9c27b0',
            contrastText: '#ededed',
        },
        background: {
            default: '#f5f5f5',
            paper: '#ffffff',
            search: grey[400],
        },
        text: {
            primary: 'rgba(0, 0, 0, 0.87)',
            secondary: 'rgba(0, 0, 0, 0.6)',
        },
    },
});

// Dark theme
export const darkTheme: Theme = createTheme({
    ...baseTheme,
    palette: {
        mode: 'dark',
        primary: {
            main: '#90caf9',
            contrastText: 'rgba(0, 0, 0, 0.87)',
        },
        secondary: {
            main: '#ce93d8',
            contrastText: '#292929'
        },
        background: {
            default: '#121212',
            paper: '#1e1e1e',
            search: grey[700]
        },
        text: {
            primary: '#ffffff',
            secondary: 'rgba(255, 255, 255, 0.7)',
        },
    },
});

// Optional: Type for your theme names
export type ThemeMode = 'light' | 'dark';

// Optional: Helper function to get theme by name
export const getTheme = (mode: ThemeMode): Theme => {
    return mode === 'light' ? lightTheme : darkTheme;
};