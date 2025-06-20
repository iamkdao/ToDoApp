import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TaskCard from './TaskCard';
import NewTaskCard from './NewTaskCard';

const FrontPage: React.FC = () => {
    return (
        <Box sx={{
            flexGrow: 1,
            p: 3,
            backgroundColor: 'background.default',
            minHeight: '100vh'
        }}>
            <Grid container spacing={2}>
                {/* Example Task Cards */}
                <Grid item size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
                    <TaskCard />
                </Grid>

                {/* Additional Task Cards can be added here */}
                <Grid item size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
                    <TaskCard />
                </Grid>

                <Grid item size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
                    <TaskCard />
                </Grid>

                <Grid item size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
                    <TaskCard />
                </Grid>

                <Grid item size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
                    <TaskCard />
                </Grid>

                {/* New Task Card - Always first */}
                <Grid item size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
                    <NewTaskCard />
                    {/* <TaskCard /> */}
                </Grid>
            </Grid>
        </Box>
    );
};

export default FrontPage;