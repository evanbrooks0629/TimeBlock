import Times from './times.json';
import { Grid, Typography } from '@mui/material';

const GetTimes = () => {
    const hours = Times.hours;
    let times = [];

    for (let i = 0; i < hours.length; i++) {
        times.push(
            [<Grid item xs={11} style={{height: "40px"}}>
                <Typography variant="h7" style={{color: "#eeeeee"}}>{hours[i].time}</Typography>
            </Grid>,
            <Grid item xs={12} style={{height: "4px"}}></Grid>]
        );
    }

    return times;
}

export default GetTimes;