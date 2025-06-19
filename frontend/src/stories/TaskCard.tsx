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

interface TaskCardProps {
    name: string;
    description: string;
    dateCreated: Date | string;
    onDelete?: () => void;
}

const InfoCard: React.FC<TaskCardProps> = ({ name, description, dateCreated, onDelete }) => {
    // Format the date using dayjs
    const formattedDate = dayjs(dateCreated).format('MMMM D, YYYY [at] h:mm A');

    return (
        <Box sx={{ minWidth: 275, maxWidth: window.innerWidth / 3, m: 2 }}>
            <Card variant="outlined">
                <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        Created on {formattedDate}
                    </Typography>
                    <Typography variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        Description
                    </Typography>
                    <Typography variant="body2">
                        {description}
                    </Typography>
                </CardContent>
                <CardActions
                    sx={{
                        display: 'flex',
                    }}
                >
                    <Box sx={{ flexGrow: 1 }}>  {/* Takes up all available space, pushing button right */}
                        <Tag />
                    </Box>
                    <Button
                        size="small"
                        color="error"
                        startIcon={<DeleteIcon />}
                        onClick={onDelete}
                    >
                        Delete
                    </Button>
                </CardActions>
            </Card>
        </Box>
    );
};

// Example usage:
export default function TaskCard() {
    const handleDelete = () => {
        console.log('Delete clicked');
        // Add your delete logic here
    };

    return (
        <InfoCard
            name="Sample Project"
            description="This is a detailed description of the project or item. It can contain multiple lines of text explaining what this card represents."
            dateCreated={new Date()}
            onDelete={handleDelete}
        />
    );
}