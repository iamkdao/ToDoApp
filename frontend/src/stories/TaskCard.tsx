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
import NewTaskCard from './NewTaskCard';

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
        <Box sx={{
            // minWidth: 275,
            m: 2,
        }}>
            <Card variant="outlined"
                sx={{
                    width: '100%',
                    boxSizing: 'border-box',
                    maxWidth: window.innerWidth / 3,
                    maxHeight: window.innerHeight / 2,
                    display: 'flex',
                    flexDirection: 'column'
                }}
            >
                <CardContent >
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        Created on {formattedDate}
                    </Typography>
                    <Typography variant="h5" component="div">
                        {name}
                    </Typography>
                    <Box sx={{
                        // flex: 1,
                        overflow: 'auto',
                        height: '70px',
                    }}>
                        <Typography variant="body2">
                            {description}
                        </Typography>
                    </Box>
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
        <>
            <InfoCard
                name="Sample Project"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi diam leo, consectetur eu felis et, mollis lobortis felis. Donec erat felis, dapibus a nibh eu, mollis bibendum dui. In hac habitasse platea dictumst. Quisque tristique risus mi, nec placerat tellus commodo at. Duis sollicitudin, erat vitae faucibus commodo, nunc eros pretium magna, nec tincidunt nunc nulla id augue. Mauris non convallis augue. Maecenas efficitur sit amet arcu nec suscipit. Suspendisse lorem enim, aliquam eu libero eget, blandit mollis velit. Cras venenatis ultrices metus in viverra.

Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque rutrum sagittis diam, eget feugiat augue condimentum in. Sed non ante at sapien imperdiet porta ac vitae ante. Mauris dapibus hendrerit nunc a venenatis. In ullamcorper et metus a porta. Sed vitae egestas libero. Vivamus non purus eu elit tristique tincidunt. Fusce id lacinia mi, ac ullamcorper tortor.

Sed sed interdum metus. Sed tempor, ipsum et tempor finibus, ipsum nibh euismod augue, hendrerit volutpat magna urna non erat. Morbi fermentum faucibus libero in ullamcorper. Quisque eu neque eu leo gravida vehicula vitae sodales nisl. In maximus consequat quam, eu condimentum enim mollis nec. Morbi maximus purus a justo varius mollis. Vestibulum porttitor interdum dolor. Curabitur egestas tortor a sodales ullamcorper. Fusce sollicitudin justo sed felis sollicitudin, eu ullamcorper ligula lobortis. Phasellus ut odio a enim luctus sodales. Vestibulum tempus feugiat mi, a vestibulum ligula egestas at. Donec pulvinar diam augue, in congue augue dictum id. Cras aliquet elit in turpis feugiat aliquam. Ut posuere ac elit quis feugiat.

Vestibulum lobortis urna eu facilisis lobortis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc imperdiet massa sed dapibus fermentum. Quisque tincidunt urna tortor. Maecenas vitae varius augue. Proin volutpat sed ex non eleifend. Curabitur mollis velit quis dolor sagittis, ut bibendum quam ultricies. Sed maximus commodo quam, consectetur euismod tellus dapibus vel. Donec non lectus mauris. Pellentesque nisl eros, lobortis a lorem quis, lobortis tincidunt nunc. Suspendisse ut tellus eu erat lacinia aliquam. Aenean id lectus sapien.

Morbi porttitor viverra quam, id porta elit viverra vitae. Sed pretium sit amet neque sed bibendum. Aenean gravida molestie turpis ut sagittis. Praesent tempor ex rhoncus, congue sem non, iaculis nibh. Nullam a ex nec felis pellentesque egestas. Vivamus felis orci, aliquam et mollis non, sollicitudin ut magna. Donec feugiat tortor non dolor condimentum, at pulvinar lacus rutrum. In vulputate mauris non ipsum venenatis fringilla. Vivamus non erat et lacus blandit sollicitudin. Sed rutrum nunc vel libero vulputate, ac euismod lacus egestas. Ut iaculis, magna eu viverra condimentum, risus felis feugiat dolor, sed blandit elit elit eget velit. Nullam at turpis enim. Quisque convallis gravida elementum."
                dateCreated={new Date()}
                onDelete={handleDelete}
            />

        </>
    );
}