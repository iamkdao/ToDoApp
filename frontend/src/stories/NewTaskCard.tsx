import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import dayjs from 'dayjs'; // You'll need to install dayjs: npm install dayjs
import Tag from './Tag';
import { useTheme } from '@mui/material';
import TaskCard from './TaskCard';


const InfoCard = () => {
    const theme = useTheme()
    return (
        <Box>
            <Card variant="outlined" sx={{
                width: '100%',
                height: '300px',
                backgroundColor: 'transparent',
                border: '2px dashed',
                borderColor: theme.palette.background.search,
                boxSizing: 'border-box',
                // p: '2',
                '&:hover': {
                    border: '2px solid',
                    borderColor: theme.palette.background.search,
                    backgroundColor: theme.palette.background.search
                },
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <CardContent>
                    <Typography variant="h6">
                        Add new task
                    </Typography>
                </CardContent>
            </Card>
        </Box >
    );
};

// Example usage:
export default function NewTaskCard() {
    return (
        <>
            <InfoCard />

        </>
    );
}