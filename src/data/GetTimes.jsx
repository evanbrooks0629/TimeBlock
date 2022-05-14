import Times from './times.json';
import { Grid, Typography } from '@mui/material';
import generateKey from './generateKey';

const GetTimes = () => {
    const hours = Times.hours;
    let times = [];

    for (let i = 0; i < hours.length; i++) {
        const key1 = generateKey();
        const key2 = generateKey();

        times.push(
            [<Grid item xs={11} style={{height: "40px"}} key={key1}>
                <Typography variant="h7" style={{color: "#eeeeee"}}>{hours[i].time}</Typography>
            </Grid>,
            <Grid item xs={12} style={{height: "4px"}} key={key2}></Grid>]
        );
    }

    return times;
}

export default GetTimes;