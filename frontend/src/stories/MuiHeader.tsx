import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { useTheme } from '@mui/material';
import MuiButton from './MuiButton';

type User = {
    name: string;
};

interface HeaderProps {
    user?: User;
    handleProfileOpen?: () => void;
    handleProfileClose?: () => void;
    handleDrawerOpen?: () => void;
};

export default function MenuAppBar({
    user,
    handleProfileOpen,
    handleProfileClose,
    handleDrawerOpen
}: HeaderProps) {
    const theme = useTheme()
    const [auth, setAuth] = React.useState(true);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const options: Intl.DateTimeFormatOptions = {
        year: 'numeric',
        month: 'long',
        day: 'numeric'

    }
    const today = new Date().toLocaleDateString(undefined, options);

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar
                position="static"
                enableColorOnDark={false}
                sx={{
                    backgroundColor: `${theme.palette.background.default}`,
                    color: theme.palette.text.primary,
                    boxShadow: 'none',
                    backgroundImage: 'none'     // to not get the paper overlay
                }}
            >
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                        onClick={handleDrawerOpen}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Todo App
                    </Typography>

                    <Typography sx={{ mr: 2 }}>
                        {today}
                    </Typography>

                    <MuiButton label='Add Tasks' theme={theme} sx={{ mr: 1 }} />

                    {auth && (
                        <div>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleProfileOpen}
                                color="inherit"
                            >
                                <AccountCircle />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorEl}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorEl)}
                                onClose={handleProfileClose}
                            >
                                <MenuItem onClick={handleProfileClose}>Profile</MenuItem>
                                <MenuItem onClick={handleProfileClose}>My account</MenuItem>
                            </Menu>
                        </div>
                    )}
                </Toolbar>
            </AppBar>
        </Box>
    );
}
