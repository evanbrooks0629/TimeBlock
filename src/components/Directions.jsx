import * as React from 'react';
import { Grid, Typography } from '@mui/material';

const Directions = () => {
    return (
        <Grid container>
            <Grid item xs={3} sm={3} md={1} lg={3} />
            <Grid item xs={12} sx={{ height: { xs: '0px', sm: '50px', md: '250px', lg: '320px' } }}/>
            <Grid item xs={2} />
            <Grid item xs={1} align="center">
                <Typography variant="h4" style={{color: "red"}}>*</Typography>
            </Grid>
            <Grid item xs={7} align="left">
            <Typography align="left" variant="h7" style={{color: "#eeeeee"}} >&bull; Drag the blocks to adjust the times
                <br />&bull; Click the edit icon to edit a block
                <br />&bull; Click the delete icon to delete a block
                <br />&bull; Check or double click a block to complete it</Typography>
            </Grid>
            <Grid item xs={2} />
            <Grid item xs={12} sx={{ height: { xs: '50px', sm: '20px', md: '0px', lg: '0px' } }} />
        </Grid>
    );
}

export default Directions;